import React,{useState} from "react";
import './leftmenu.css'
import { Phone } from "../Image/icons";

export const LeftMenu = ({onAddTicketClick}) => {
  const [openPage, setOpenPage] = useState(false); 
  const [openTicket, setOpenTicket] = useState(false); 
  const [showAddTicket, setShowAddTicket] = useState(false);


  const toggleAddTicket = () => {
    setShowAddTicket(!showAddTicket);
    onAddTicketClick()
    
  };

  return (
    <div className="left-menu">
      <header className="header-left">
        <img className="icon-instance-node" src="https://c.animaapp.com/5uY2Jqwr/img/avatar-14@2x.png"/>
        <input className="instance"placeholder="Search for contact..."/>
      </header>
      <div className="div-3">
        <div className="heading">

        <button
            style={{ width: '100%' }}
            className={showAddTicket ? 'blueButtonTicket' : 'grayButtonTicket'}
            onClick={toggleAddTicket}
          >
        Adicionar&nbsp;&nbsp;ticket
          <span className="phoneCall">

          <Phone />
          </span>
        </button>
        
        </div>
        <div className="heading-2">
          <div className="text-wrapper-3">Clientes</div>
          {/* <ChevronDown1 className="icon-instance-node" /> */}
        </div>
        <div className="div-content">
        <div className="list">
          <div className="text-2">
            <img className="img-2" alt="Whatsapp" src="https://c.animaapp.com/5uY2Jqwr/img/whatsapp-33-1-1@2x.png" />
            <div className="namr-time">
              <div className="text-wrapper-4">Waldemar Mannering</div>
              <div className="text-wrapper-5">1 Minute</div>
            </div>
            <div className="text-wrapper-6">Atraso no pedido</div>
          </div>
        </div>
        <div className="list">
          {/* <StatusIndicator
            avatarAvatar="https://c.animaapp.com/5uY2Jqwr/img/avatar-12@2x.png"
            avatarBackgroundClassName="design-component-instance-node-2"
            avatarOverlapGroupClassName="status-indicator-4"
            avatarSizeClassName="status-indicator-3"
            className="status-indicator-instance"
            overlapClassName="status-indicator-2"
            size="thirty-eight"
            status="online"
            statusClassName="status-indicator-5"
          /> */}
          <div className="text-2">
            <img className="img-2" alt="Whatsapp" src="https://c.animaapp.com/5uY2Jqwr/img/whatsapp-33-1-1@2x.png" />
            <div className="namr-time">
              <div className="text-wrapper-4">Waldemar Mannering</div>
              <div className="text-wrapper-5">1 Minute</div>
            </div>
            <div className="text-wrapper-6">Atraso no pedido</div>
            {/* <Badge 
              className="badge-instance"
              color="success"
              overlapClassName="badge-2"
              text="Fazenda Boa Esperança"
              type="label"
            /> */}
          </div>
        </div>
        <div className="list">
          {/* <StatusIndicator
            avatarAvatar="https://c.animaapp.com/5uY2Jqwr/img/avatar-11@2x.png"
            avatarBackgroundClassName="design-component-instance-node-4"
            avatarSizeClassName="design-component-instance-node-3"
            className="status-indicator-instance"
            size="thirty-eight"
            status="offline"
          /> */}
          <div className="text-2">
            <img
              className="img-2"
              alt="World wide web PNG"
              src="https://c.animaapp.com/5uY2Jqwr/img/world-wide-web-png-pic-1-1@2x.png"
            />
            <div className="namr-time">
              <div className="text-wrapper-7">Felecia Rower</div>
              <div className="text-wrapper-8">8 Minutes</div>
            </div>
            <div className="text-wrapper-9">Revisão de compra</div>
            {/* <Badge
              className="badge-3"
              color="success"
              overlapClassName="badge-2"
              text="Planta e Casa LTDA"
              type="label"
            /> */}
          </div>
        </div>
        <div className="list">
        
          <div className="text-2">
            {/* <PhoneCall1 className="phone-call" /> */}
            <div className="namr-time">
              <div className="text-wrapper-7">Calvin Moore</div>
              <div className="text-wrapper-8">1 Day</div>
            </div>
            <div className="text-wrapper-9">Orçamento</div>
            {/* <Badge
              className="badge-instance"
              color="success"
              overlapClassName="badge-2"
              text="Casa do Adubo"
              type="label"
            /> */}
          </div>
        </div>
        </div>
      </div>
      <div className="div-3">
        <div className="heading-3">
          <div className="text-wrapper-3">Leads</div>
          {/* <ChevronDown1 className="icon-instance-node" /> */}
        </div>
        <div className="div-content">
        <div className="list">
          {/* <StatusIndicator
            className="status-indicator-instance"
            override={
              <Avatar
                avatar="https://c.animaapp.com/5uY2Jqwr/img/avatar-15@2x.png"
                className="design-component-instance-node-3"
                size="thirty-eight"
              />
            }
            size="thirty-eight"
            status="online"
          /> */}
          <div className="text-2">
            <img className="pngwing" alt="Pngwing" src="https://c.animaapp.com/5uY2Jqwr/img/pngwing-1@2x.png" />
            <div className="text-wrapper-10">Lead 02344</div>
            <div className="text-wrapper-9">Orçamento</div>
          </div>
        </div>
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
        <div className="list">
          {/* <StatusIndicator
            className="status-indicator-instance"
            override={
              <Avatar
                avatar="https://c.animaapp.com/5uY2Jqwr/img/avatar-8@2x.png"
                backgroundClassName="design-component-instance-node-2"
                className="design-component-instance-node-3"
                size="thirty-eight"
              />
            }
            size="thirty-eight"
            status="online"
          /> */}
          <div className="text-2">
            <img className="pngwing-2" alt="Pngwing" src="https://c.animaapp.com/5uY2Jqwr/img/pngwing-2@2x.png" />
            <div className="text-wrapper-10">Lead 30499</div>
            <div className="text-wrapper-9">Informações da empresa</div>
          </div>
        </div>
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
        <div className="list">
          <div className="text-2">
            <img className="img-2" alt="Whatsapp" src="https://c.animaapp.com/5uY2Jqwr/img/whatsapp-33-1-1@2x.png" />
            <div className="text-wrapper-10">Lead 89394</div>
            <div className="text-wrapper-9">Orçamento</div>
          </div>
        </div>
        <div className="list">
          {/* <StatusIndicator
            className="status-indicator-instance"
            override={
              <Avatar
                avatar="https://c.animaapp.com/5uY2Jqwr/img/avatar-6@2x.png"
                backgroundClassName="design-component-instance-node-4"
                className="design-component-instance-node-3"
                size="thirty-eight"
              />
            }
            size="thirty-eight"
            status="offline"
          /> */}
          <div className="text-2">
            {/* <PhoneCall1 className="phone-call" /> */}
            <div className="text-wrapper-10">Lead 54950</div>
            <div className="text-wrapper-9">Pedido de catálogo</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
