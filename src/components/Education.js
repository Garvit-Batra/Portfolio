import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Block(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-right"
      className="block"
      style={{ textAlign: "center" }}
    >
      <h3>Education</h3>

      <p className="block-text">
        B.E. in Computer Science and Engineering (2020-2024)
        <br /> Thapar Institute of Engineering and Technology, Patiala, Punjab
      </p>

      <p className="block-text">
        B.E. in Computer Science and Engineering (2020-2024)
        <br /> Thapar Institute of Engineering and Technology, Patiala, Punjab
      </p>

      <p className="block-text">
        B.E. in Computer Science and Engineering (2020-2024)
        <br /> Thapar Institute of Engineering and Technology, Patiala, Punjab
      </p>
    </div>
  );
}
