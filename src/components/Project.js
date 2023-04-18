import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Project() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-right">
      <h2>PROJECTS</h2>
      <hr></hr>
      <h5>Check out my GitHub!</h5>
      <a
        href="https://github.com/Garvit-Batra"
        className="fa fa-github icons project"
        style={{ color: "white" }}
      ></a>
    </div>
  );
}
