import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { FIREBASE_CONFIG, cloudEnabled } from './config';

// Initialise Firebase only when a databaseURL is configured. In local-only mode
// these stay null and nothing touches the network.
let auth = null;
let database = null;
let googleProvider = null;

if (cloudEnabled) {
  const app = initializeApp(FIREBASE_CONFIG);
  auth = getAuth(app);
  database = getDatabase(app);
  googleProvider = new GoogleAuthProvider();
}

export { auth, database, googleProvider };
