// import React from "react";
// import { Avatar } from "./Avatar";
// import "./chat.css";
// import TextEnter from "./TextEnter";
// import { Phone,Search,Video,DotsVertical } from "../Image/icons";
// import ListarMensagens from "./MessegerPayload";

// export const Treatment = () => {
//   return (
//     <div className="containerchat">
//         <div className="header">
//          <div>
//           <div><img className="img-2" alt="Whatsapp" src="https://c.animaapp.com/5uY2Jqwr/img/whatsapp-33-1-1@2x.png" /></div>
//           <div>
          
//           </div>
//          </div>
//          <div className="rightContainer">
//           <div className="rightContent">
//           <div><Phone className={undefined}/></div>
//           <div><Video className={undefined}/></div>
//           <div><Search className={undefined}/></div>
//           <div><DotsVertical className={undefined}/></div>
//           </div>
        
//          </div>
//         </div>
//     <div className="chat">

//       <div className="talks">
//       <div className="admin">
//         <div className="message-2">
//           <div className="text">
//             <p className="p">Olá! Como podemos lhe ajudar?</p>
//           </div>
//           <div className="time">
//             <div className="checks">
//               <img className="path" alt="Path" src="https://c.animaapp.com/luvsX3DA/img/path-6@2x.png" />
//               <div className="overlap-group-2">
//                 <img className="path-2" alt="Path" src="https://c.animaapp.com/luvsX3DA/img/path-7.svg" />
//                 <img className="shape" alt="Shape" src="https://c.animaapp.com/luvsX3DA/img/shape-3.svg" />
//               </div>
//             </div>
//             <div className="text-wrapper-2">1:15 PM</div>
//           </div>
//         </div>
//       </div>

//       <div className="user">
//         {/* <Avatar
//           avatar="https://c.animaapp.com/luvsX3DA/img/avatar-9@2x.png"
//           backgroundClassName="avatar-2"
//           className="avatar-instance"
//           size="thirty-two"
//         /> */}
//         {/* <div className="message">
//           <div className="message-3">
//             <div className="div-wrapper">
//               <p className="text-wrapper-3">
//                 Olá! Eu fiz um pedido, número 283943, dia 27/07 mas vcs ainda ñ me enviaram a nota fiscal.
//               </p>
//             </div>
//           </div>
//           <div className="text-wrapper-4">1:36 PM</div>
//         </div> */}
//       </div>
//     <ListarMensagens/>
//       </div>
      
//       <TextEnter />
//     </div>
//     </div>
//   );
// }; 

import React from "react";
import { Phone, Search, Video, DotsVertical } from "../Image/icons";
import ListarMensagens from "./MessegerPayload";
import TextEnter from "./TextEnter";
import AddTicket from "./AddTicket/AddTicket";

export const Treatment = () => {
  const adicionarMensagem = (novaMensagem) => {
    console.log("Mensagem recebida:", novaMensagem);
    // Implemente a lógica necessária para adicionar a nova mensagem ao estado de ListarMensagens
  };

  return (
    <div className="containerchat">
      <div className="header">
        <div>
          <img className="img-2" alt="Whatsapp" src="https://c.animaapp.com/5uY2Jqwr/img/whatsapp-33-1-1@2x.png" />
        </div>
        <div className="rightContainer">
          <div className="rightContent">
            <div><Phone className={undefined} /></div>
            <div><Video className={undefined} /></div>
            <div><Search className={undefined} /></div>
            <div><DotsVertical className={undefined} /></div>
          </div>
        </div>
      </div>
      <div className="chat">
        {/* <div className="talks">
          <div className="admin">
            <div className="message-2">
              <div className="text">
                <p className="p">Olá! Como podemos lhe ajudar?</p>
              </div>
              <div className="time">
                <div className="checks">
                  <img className="path" alt="Path" src="https://c.animaapp.com/luvsX3DA/img/path-6@2x.png" />
                  <div className="overlap-group-2">
                    <img className="path-2" alt="Path" src="https://c.animaapp.com/luvsX3DA/img/path-7.svg" />
                    <img className="shape" alt="Shape" src="https://c.animaapp.com/luvsX3DA/img/shape-3.svg" />
                  </div>
                </div>
                <div className="text-wrapper-2">1:15 PM</div>
          <ListarMensagens />
              </div>
            </div>
          </div>
          <div className="user">
   
          </div>
        </div> */}
        {/* <AddTicket /> */}
        <TextEnter onEnviarMensagem={adicionarMensagem} />
      </div>
    </div>
  );
};
