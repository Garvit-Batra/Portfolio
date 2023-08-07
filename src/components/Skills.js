import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-left">
      <h2>SKILLS</h2>
      <hr></hr>
      <h5 className="my-2">Programming Languages</h5>
      <div className="container-f my-3">
        <i className="devicon-c-line icons mx-2 my-2 items"></i>
        <i className="devicon-cplusplus-line icons mx-2 my-2 items"></i>
        <i className="devicon-javascript-plain colored icons mx-2 my-2 items"></i>
        <i className="devicon-html5-plain-wordmark colored icons mx-2 my-2 items"></i>
        <i className="devicon-css3-plain-wordmark colored icons mx-2 my-2 items"></i>
        <i className="devicon-python-plain-wordmark colored icons mx-2 my-2 items"></i>
        <i className="devicon-mysql-plain-wordmark icons mx-2 my-2 items"></i>
      </div>

      <h5 className="my-2">Development</h5>
      <div className="container-f my-3">
        <i className="devicon-mongodb-plain-wordmark colored icons mx-2 my-2 items"></i>
        <i className="devicon-express-original-wordmark icons mx-2 my-2 items"></i>
        <i className="devicon-react-original-wordmark colored icons mx-2 my-2 items"></i>
        <i className="devicon-nodejs-plain-wordmark colored icons mx-2 my-2 items"></i>
        <i className="devicon-git-plain-wordmark colored icons mx-2 my-2 items"></i>
        <i className="devicon-github-original-wordmark icons mx-2 my-2 items"></i>
      </div>
    </div>
  );
}
