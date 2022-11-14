import React from "react";
import './App.css';
import logo from './shiba.png';
import {blog} from './App';


export default function Navbar() {
  return (
    <div className="maindiv">
      
      <div className="centerbody">
        <div className="main-center">
          <div className="left">
            <h1>Hi, </h1>
            <p className="matt">I am Matt </p>
            <p className="computerscience">I like computer science cause its cool</p>
          </div>
          <div className="right">
            <div className="logo">

            </div>
          </div>
        </div>
      </div>
      <div className="portfolio">
        <div className="portDiv">
          <div className="small-div"></div>
          <h1>Portfolio</h1>
          <div className="card">
              <div className="top-of-card">
                
              </div>
              <div>
                <p className="thing">Blockchain Techonlogy</p>
              </div>
          </div>
        </div>
      </div>
    </div>

  );
}