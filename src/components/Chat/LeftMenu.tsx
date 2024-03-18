import { useState } from "react";
import { PhoneIcon } from "@icons";
import "./leftmenu.css";

interface Props {
  onAddTicketClick: () => void;
  children?: React.ReactNode;
};

export const LeftMenu = ({ onAddTicketClick, children }: Props) => {
  const [showAddTicket, setShowAddTicket] = useState<boolean>(false);
  
  const toggleAddTicket = () => {
    setShowAddTicket(!showAddTicket);
    onAddTicketClick();
  };

  return (
    <div className="left-menu">
      <header className="header-left">
        <img
          className="icon-instance-node"
          src="https://c.animaapp.com/5uY2Jqwr/img/avatar-14@2x.png"
          alt="Avatar-14"
        />
        <input className="instance" placeholder="Search for contact..." />
      </header>
      <div className="div-3">
        <div className="heading">
          <button
            style={{ width: "100%" }}
            className={showAddTicket ? "blueButtonTicket" : "grayButtonTicket"}
            onClick={toggleAddTicket}
          >
            Adicionar&nbsp;&nbsp;ticket
            <span className="phoneCall">
              <PhoneIcon />
            </span>
          </button>
        </div>
        {children}
      </div>
      <div className="div-3">
        <div className="heading-3">
          <div className="text-wrapper-3">Leads</div>
        </div>
        <div className="div-content">
          <div className="list">
            <div className="text-2">
              <img
                className="img-2"
                alt="World wide web PNG"
                src="https://c.animaapp.com/5uY2Jqwr/img/world-wide-web-png-pic-1-1@2x.png"
              />
              <div className="text-wrapper-10">Lead 04432</div>
              <div className="text-wrapper-9">Pedido de catálogo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}