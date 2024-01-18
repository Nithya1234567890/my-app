import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
    <nav style={{backgroundColor:`${props.modex==='light'&&props.themeColor==='white'?'#ebebeb':'lightgray'}`}} className='navbar navbar-expand-lg'>
        <div className="container-fluid">
          <Link style={{color:'black'}} className="navbar-brand" to="/">
            TextUtils
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </span>
      <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link style={{color:'black'}} className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{color:'black'}} className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            {/* <form class="d-flex"> */}
            <div style={{color:'black',marginLeft:'20px'}} ClassName="form-check form-check-inline">
                <input onClick={props.changeBlue} ClassName="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label ClassName="form-check-label" htmlFor="inlineRadio1">Blue Theme</label>
              </div>
              <div style={{color:'black',marginLeft:'20px'}} ClassName="form-check form-check-inline">
                <input onClick={props.changeGreen} ClassName="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label ClassName="form-check-label" htmlFor="inlineRadio2">Green Theme</label>
              </div>
              <div style={{color:'black',marginLeft:'20px',marginRight:'20px'}} ClassName="form-check form-check-inline">
                <input onClick={props.changeRed} ClassName="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                <label ClassName="form-check-label" htmlFor="inlineRadio3">Red Theme</label>
              </div>
            <div className="form-check form-switch">
            <input onClick={props.toggley} className="form-check-input" type="checkbox" role="switch" id="chexkmode"/>
          <label style={{color:'black'}} className="form-check-label" htmlFor="chexkmode">Enable {`${props.modex}`==='light'?'dark':'light'} Mode</label>
          </div>
      {/* </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
