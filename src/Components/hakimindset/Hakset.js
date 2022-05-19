import React from "react";
import "./Hakiset.css";
import { Card } from "react-bootstrap";
import f from "../assets/f.png";
import ff from "../assets/ff.png";
import fff from "../assets/fff.png";
import ffff from "../assets/ffff.png";
import fffff from "../assets/fffff.png";
const Hakset = () => {
  return (
    <>
      <div className="main_div">
        <h1 className="h1_tag">THE HAKI MINDMAP</h1>
        <p
          style={{ textAlign: "center", fontSize: "25px"}}
        >
          Want to take a look into our minds?
        </p>
        <div className="container container_class">
          <div className="row card_class">
            <div className="col-md-4 col-sm-12 mt-3">
              <div className="first_main_div">
                <div className="img_main_div">
                  <img src={f} alt="f" className="image_class" />
                  <div className="cards_text_div">
                    <h3 style={{color:"#CC3131",fontWeight:"bold"}} >01</h3>
                    <h4 style={{color:"#fff", fontWeight:"bold"}}>VALUES</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-3">
              <div className="sec_main_div">
                <div className="sec_img">
                  <img src={ff} alt="f" className="ff_image" />
                  <div className="cards_text_div">
                    <h3 style={{color:"#BCBAB9",fontWeight:"bold"}} >02</h3>
                    <h4 style={{color:"#000", fontWeight:"bold"}}>COMMUNITY </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-3">
              <div className="third_main_div">
                <div className="sec_img">
                  <img src={fff} alt="f" className="fff_class" />
                  <div className="cards_text_div">
                    <h3 style={{color:"#BCBAB9",fontWeight:"bold"}} >03</h3>
                    <h4 style={{color:"#000", fontWeight:"bold"}}>PHYSICAL </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-3">
              <div className="first_l_div">
                <div className="four_main_div">
                  <img src={ffff} alt="f" className="ffff_class" />
                  <div className="cards_text_div">
                    <h3 style={{color:"#BCBAB9",fontWeight:"bold"}} >04</h3>
                    <h4 style={{color:"#000", fontWeight:"bold"}}>METAVERSE </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-3">
              <div className="first_las_div">
                <div className="fifth_main_div">
                  <img src={fffff} alt="f" className="fffff_class" />
                  <div className="cards_text_div">
                    <h3 style={{color:"#BCBAB9",fontWeight:"bold"}} >05</h3>
                    <h4 style={{color:"#000", fontWeight:"bold"}}>MARKETING </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hakset;
