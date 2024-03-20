import { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout/ChatLayout";
import History from "../../components/Layout/HistoryLayout";
import GraphChat from "../../components/Graph/GraphChat";
import GraphTicket from "../../components/Graph/GraphTicket";
import GraphTicketYou from "../../components/Graph/GraphTicketYou";
import GraphThemes from "../../components/Graph/GraphThemes";
import { BellIcon, TextFileIcon, UsersIcon } from "@icons";
import "../../styles/forms.css";

const Chat: React.FC = () => {
  const [activePage, setActivePage] = useState("Atendimento");
  const handleButtonClick = (pageName: string) => {
    setActivePage(pageName);
  };

  return (
    <div style={{ overflow: "hidden" }} className="page-content">
      <Navbar />
      <h1 className="titleChat">Chat</h1>
      <div className="button-container">
        <button
          className={activePage === "Atendimento" ? "blueButton" : "grayButton"}
          onClick={() => handleButtonClick("Atendimento")}
        >
          <UsersIcon />
          Atendimento
        </button>
        <button
          className={activePage === "Histórico" ? "blueButton" : "grayButton"}
          onClick={() => handleButtonClick("Histórico")}
        >
          {/* <img src={"sino"} alt="Link" /> */}
          <BellIcon />
          Histórico
        </button>
        <button
          className={activePage === "Painel" ? "blueButton" : "grayButton"}
          onClick={() => handleButtonClick("Painel")}
        >
          <TextFileIcon />
          Painel
        </button>
      </div>
      <div>
        {activePage === "Atendimento" && (
          <div>
            <Layout />
          </div>
        )}
        {activePage === "Histórico" && (
          <>
            <History />
          </>
        )}
        {activePage === "Painel" && (
          <>
            <div className="graph-row">
              <GraphChat data={{datasets: [], labels:[] }}/>
              <GraphTicket data={[50, 30, 20, 10]} />
            </div>
            <div className="graph-row">
              <GraphThemes month={""} />
              <GraphTicketYou data={[50, 30, 20, 10]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
