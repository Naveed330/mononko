import React from 'react'
import secdiv from "../assets/secdiv.png";

const Newcategory = ({title,number,titleone,bgColor}) => {
  return (
    
        <div className="col-md-4 col-sm-12">
          <div className='main_div'>
          <div className="first_div">
            <p
              style={{
                color: "white",
                fontWeight: "bold",
                marginBottom: "10px",
                marginLeft: "18px",
                marginTop:"10px"
              }}
            >
              {number}
            </p>
            <h5
              style={{ color: "white", fontWeight: "bold", marginLeft: "18px" }}
            >
              {title}
            </h5>
            <h5
              style={{ color: "white", fontWeight: "bold", marginLeft: "18px", }}
            >
              {titleone}
            </h5>
          </div>
          </div>
       
        </div>
      
         
     
  )
}

export default Newcategory