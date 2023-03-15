import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-left" style={{ alignContent: "center" }}>
      <h2>SKILLS</h2>
      <hr style={{ margin: "2% 20% 2% 20%", align: "center" }}></hr>

      <h5 style={{ fontWeight: "bold" }}>Programming Languages</h5>

      <i className="devicon-c-line icons"></i>
      <i className="devicon-cplusplus-line icons"></i>
      <i className="devicon-javascript-plain colored icons"></i>
      <i className="devicon-html5-plain-wordmark colored icons"></i>
      <i className="devicon-css3-plain-wordmark colored icons"></i>
      <i className="devicon-python-plain-wordmark colored icons"></i>
      <i className="devicon-mysql-plain-wordmark colored icons"></i>
      <i className="devicon-rstudio-plain colored icons"></i>

      <h5 style={{ fontWeight: "bold", marginTop: "1%" }}>Development</h5>

      <i className="devicon-mongodb-plain-wordmark colored icons"></i>
      <i className="devicon-express-original-wordmark colored icons"></i>
      <i className="devicon-nodejs-plain-wordmark colored icons"></i>
      <i className="devicon-react-original-wordmark colored icons"></i>
      <i className="devicon-git-plain-wordmark colored icons"></i>
      <i className="devicon-github-original-wordmark colored icons"></i>
    </div>
  );
}
