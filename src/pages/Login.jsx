import React from 'react';

function Login() {
  return (
    <main className="login-page">
      <section className="login-shell">
        <div className="login-card">
          <div className="login-card__info">
            <p className="login-eyebrow">Project SPARK</p>
            <h1>Welcome back</h1>
            <p className="login-copy">
              Continue with Google to access your member workspace.
            </p>
          </div>

          <div className="login-form">
            <button type="button" className="login-google-btn">
              <span className="login-google-icon">G</span>
              Continue with Google
            </button>

            <div className="login-divider">
              <span>or</span>
            </div>

            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter your password" />

            <button type="button" className="login-submit">Log in with Email</button>

            <p className="login-footer">
              This is a UI-only placeholder for now.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
