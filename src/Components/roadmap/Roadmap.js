import React from 'react'
import onee from "../assets/onee.png"
import "./Roadmap.css"
const Roadmap = () => {
  return (
    <>
    <div className='main_div'>
        <div className='haki_image_class'>
            <img src={onee} alt="onee" />
        </div>
        <h2 className='h2_tag'>ROADMAP</h2>
        {/* cards added */}
    </div>
    </>
  )
}

export default Roadmap