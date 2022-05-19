import React, { useState } from "react";
import "./Hakiteam.css";
import Lastcard from "./Lastcard";
import { datalist } from "./listlastcard";
const Hakiteam = () => {
  const [carddata, setCardData] = useState(datalist);
  return (
    <>
      <div>
        <h1 className="haki_team">THE HAKI TEAM</h1>
      </div>
      <div className="container-fluid" style={{ backgroundColor:"#E1E1E1" }}>
      <div className="row justify-content-evenly" style={{ display:"flex", flexWrap:"wrap" }} >
        {carddata.map((itm) => {
          return (
            <>
              <Lastcard
                key={itm.id}
                imageurl={itm.imageurl}
                namescard={itm.namescard}
                logo={itm.logo}
                buttontext={itm.buttontext}
                des={itm.des}
              />
            </>
          );
        })}
      </div>
      </div>
     
    </>
  );
};

export default Hakiteam;
