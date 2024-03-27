import { useEffect, useRef, useState } from "react";
import { IconButton } from "@mui/material";
import "./LeadPopover.module.css";

interface Props {
  title: string;
  cardClassName?: string;
  handleClick: () => void;
  children?: React.ReactNode;
};

const LeadPopover = ({ title, handleClick, cardClassName, children }: Props) => {
  const [showPopover, setShowPopover] = useState<boolean>(false);

  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  const handleClickBtn = () => {
    handleClick();
    setShowPopover(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      if (popoverRef.current) {
        // @ts-ignore
        if (!popoverRef.current.contains(event.target)) {
          setShowPopover(false);
        }
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="lead-popover-container" ref={popoverRef}>
      <button ref={buttonRef} onClick={togglePopover}>{title}</button>
      {showPopover && (
        <div className={`popover ${cardClassName}`}>
          <div style={{color:'black', display:'flex', alignItems:'center', justifyContent:'space-between', gap:8}}>
            {children}
            <IconButton size="small" style={{border:'1px solid black', color:'black', marginLeft:'inherit', borderRadius:5}} 
              onClick={(_e: any) => handleClickBtn()}
            >
                +
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeadPopover;