import { useEffect, useRef, useState } from "react";
import './leadPopover.css';

const LeadPopover = ({ children }) => {
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

  return (
    <div ref={popoverRef}>
      <button onClick={togglePopover}>+ Coluna</button>
      {showPopover && (
        <div className="popover">
          {children}
        </div>
      )}
    </div>
  );
};

export default LeadPopover;