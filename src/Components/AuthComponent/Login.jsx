import LoginForm from "./LoginForm";
import Logo from "../../Pages/HeaderComponent/Logo";
import { Link } from "react-router-dom";
import "./auth.css";

const Login = () => {
  return (
    <section id="loginBlock">
      <article>
        <Logo />
        <div className="loginHead">
          <h1>To continue, log in to Spotify.</h1>
          <div className="loginButton">
            <div className="loginButton1">
              <span>
                <i class="fab fa-facebook"></i>
              </span>
              <span>
                <Link to="/">CONTINUE WITH FACEBOOK</Link>
              </span>
            </div>
            <div className="loginButton2">
              <span>
                <i class="fab fa-apple"></i>
              </span>
              <span>
                <Link to="/">CONTINUE WITH APPLE</Link>
              </span>
            </div>
            <div className="loginButton3">
              <span>
                <i class="fab fa-google"></i>
              </span>
              <span>
                <Link to="/">CONTINUE WITH GOOGLE</Link>
              </span>
            </div>
            <div className="loginButton4">
              <Link to="/">CONTINUE WITH PHONE NUMBER</Link>
            </div>
          </div>
        </div>
        <div className="orBlock">
          <strong className="strong">or</strong>
        </div>
        <div className="formContent">
          <LoginForm />
        </div>
      </article>
    </section>
  );
};

export default Login;
