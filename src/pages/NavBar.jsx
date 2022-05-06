import { Link } from 'react-router-dom';
import { useUserContext } from 'context/userContext';
import React from 'react';
import logo from '../assets/unuser.png';
import Button from './Button';

const NavBar = React.memo(function NavBar({ email, displayName, photoURL }) {
  const { user, logoutUser } = useUserContext();
  console.log(user);

  return (
    <div className="container">
      <div className="content__top">
        <header id="header_nav">
          <Link className="logo" alt="logo" to="/">
            <svg
              width="70"
              height="30"
              viewBox="0 0 70 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.024 35.576C11.368 35.576 8.792 35.224 6.296 34.52C3.832 33.784 1.848 32.84 0.344 31.688L2.984 25.832C4.424 26.888 6.136 27.736 8.12 28.376C10.104 29.016 12.088 29.336 14.072 29.336C16.28 29.336 17.912 29.016 18.968 28.376C20.024 27.704 20.552 26.824 20.552 25.736C20.552 24.936 20.232 24.28 19.592 23.768C18.984 23.224 18.184 22.792 17.192 22.472C16.232 22.152 14.92 21.8 13.256 21.416C10.696 20.808 8.6 20.2 6.968 19.592C5.336 18.984 3.928 18.008 2.744 16.664C1.592 15.32 1.016 13.528 1.016 11.288C1.016 9.336 1.544 7.576 2.6 6.008C3.656 4.408 5.24 3.144 7.352 2.216C9.496 1.288 12.104 0.823999 15.176 0.823999C17.32 0.823999 19.416 1.08 21.464 1.592C23.512 2.104 25.304 2.84 26.84 3.8L24.44 9.704C21.336 7.944 18.232 7.064 15.128 7.064C12.952 7.064 11.336 7.416 10.28 8.12C9.256 8.824 8.744 9.752 8.744 10.904C8.744 12.056 9.336 12.92 10.52 13.496C11.736 14.04 13.576 14.584 16.04 15.128C18.6 15.736 20.696 16.344 22.328 16.952C23.96 17.56 25.352 18.52 26.504 19.832C27.688 21.144 28.28 22.92 28.28 25.16C28.28 27.08 27.736 28.84 26.648 30.44C25.592 32.008 23.992 33.256 21.848 34.184C19.704 35.112 17.096 35.576 14.024 35.576ZM33.5934 1.4H41.3694V28.664H58.2174V35H33.5934V1.4Z"
                fill="white"
              />
              <path
                d="M64.8661 35.384C63.5541 35.384 62.4501 34.936 61.5541 34.04C60.6581 33.144 60.2101 32.024 60.2101 30.68C60.2101 29.304 60.6581 28.2 61.5541 27.368C62.4501 26.504 63.5541 26.072 64.8661 26.072C66.1781 26.072 67.2821 26.504 68.1781 27.368C69.0741 28.2 69.5221 29.304 69.5221 30.68C69.5221 32.024 69.0741 33.144 68.1781 34.04C67.2821 34.936 66.1781 35.384 64.8661 35.384Z"
                fill="#9104FF"
                fillOpacity="0.53"
              />
            </svg>
          </Link>

          <nav>
            <ul className="navbar">
              <Link className="links" to="/home">
                Home
              </Link>

              <Link className="links" to="/ImpressionPage">
                Home
              </Link>
            </ul>
          </nav>

          {user ? (
            <div className="user_header">
              <Link to="/account">
                <img src={user.photoURL ? user.photoURL : logo} alt="avatar" className="avatar" />
              </Link>

              <Link to="/">
                <Button onClick={logoutUser}> Log out </Button>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <Button>Login</Button>
            </Link>
          )}
        </header>
      </div>
    </div>
  );
});

export default NavBar;
