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

      <div className="row d-flex flex-wrap justify-content-between">
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
    </>
  );
};

export default Hakiteam;
