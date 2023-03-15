import React, { useEffect } from "react";
import Pic from "../assets/myPic.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
function First() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        data-aos="fade-right"
        style={{ marginTop: "8%", marginBottom: "5%", verticalAlign: "middle" }}
      >
        <div
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            marginRight: "2%",
          }}
        >
          <div>
            <h1 className="writing-text heading">Garvit Batra</h1>

            <h2 className="writing-text heading">Pre-final Year Student</h2>
            <h2 className="writing-text heading">
              B.E. Computer Science Engineering
            </h2>
          </div>
          <div>
            <a
              href="https://www.instagram.com/garvit.batra/"
              class="fa fa-instagram"
            ></a>
            <a
              href="https://www.linkedin.com/in/garvit-batra"
              class="fa fa-linkedin"
            ></a>
            <a href="https://github.com/Garvit-Batra" class="fa fa-github"></a>
            <a
              href="mailto:batra.garvit28@gmail.com"
              class="fa fa-envelope"
            ></a>
          </div>
        </div>
        <img
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            marginTop: "1%",
          }}
          src={Pic}
          alt="pic"
        ></img>
      </div>
    </>
  );
}

export default First;
