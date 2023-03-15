import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Education(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-right" style={{ alignContent: "center" }}>
      <h2>EDUCATION</h2>
      <hr style={{ margin: "2% 20% 2% 20%", align: "center" }}></hr>
      <p>
        B.E. in Computer Science and Engineering (2020-2024)
        <br /> Thapar Institute of Engineering and Technology, Patiala, Punjab
      </p>

      <p className="block-text">
        12th Standard, CBSE (2019-2020)
        <br /> Sachdeva Public School, Rohini, Delhi
      </p>

      <p className="block-text">
        12th Standard, CBSE (2017-2018)
        <br /> Sachdeva Public School, Rohini, Delhi
      </p>
    </div>
  );
}
