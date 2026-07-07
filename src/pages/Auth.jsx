import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function Auth({ isSignUp: initialSignUp = false }) {
  const [isSignUp, setIsSignUp] = useState(initialSignUp);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [successMsg, setSuccessMsg] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSignUp){
      const {error: signUpError} = await supabase.auth.signUp({email, password})
      if (signUpError) {
        console.error("Error signup : ", signUpError.message)
        return
      }
      setSuccessMsg("Account created! Check your email to confirm your account.")
    } else {
      const {error: logInError} = await supabase.auth.signInWithPassword({email, password})
      if (logInError) {
        console.error("Error signup : ", logInError.message)
        return
    }
  }
  }


  const heading = isSignUp ? 'Create your account' : 'Welcome back';
  const copy = isSignUp
    ? 'Join our community and help us bring more opportunities to young people across the Philippines.'
    : 'Continue with Google to access your member workspace.';
  const emailLabel = 'Email address';
  const passwordPlaceholder = isSignUp ? 'At least 8 characters' : 'Enter your password';
  const submitLabel = isSignUp ? 'Create account' : 'Log in with Email';
  const footerPrompt = isSignUp ? 'Already have an account?' : 'Don’t have an account?';
  const footerAction = isSignUp ? 'Log in' : 'Sign up';

  return (
    <main className="login-page">
      <section className="login-shell">
        <div className="login-card">
          <div className="login-card__info">
            <p className="login-eyebrow">Project SPARK</p>
            <h1>{heading}</h1>
            <p className="login-copy">{copy}</p>
          </div>

          <div className="login-form">
            {successMsg && (
              <div className="login-success-msg">
                <span>✉️</span> {successMsg}
              </div>
            )}

            <button type="button" className="login-google-btn">
              <span className="login-google-icon">G</span>
              Continue with Google
            </button>

            <div className="login-divider">
              <span>or</span>
            </div>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">{emailLabel}</label>
            <input 
              id="email" 
              type="email" 
              placeholder="you@example.com" 
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <label htmlFor="password">Password</label>
            <input 
              id="password" 
              type="password" 
              placeholder={passwordPlaceholder} 
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button type="submit" className="login-submit">{submitLabel}</button>
            </form>
            <p className="login-footer">
              {footerPrompt}{' '}
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setIsSignUp((value) => !value);
                }}
              >
                {footerAction}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Auth;
