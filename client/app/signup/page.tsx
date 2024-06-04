import React from 'react';

function page() {
  return (
    <>
      <a href="project.html" className="unibot">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={23}
            height={23}
            fill="currentColor"
            className="bi bi-chat-left-text-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
          </svg>
        </div>
        <p>UniBot</p>
      </a>
      <div className="wrapper">
        <div className="form-wrapper sign-up">
          <form action="">
            <h2>Sign Up</h2>
            <div className="header">
              <div className="input-group1">
                <input type="text" id="targetdiv" />
                <label htmlFor="">First name</label>
              </div>
              <div className="input-group2">
                <input type="text" required />
                <label htmlFor="">Last name</label>
              </div>
            </div>
            <div className="input-group">
              <input type="email" required />
              <label htmlFor="email">email</label>
            </div>
            <div className="input-group">
              <input type="password" id="targetdiv" required />
              <label htmlFor="">Password</label>
            </div>
            <div className="signIn-link">
              <p>
                Already have an account ?{' '}
                <a href="#" className="signInBtn-link">
                  Sign In
                </a>
              </p>
            </div>
            <button type="submit">sign up</button>
          </form>
        </div>
        <div className="form-wrapper sign-in">
          <form action="">
            <h2>Sign In</h2>
            <div className="input-group">
              <input type="text" required />
              <label htmlFor="">Username</label>
            </div>
            <div className="input-group">
              <input type="password" required />
              <label htmlFor="">Password</label>
            </div>
            <div className="signUp-link">
              <p>
                Don't have an account?{' '}
                <a href="#" className="signUpBtn-link">
                  Sign Up
                </a>
              </p>
            </div>
            <button type="submit">sign in</button>
          </form>
        </div>
        <div className="img">
          <img src="C:\Users\dell\Desktop\1712971955147.png" id="targetImage" />
        </div>
      </div>
    </>
  );
}

export default page;
