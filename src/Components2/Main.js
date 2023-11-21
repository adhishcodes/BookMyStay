import React,{useState} from 'react';
import './main.css';
import { Button, Grid, Paper } from '@mui/material';
import BasicSelect from './city';
import MySelect from './city';
import ColorButtons from './submit';
import Album from './destinations';
import {Link, useNavigate} from 'react-router-dom';
import Footer from './Footer';
import img1 from './logo1.jpg';
export default function MyComponent() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoverc,setIsHoverc]=useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseEnter1 = () => {
    setIsHoverc(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseLeave1= () => {
    setIsHoverc(false);
  };
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="Menu">
        
          <div className="item1">
            <img src={img1} width={200}/>
          </div>
          <div className="about">
              <button className="item2" onClick={() => { navigate("/blog") }}>ABOUT US</button>
          </div>
          <div className="about">
              <div className="target-element" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                   CONTACT
              </div>
              {isHoverc && (
              <div className="popover1">
                  <p>bookmystay@gmail.com<br></br>(+91)936588283</p>
              </div>)}
          </div>
          <div className="about">
              <button className="item2" onClick={() => { navigate("/signin") }}>LOG IN</button>
          </div>
      </div>
      <div className="sp"></div>
      <div className="search">
        <div className="cont">
            <div className="cont1">
              Find your perfect Stay
            </div>
            <div className="cont2">
                <div><MySelect/></div>
                <div>
                     <ColorButtons/>
                </div>
            </div>
        </div>
      </div>
      <div className="dest">
          <h1>Popular Destinations to Stay</h1>
      </div>
      <Album/>
      <Footer/>
    </div>
    
  );
}