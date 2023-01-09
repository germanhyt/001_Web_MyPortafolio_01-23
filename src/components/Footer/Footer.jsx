import "./Footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

export const Footer = () => {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        Contáctame
        <a href="#info">
          <h2>
            <BsMouse /> - Scrollear hacia arriba -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com" target={"blank"}>
          <BsInstagram className="social" />
        </a>
        <a
          href="https://www.facebook.com/"
          target={"blank"}
        >
          <FaFacebookF className="social" />
        </a>
        <a
          href="https://www.youtube.com/"
          target={"blank"}
        >
          <TiSocialYoutube className="social" />
        </a>

        <a href="https://github.com/" target={"blank"}>
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
};
