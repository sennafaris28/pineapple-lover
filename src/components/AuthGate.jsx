import { useSelector } from 'react-redux';
import { signIn } from '../cloud';

export default function AuthGate() {
  const error = useSelector((s) => s.auth.error);
  return (
    <div className="gate">
      <div className="box">
        <h2>💍 Sign in</h2>
        <p className="sub">Log in to your shared wedding planner.</p>
        <button className="btn" style={{ width: '100%' }} onClick={signIn}>
          Continue with Google
        </button>
        <div className="err">{error}</div>
        <p className="hint">
          Sign in with your Google account. First time? Just sign in once, then the admin adds your
          account to the database rules so you can access the data.
        </p>
      </div>
    </div>
  );
}
