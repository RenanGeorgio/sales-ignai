import { useEffect, useRef, useState } from "react";
import './leadPopover.css';
import React from "react";

const LeadPopover = ({ children, title, handleClick }) => {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

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
    <div ref={popoverRef}>
      <button onClick={togglePopover}>{title}</button>
      {showPopover && (
        <div className="popover">
          {children}
          <button onClick={(e) => handleClickBtn()}>Adicionar</button>
        </div>
      )}
    </div>
  );
};

export default LeadPopover;