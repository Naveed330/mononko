import React from "react";
import img from "../assets/footer.png";
import tt from "../assets/twitter.png";
import insta from "../assets/insta.png";
import aa from "../assets/aa.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="container-fluid footer_image">
        <div className="container">
          <div className="img_class">
            <img src={img} alt="img" />
          </div>
          <div className="link_main_div">
            <div>
              <img src={tt} alt="tt" />
            </div>
            <div>
              <img src={aa} alt="aa" />
            </div>
            <div>
              <img src={insta} alt="insta" />
            </div>
          </div>
          <div className="last_text">
            <p>© Copyright 2022 • Haki • All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
