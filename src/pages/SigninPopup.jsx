import React from 'react';
// import googleLogo from '../assets/icons/google-logo.svg';
// import githubLogo from '../assets/icons/github-logo.svg';
import { useUserContext } from '../context/userContext';
import { Redirect } from 'react-router-dom';
import { getAllUsers, createUser } from '../context/userContext';
function SignInPopup() {
  const { signInWithGoogle, signInWithGithub } = useUserContext();

  const { user } = useUserContext();
  const [authUser, setAuthUser] = React.useState({});
  const [allUser, setAllUser] = React.useState([]);
  const [logged, setLogged] = React.useState(false);

  React.useEffect(() => {
    if (Object.keys(authUser).length !== 0) {
      getAllUsers().then(setAllUser);
    }
  }, [authUser]);

  React.useEffect(() => {
    if (authUser.user) {
      if (allUser.includes(authUser.user.uid)) {
        console.log('User is');
        setLogged(true);
      } else {
        console.log("User isn't");
        createUser(authUser.user.uid);
        setLogged(true);
      }
    }
  }, [allUser]);

  return (
    <div className="auth">
      {user && <Redirect to={'/home'} />}
      <div className="popup-blackout">
        <div className="auth__popup">
          <h1>Sign In</h1>
          <hr />

          <div className="auth-ways">
            <div className="auth__buttnon" onClick={signInWithGoogle}>
              <div className="button-content">
                <div className="under-logo">
                  <img
                    className="auth__buttnon-logo"
                    // src={googleLogo}
                    alt=""
                  />
                </div>

                <span className="auth__buttnon-text">Sign in with Google</span>
              </div>
              <div className="auth__button-transition"></div>
            </div>
            <div className="auth__buttnon" onClick={signInWithGithub}>
              <div className="button-content">
                <div className="under-logo">
                  <img
                    className="auth__buttnon-logo"
                    // src={githubLogo}
                    alt=""
                  />
                </div>

                <span className="auth__buttnon-text">Sign in with GitHub</span>
              </div>
              <div className="auth__button-transition"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPopup;
