import { Fade } from "react-awesome-reveal";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Sidebar from "../Dashboard/Sidebar";
import "./index.css";

const Contact = () => {
  return (
    <div className="b-contact">
      <Sidebar />
      <div className="outer-container">
        <div className="reachme-container">
          <div>
            <Fade direction="down">
              <h1 className="reach-txt">Reach out Me!</h1>
            </Fade>
            <img
              className="rocket"
              src="https://www.clipartbest.com/cliparts/9iR/LyE/9iRLyEbRT.gif"
              alt="rocket"
            />
          </div>
          <div>
            <img
              className="gif"
              src="https://camo.githubusercontent.com/d1c0c4fbd7abd0ba7b4ce3afbb652aa0508ccd17a75be5389b4c74698ac2d2cd/687474703a2f2f7777772e77656232347a6f6e652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f31302f34363230372d70726f6772616d6d65722d312e676966"
              alt="ss"
            />
          </div>
        </div>
        <div className="bb">
          <a
            href=" https://x.com/Sai_dattu_k?t=fB3cRKONfm1xb3973h4JhA&s=08"
            target="_blank"
          >
            <div className="twitter-icons">
              <img
                alt="twitter"
                className="twitter"
                src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png"
              />
            </div>
          </a>
          <a
            href="https://instagram.com/stfu_cooldude?igshid=MzMyNGUyNmU2YQ=="
            target="_blank"
          >
            <div className="instagram-icons">
              <InstagramIcon />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/k-sai-dattu-75327b178?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
          >
            <div className="linked-icons">
              <LinkedInIcon />
            </div>
          </a>
          <a href="https://github.com/saidattuk" target="_blank">
            <div className="git-icons">
              <GitHubIcon />
            </div>
          </a>
          <a
            href="https://www.snapchat.com/add/vitocorleone_9?share_id=-UhP4LObXQ8&locale=en-IN"
            target="_blank"
          >
            <div className="snap-c">
              <img
                className="snap-icons"
                alt="snap"
                src="https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
