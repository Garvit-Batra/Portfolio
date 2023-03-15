import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Project() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-right" style={{ alignContent: "center" }}>
      <h2>PROJECTS</h2>
      <hr style={{ margin: "2% 20% 2% 20%", align: "center" }}></hr>
      <h5>Check out my GitHub!</h5>
      <a
        href="https://github.com/Garvit-Batra"
        className="fa fa-github"
        style={{ fontSize: "2.5rem", color: "black" }}
      >
        {" "}
      </a>
    </div>
  );
}
