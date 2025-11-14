import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const showLogin = () => setIsLogin(true);
  const showRegister = () => setIsLogin(false);

  return (
    <>
      <div className="header">
        <div className="header-left">
          <div className="menu-icon"></div>
          <div className="logo">LANCE</div>
          <div className="nav-links">
            <a href="#">FreeLancers</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/find-work'); }}>Find Work</a>
          </div>
        </div>
        <div className="header-right">
          <button className="btn btn-login" onClick={showLogin}>Login</button>
          <button className="btn btn-signup" onClick={showRegister}>Sign Up</button>
          <button className="icon-btn">❤</button>
          <button className="icon-btn">🔔</button>
          <div className="profile-icon"></div>
        </div>
      </div>

      <div className="main-container">
        {isLogin ? (
          <div className="auth-box">
            <h1 className="auth-title">Login</h1>
            <div className="auth-form">
              <div className="input-group">
                <input type="text" className="input-field" placeholder="username" />
                <span className="input-icon">👤</span>
              </div>
              <div className="input-group">
                <input 
                  type={showLoginPassword ? "text" : "password"} 
                  className="input-field" 
                  placeholder="password" 
                />
                <span 
                  className="input-icon" 
                  style={{cursor: 'pointer'}} 
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                >
                  👁
                </span>
              </div>
              <div className="forgot-password">
                <a href="#">forget password?</a>
              </div>
              <button className="btn-submit">Login</button>
              <div className="switch-text">
                dont have an account? <a href="#" onClick={(e) => { e.preventDefault(); showRegister(); }}>Register</a>
              </div>
              <button className="btn-submit" onClick={showRegister}>Register</button>
              <button className="btn-google">
                <svg className="google-icon" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        ) : (
          <div className="auth-box">
            <h1 className="auth-title">Register</h1>
            <div className="auth-form">
              <div className="input-group">
                <input type="text" className="input-field" placeholder="username" />
                <span className="input-icon">👤</span>
              </div>
              <div className="input-group">
                <input 
                  type={showRegisterPassword ? "text" : "password"} 
                  className="input-field" 
                  placeholder="password" 
                />
                <span 
                  className="input-icon" 
                  style={{cursor: 'pointer'}} 
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                >
                  👁
                </span>
              </div>
              <div className="input-group">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  className="input-field" 
                  placeholder="confirm password" 
                />
                <span 
                  className="input-icon" 
                  style={{cursor: 'pointer'}} 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  👁
                </span>
              </div>
              <button className="btn-submit">Register</button>
              <div className="switch-text">
                already have an account? <a href="#" onClick={(e) => { e.preventDefault(); showLogin(); }}>Login</a>
              </div>
              <button className="btn-submit" onClick={showLogin}>Login</button>
              <button className="btn-google">
                <svg className="google-icon" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthPages;