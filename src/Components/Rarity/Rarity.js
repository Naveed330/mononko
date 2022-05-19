import React, { useState } from "react";
import "./Rarity.css";
import { Card } from "react-bootstrap";
import { data } from "./RarityData";
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
const Rarity = () => {
  const [cardimage, setCardImage] = useState(data);
  console.log("cardimage", cardimage);
  return (
    <>
      <div style={{ backgroundColor: "#F1EEEC", padding: "50px" }}>
        <h1 className="RARITY_class">THE HAKI RARITY</h1>
        <div>
          <h5 style={{ textAlign: "center", fontSize: "30px", color: "black" }}>
            3 DIFFERENT RARITY TIERS
          </h5>
        </div>
        <div className="common_class">
          <div>
           <img src={three} alt=""  className="same_class" />
          </div>
          <div>
           <img src={two} alt=""  className="same_class" />
          </div>
          <div>
           <img src={three} alt=""  className="same_class" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rarity;
