import { createSlice } from '@reduxjs/toolkit';
import { cloudEnabled } from '../config';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // { uid, email } when signed in
    status: cloudEnabled ? 'connecting' : 'local', // drives the header sync chip
    error: '', // shown on the sign-in gate
  },
  reducers: {
    setUser: (s, { payload }) => { s.user = payload; },
    setStatus: (s, { payload }) => { s.status = payload; },
    setAuthError: (s, { payload }) => { s.error = payload; },
  },
});

export const { setUser, setStatus, setAuthError } = authSlice.actions;
export default authSlice.reducer;
