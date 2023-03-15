import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import First from "./First";
import Navbar from "./Navbar";

function Home() {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    window.onload = () => {
      setShowContent(true);
    };
  }, []);

  return (
    <div className="App">
      <CSSTransition
        in={showContent}
        timeout={50000}
        classNames="fade"
        unmountOnExit
      >
        <div>
          <Navbar />
          <First />
        </div>
      </CSSTransition>
    </div>
  );
}
export default Home;
