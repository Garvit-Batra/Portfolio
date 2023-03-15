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

      <i class="devicon-c-line icons"></i>
      <i class="devicon-cplusplus-line icons"></i>
      <i class="devicon-javascript-plain colored icons"></i>
      <i class="devicon-html5-plain-wordmark colored icons"></i>
      <i class="devicon-css3-plain-wordmark colored icons"></i>
      <i class="devicon-python-plain-wordmark colored icons"></i>
      <i class="devicon-mysql-plain-wordmark colored icons"></i>
      <i class="devicon-rstudio-plain colored icons"></i>

      <h5 style={{ fontWeight: "bold", marginTop: "1%" }}>Development</h5>

      <i class="devicon-mongodb-plain-wordmark colored icons"></i>
      <i class="devicon-express-original-wordmark colored icons"></i>
      <i class="devicon-nodejs-plain-wordmark colored icons"></i>
      <i class="devicon-react-original-wordmark colored icons"></i>
      <i class="devicon-git-plain-wordmark colored icons"></i>
      <i class="devicon-github-original-wordmark colored icons"></i>
    </div>
  );
}
