import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import Logo from "../../Pages/HeaderComponent/Logo";
import { Link } from "react-router-dom";
import "./auth.css";
import SocialLogin, {
  GoogleProvider,
  FaceBookProvider,
} from "./LoginWithSocialMedia";
import { toast } from "react-toastify";

const Login = () => {
  let history = useHistory();
  let handleClick = async (provider) => {
    try {
      await SocialLogin(provider);
      toast.success("successfully logged in ");
      history.push("/userHome/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };
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
                <Link
                  onClick={() => {
                    handleClick(FaceBookProvider);
                  }}
                >
                  CONTINUE WITH FACEBOOK
                </Link>
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
                <Link
                  onClick={() => {
                    handleClick(GoogleProvider);
                  }}
                >
                  CONTINUE WITH GOOGLE
                </Link>
              </span>
            </div>
            <div className="loginButton4">
              <Link to="/otp">CONTINUE WITH PHONE NUMBER</Link>
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
