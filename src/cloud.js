import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { ref, onValue, set } from 'firebase/database';
import { auth, database, googleProvider } from './firebase';
import { cloudEnabled, WEDDING_ID, STORAGE_KEY } from './config';
import { setUser, setStatus, setAuthError } from './slices/authSlice';
import { replaceAll } from './slices/weddingSlice';

// This module bridges Firebase <-> Redux. It lives outside React: we hand it the
// store once (initCloud) and it dispatches actions as auth/data changes arrive.

let store = null;
let subscribed = false;
let applyingRemote = false; // true while we apply a remote snapshot (so we don't echo it back)
let pushTimer = null;

// The sync middleware checks this so a remote update doesn't trigger a push loop.
export const isApplyingRemote = () => applyingRemote;

// Always cache the latest state locally so the app works offline.
export function persistLocal(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    /* storage full / blocked — ignore */
  }
}

// Called once from main.jsx after the store is created.
export function initCloud(s) {
  store = s;
  if (!cloudEnabled) {
    store.dispatch(setStatus('local'));
    return;
  }
  store.dispatch(setStatus('connecting'));
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch(setUser({ uid: user.uid, email: user.email }));
      subscribe();
    } else {
      store.dispatch(setUser(null));
      store.dispatch(setStatus('connecting'));
    }
  });
}

// Subscribe to the shared document and mirror remote changes into Redux.
function subscribe() {
  if (subscribed) return;
  subscribed = true;
  const r = ref(database, 'weddings/' + WEDDING_ID);
  onValue(
    r,
    (snap) => {
      const remote = snap.val();
      if (remote) {
        // Skip our own echo: only apply if it actually differs from local state.
        if (JSON.stringify(remote) !== JSON.stringify(store.getState().wedding)) {
          applyingRemote = true;
          store.dispatch(replaceAll(remote));
          applyingRemote = false;
        }
      } else {
        // First run for this workspace: seed the cloud from whatever we have.
        set(r, store.getState().wedding);
      }
      store.dispatch(setStatus('synced'));
    },
    () => {
      store.dispatch(setStatus('error'));
      store.dispatch(
        setAuthError('Access denied — ask the admin to allow your account in the database rules.')
      );
    }
  );
}

// Debounced push of the whole document to Firebase.
export function scheduleCloudPush(state) {
  if (!cloudEnabled || !subscribed) return;
  store.dispatch(setStatus('saving'));
  clearTimeout(pushTimer);
  pushTimer = setTimeout(() => {
    set(ref(database, 'weddings/' + WEDDING_ID), state)
      .then(() => store.dispatch(setStatus('synced')))
      .catch(() => store.dispatch(setStatus('error')));
  }, 400);
}

export function signIn() {
  store.dispatch(setAuthError(''));
  signInWithPopup(auth, googleProvider).catch((e) => store.dispatch(setAuthError(e.message)));
}

export function logOut() {
  if (auth) signOut(auth);
}
