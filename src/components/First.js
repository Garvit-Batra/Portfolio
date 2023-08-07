import React, { useEffect } from "react";
import Pic from "../assets/myPic.jpg";
import Aos from "aos";
import Typewriter from "typewriter-effect";
import "aos/dist/aos.css";
function First() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        data-aos="fade-right"
        className="container-f"
        style={{ marginTop: "7%" }}
      >
        <div>
          <div className="mx-5">
            <div className="container-f">
              <h1>I am&nbsp;</h1>
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      "Garvit Batra.",
                      "a Web Developer.",
                      "a Student.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter.pauseFor(100).deleteAll().start();
                  }}
                />
              </h1>
            </div>
            <h2>Final&nbsp;</h2>
            <h2>Year</h2>
            <br></br>
            <h2>B.E.&nbsp;</h2>
            <h2>Computer&nbsp;</h2>
            <h2>Science&nbsp;</h2>
            <h2>Engineering</h2>
          </div>
          <div>
            <a
              href="https://www.instagram.com/garvit.batra/"
              className="fa fa-instagram social items"
            >
              {" "}
            </a>
            <a
              href="https://www.linkedin.com/in/garvit-batra"
              className="fa fa-linkedin social items"
            >
              {" "}
            </a>
            <a
              href="https://github.com/Garvit-Batra"
              className="fa fa-github social items"
            >
              {" "}
            </a>
            <a
              href="mailto:batra.garvit28@gmail.com"
              className="fa fa-envelope social items"
            >
              {" "}
            </a>
          </div>
        </div>
        <img src={Pic} alt="pic" className="mx-5"></img>
      </div>
    </>
  );
}

export default First;
