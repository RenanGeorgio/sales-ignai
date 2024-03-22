import React,{ useEffect, useRef, useState } from "react";
import './leadPopover.css';
import { IconButton } from "@mui/material";
import { Plus } from "../Image/icons";

const LeadPopover = ({ children, title, handleClick, cardClassName }) => {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleClickBtn = () => {
    handleClick();
    setShowPopover(false);
  };

  return (
    <div className="lead-popover-container" ref={popoverRef}>
      <button ref={buttonRef} onClick={togglePopover}>{title}</button>
      {showPopover && (
        <div className={`popover ${cardClassName}`}>
          <div style={{
            color:'black', 
            display:'flex', 
            alignItems:'baseline',
            justifyContent:'space-between', 
            // gap:8
            }}>
              <div style={{display:'flex'}}>  
          {children}
              </div>
          <div style={{display:'flex'}}>  
          <IconButton size="small" style={{border:'1px solid black', color:'black', borderRadius:5}} 
          onClick={(e) => handleClickBtn()}>+</IconButton>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadPopover;