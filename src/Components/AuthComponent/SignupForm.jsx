import React from "react";
import firebase from "../../firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, withRouter } from "react-router-dom";

const SignupForm = ({ history }) => {
  let [state, setState] = useState({
    email: "",
    email1: "",
    password: "",
    profile_name: "",
    gender: "",
    month: "",
    dd: "",
    yyyy: "",
    loading: false,
  });
  let {
    email,
    email1,
    password,
    profile_name,
    gender,
    month,
    dd,
    yyyy,
    loading,
  } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setState({ loading: true });
      if (email === email1) {
        let USER_DATA = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        console.log(USER_DATA);
        let confirmMessage = `A verification message has been sent to ${email} and verify and login`;
        USER_DATA.user.sendEmailVerification();
        //? we get confirm alert message
        toast.info(confirmMessage);
        //? redirect to another page
        history.push("./login");
      } else {
        //? email not matching error - email not same
        toast.error("confirm email is not matching");
        console.log("error");
      }
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };

  return (
    <div className="addForm">
      <h2>Sign up with your email address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">What's your email?</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email1">Confirm your email</label>
          <input
            type="email"
            className="form-control"
            name="email1"
            id="email1"
            required
            placeholder="Enter your email again"
            value={email1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Create a password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            required
            placeholder="Create a password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          {" "}
          <label htmlFor="profile_name">What should we call you?</label>
          <input
            type="text"
            className="form-control"
            name="profile_name"
            id="profile_name"
            required
            placeholder="Enter a profile name"
            value={profile_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h5>This appears on your profile.</h5>
        </div>
        <div className="form-group">
          <label htmlFor="date">What's your date of birth?</label>
          <div className="dateBlock">
            <input
              type="text"
              name="month"
              placeholder="Month"
              value={month}
              onChange={handleChange}
            />
            <input
              type="text"
              name="dd"
              placeholder="DD"
              value={dd}
              onChange={handleChange}
            />
            <input
              type="text"
              name="yyyy"
              placeholder="YYYY"
              value={yyyy}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="gender">What's your gender?</label>
          <main className="genderBlock" onChange={handleChange} value={gender}>
            <span>
              <input type="radio" name="gender" id="gender" value="male" />
              Male
            </span>
            <span>
              <input type="radio" name="gender" id="gender" value="female" />
              Female
            </span>
            <span>
              <input
                type="radio"
                name="gender"
                id="gender"
                value="non-binary"
              />
              Non-binary
            </span>
          </main>
        </div>
        <div className="form-group">
          <input type="checkbox" name="text" id="text" />
          <span className="checkBoxContent">
            Share my registration data with Spotify's content providers for
            marketing purposes.
          </span>
        </div>
        <div className="form-group">
          <p className="copyWriteText">
            <p>
              By clicking on sign-up, you agree to Spotify's{" "}
              <Link className="color">Terms and Conditions of Use.</Link>
            </p>
            <br />
            To learn more about how Spotify collects, uses, shares and protects
            your personal data, please see
            <Link className="color"> Spotify's Privacy Policy.</Link>
          </p>
        </div>
        <div className="form-group btn-button">
          <button>{loading === true ? "Loading...." : "signup"}</button>
        </div>
        <div className="form-group">
          <h3>
            Have an account?{" "}
            <Link className="color" to="./login">
              {" "}
              Log in.
            </Link>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignupForm);
