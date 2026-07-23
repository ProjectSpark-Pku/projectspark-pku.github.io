import React from 'react';
import { supabase } from '../supabaseClient';

export default function GoogleSignIn() {
  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });

    if (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <button type="button" className="login-google-btn" onClick={handleGoogleSignIn}>
      <span className="login-google-icon">G</span>
      Continue with Google
    </button>
  );
}
