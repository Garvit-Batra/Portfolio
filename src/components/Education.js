import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Education(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-right">
      <h2>EDUCATION</h2>
      <hr></hr>
      <p>
        B.E. in Computer Science and Engineering (2020-2024)
        <br /> Thapar Institute of Engineering and Technology, Patiala, Punjab
      </p>

      <p>
        12th Standard, CBSE (2019-2020)
        <br /> Sachdeva Public School, Rohini, Delhi
      </p>

      <p>
        10th Standard, CBSE (2017-2018)
        <br /> Sachdeva Public School, Rohini, Delhi
      </p>
    </div>
  );
}
