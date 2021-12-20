import React, { useContext, useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContextApi } from "../../Apis/AuthContext";
import firebase from "../../firebase";

const HeaderMenu = () => {
  let AUTH = useContext(AuthContextApi);
  let [toogle, setToggle] = useState(false);
  let toggleElement = useRef();
  let childRef = useRef();
  let ToggleIt = () => {
    setToggle(!toogle);
  };

  const handleClickOutside = (event) => {
    if (
      childRef.current &&
      toggleElement.current &&
      !toggleElement.current.contains(event.target) &&
      !childRef.current.contains(event.target)
    ) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let Logout = () => {
    firebase
      .auth()
      .signOut()
      .then((_) => {
        toast.success("successfully logged out from application");
        window.location.assign("/login");
      })
      .catch((err) => toast.error(err.message));
  };

  let AnonymousUser = () => (
    <Fragment>
      <li>
        <Link to="/">Premium</Link>
      </li>
      <li>
        <Link to="/">Support</Link>
      </li>
      <li>
        <Link to="/">Download</Link>
      </li>
      <li className="bar"></li>
      <li>
        <Link to="/signup">Sign up</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
  let AuthenticatedUser = () => (
    <Fragment>
      <div className="upgrade">
        <button>Upgrade</button>
      </div>
      <li>
        <Link to="">
          <figure
            className="profile_img"
            onClick={ToggleIt}
            ref={toggleElement}
          >
            {AUTH === null ? (
              "Loading..."
            ) : (
              <img src={AUTH.photoURL} alt={AUTH.displayName} />
            )}
            <figcaption>{AUTH.displayName}</figcaption>
            <span>
              {toogle === true ? (
                <i class="fas fa-caret-up"></i>
              ) : (
                <i class="fas fa-caret-down"></i>
              )}
            </span>
          </figure>
          <div
            className="dropDown"
            ref={childRef}
            style={toogle === true ? { display: "block" } : { display: "none" }}
          >
            <ul>
              <li>
                <Link to="">Account</Link>
              </li>
              <li>
                <Link to="/UserHome/profile">Profile</Link>
              </li>
              <li>
                <Link to="">Upgrade to Premium</Link>
              </li>
              <li>
                <a onClick={Logout}>Logout</a>
              </li>
            </ul>
          </div>
        </Link>
      </li>
    </Fragment>
  );
  return (
    <Fragment>
      <nav>
        <ul>{AUTH ? <AuthenticatedUser /> : <AnonymousUser />}</ul>
      </nav>
    </Fragment>
  );
};

export default HeaderMenu;
