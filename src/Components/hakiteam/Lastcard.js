import React from "react";
import "./Hakiteam.css";
import { Card, Button } from "react-bootstrap";
const Lastcard = ({ imageurl, namescard, logo, buttontext, des }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 pr-0 ">
      <Card style={{ width: "100%", backgroundColor: "#E8E8E8",maxWidth:"350px", }} className="card_main_class">
        <Card.Img
          variant="top"
          src={imageurl}
          className="card_image_class"
          style={{ marginTop: "30px" }}
        />
        <Card.Body>
          <Card.Title>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "40px",
                display: "flex",
                gap: "15px",
                justifyContent: "center",
              }}
            >
              {namescard}
              <img src={logo} alt="logo" style={{ width: "40px" }} />
            </div>
          </Card.Title>
          <div className="btn_text">
            <Button type="button"> {buttontext} </Button>
          </div>
          <Card.Text style={{ color: "black", marginTop: "10px", paddingBottom:"40px", textAlign:"center" }}>
            {des}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Lastcard;
