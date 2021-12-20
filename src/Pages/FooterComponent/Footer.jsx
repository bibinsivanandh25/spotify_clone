import React from "react";
import "./FooterComponent.css";
import Logo from "../HeaderComponent/Logo";

const Footer = () => {
  return (
    <footer id="footerBlock">
      <nav>
        <div className="footerBlock1">
          <Logo />
        </div>
        <div className="footerBlock2">
          <div className="block1">
            <ul>
              <li>COMPANY</li>
              <li>About</li>
              <li>Jobs</li>
              <li>For the Record</li>
            </ul>
          </div>
          <div className="block2">
            <ul>
              <li>COMMUNITIES</li>
              <li>For Artists</li>
              <li>Developers</li>
              <li>Advertising</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>
          </div>
          <div className="block3">
            <ul>
              <li>USEFUL LINKS</li>
              <li>Support</li>
              <li>Web Player</li>
              <li>Free Mobile App</li>
            </ul>
          </div>
        </div>

        <div className="footerBlock3">
          <ul className="fonts">
            <li>
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="footerPart">
        <div className="global">
          <div>
            <span>
              <i className="fal fa-globe"></i>
            </span>
            <span>India (English)</span>
          </div>
        </div>
        <div className="blockFooter">
          <div className="footer1">
            <ul>
              <li>
                <a href="/">Legal</a>
              </li>
              <li>
                <a href="/">Privacy Center</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Cookies</a>
              </li>
              <li>
                <a href="/">About Ads</a>
              </li>
            </ul>
          </div>
          <div className="footer2">
            <ul>
              <li>
                <a href="/">
                  <span>
                    <i class="fal fa-copyright"></i>
                  </span>{" "}
                  2021 Spotify AB
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
