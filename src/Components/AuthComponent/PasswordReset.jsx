import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import "./auth.css";

const PasswordReset = () => {
  let history = useHistory();
  let [state, setState] = useState({
    loading: false,
    email: "",
  });
  let { loading, email } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  //? password reset
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setState({ loading: true });
      firebase.auth().sendPasswordResetEmail(email);
      let message = `Password reset message has been sent to ${email} address`;
      toast.info(message);
      history.push("/login");
    } catch (err) {
      toast.error(err.message);
    }
    setState({ loading: false, email: "" });
  };
  return (
    <section id="authBlock">
      <article>
        <div className="authContent">
          <h1>Password Reset</h1>
          <p className="emailAdd">
            Enter your <strong>Spotify username</strong>, or the{" "}
            <strong>email address</strong> that you used to register. We'll send
            you an email <br />
            with your username and a link to reset your password.
          </p>
        </div>
        <div className="formContent">
          <div className="addForm">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="password-reset" className="labelValue">
                  Email address or username{" "}
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="inputValue"
                  name="email"
                  value={email}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group btn-button btn-send">
                <button>{loading ? "Loading..." : "SEND"}</button>
                <p>
                  If you still need help, contact{" "}
                  <Link to="/help">Spotify Support</Link> .
                </p>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PasswordReset;
