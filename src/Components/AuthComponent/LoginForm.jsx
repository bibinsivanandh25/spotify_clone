import React, { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";

const LoginForm = ({ history }) => {
  let [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
  });
  let { email, password, loading } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let user_data = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (user_data.user.emailVerified === true) {
        toast.success(`successfully ${email} logged in`);
        history.push("/");
      } else {
        history.push("/login");
        toast.error(
          `email has not yet verified got to ${email} verify then login`
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };
  return (
    <div className="addForm">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address or username</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            required
            placeholder="Email address or username"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            required
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group forgot">
          <Link to="/password-rest">Forgot your password?</Link>
        </div>

        <div className="form-checkbox">
          <div className="checkbox">
            <input type="checkbox" name="text" id="text" />
            <span>Remember me</span>
          </div>
          <div className="button">
            <button>{loading === true ? "Loading...." : "LOG IN"}</button>
          </div>
        </div>

        <div className="separator">
          <p></p>
        </div>

        <div className="noAccount">
          <h2>Don't have an account?</h2>
        </div>

        <div className="btn-spotify">
          <button>
            <a href="/signup">SIGN UP FOR SPOTIFY</a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
