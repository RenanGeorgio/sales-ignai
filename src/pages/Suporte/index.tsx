import Navbar from "@components/Navbar";
import { TextFileIcon, UsersIcon } from "@icons";
import "@styles/chatbot.scss";

const Suporte = () => {
    return (
        <div className="page-content">
            <Navbar />
            <h1 className="text">Suporte ao cliente Ignai</h1>
            <div>
            <div style={{marginLeft:'100px'}}>
                <button className="blueButton">
            <UsersIcon/>
                Pedido
                </button>
                <button className="grayButton">
                <TextFileIcon />
                Tickets
                </button>
            </div>
            </div>
            <textarea
                className="largeInput"
                placeholder="Escreva aqui a sua necessidade que iremos resolver o mais rápido possível"
            />
        </div>
    )
}

export default Suporte;