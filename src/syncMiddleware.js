import { persistLocal, scheduleCloudPush, isApplyingRemote } from './cloud';

// After any action that changes the wedding data, cache it locally and (unless the
// change *came from* the cloud) push it up. This replaces the vanilla version's
// manual save() calls scattered through every handler.
export const syncMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (typeof action.type === 'string' && action.type.startsWith('wedding/')) {
    const state = store.getState().wedding;
    persistLocal(state);
    if (!isApplyingRemote()) scheduleCloudPush(state);
  }
  return result;
};
