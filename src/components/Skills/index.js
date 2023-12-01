import { Fade } from "react-awesome-reveal";
import Sidebar from "../Dashboard/Sidebar";
import "./index.css";

const Skills = () => {
  return (
    <div className="b">
      <Sidebar />

      <div className="name-what">
        <Fade direction="down">
          <h1 className="what-center">What I do</h1>
        </Fade>
        <div className="w">
          <Fade direction="right">
            <div className="skill-card">
              <img
                className="python"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png"
                alt="c"
              />
            </div>
          </Fade>
          <Fade direction="right">
            <div className="skill-card">
              <img
                className="cplus"
                src="https://www.shutterstock.com/image-vector/emblem-c-plus-programming-language-600nw-1669056601.jpg"
                alt="cplus"
              />
            </div>
          </Fade>
          <Fade>
            <div className="skill-card">
              <img
                className="python"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png"
                alt="python"
              />
            </div>
          </Fade>
          <Fade>
            <div className="skill-card">
              <img
                className="java"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
                alt="java"
              />
            </div>
          </Fade>
          <Fade direction="left">
            <div className="skill-card">
              <img
                className="python"
                src="https://play-lh.googleusercontent.com/vzHVyL8G7birnPZ0zuCQQ2uDxuLIXzYOUGjFDFzIqfx-ww1fq8IysoEiWzhWI3Dw08g"
                alt="html"
              />
            </div>
          </Fade>
          <Fade direction="left">
            <div className="skill-card">
              <img
                className="python"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                alt="css"
              />
            </div>
          </Fade>
          <Fade direction="right">
            <div className="skill-card">
              <img
                className="javascript"
                src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png"
                alt="javascript"
              />
            </div>
          </Fade>
          <Fade>
            <div className="skill-card">
              <img
                className="react"
                src="https://www.bairesdev.com/wp-content/uploads/2022/06/Picture6-1.svg"
                alt="react"
              />
            </div>
          </Fade>
          <Fade>
            <div className="skill-card">
              <img
                className="javascript"
                src="https://www.mag-corp.com/wp-content/uploads/2021/08/angular.png"
                alt="angular"
              />
            </div>
          </Fade>
          <Fade direction="left">
            <div className="skill-card">
              <img
                className="javascript"
                src="https://s3-alpha.figma.com/hub/file/1538476537/9b123151-9352-4e08-bee6-61d9244a0477-cover.png"
                alt="figma"
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Skills;
