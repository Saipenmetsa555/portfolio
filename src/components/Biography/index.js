import { Fade } from "react-awesome-reveal";
import Sidebar from "../Dashboard/Sidebar";
import "./index.css";

const Biograph = () => {
  return (
    <div className="b-bio">
      <Sidebar />
      <div className="all-center">
        <div className="bookhead-align">
          <img src="https://i.gifer.com/P0i7.gif" alt="book" className="book" />
          <Fade direction="down">
            <h1 className="education">Education</h1>
          </Fade>
        </div>

        <div className="education-container">
          <div className="b-tech">
            <Fade>
              <h1 className="clz">D.N.R College Of Engineering & Technology</h1>
              <p className="sp">Computer Science and Engineering</p>
              <span className="yr">June 2018 - April 2022</span>
            </Fade>
          </div>
          <div className="b-tech">
            <Fade>
              <h1 className="clz">Narayana Junior College</h1>
              <p className="sp">Intermediate</p>
              <span className="yr">June 2016 - April 2018</span>
            </Fade>
          </div>
          <div className="b-tech">
            <Fade>
              <h1 className="clz">Krishnaveni Talent School</h1>
              <p className="sp">Secondary School Education</p>
              <span className="yr">June 2015 - April 2026</span>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Biograph;
