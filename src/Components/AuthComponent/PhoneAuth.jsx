import React, { useState } from "react";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import Logo from "../../Pages/HeaderComponent/Logo";
import { useHistory } from "react-router-dom";
import "./auth.css";

const PhoneAuth = () => {
  let history = useHistory();
  let [state, setState] = useState({
    phone: "",
    loading: false,
  });
  let { phone, loading } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let recaptchaContainer = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );

      let confirmationMessage = await firebase
        .auth()
        .signInWithPhoneNumber(phone, recaptchaContainer);
      let OTPCODE = window.prompt("enter OTP");
      await confirmationMessage.confirm(OTPCODE);
      toast.info(`Successfully ${phone} number logged in`);
      history.push("/userHome/profile");
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false, phone: "" });
  };
  return (
    <section id="phoneAuth">
      <article>
        <Logo />
        <p></p>
        <div className="phoneBlock">
          <h2>Enter phone number</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-auth">
              <input type="text" name="value" defaultValue={+91} />

              <input
                type="text"
                placeholder="Phone number"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </div>

            <div
              id="recaptcha-container"
              style={{ marginTop: "18px", marginLeft: "18px" }}
            ></div>

            <div className="form-auth1">
              <div className="checkbox1">
                <input type="checkbox" name="text" id="text" />
                <span>Remember me</span>
              </div>
              <div className="button1">
                <button>{loading ? "Sending..." : "Send"}</button>
              </div>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default PhoneAuth;
