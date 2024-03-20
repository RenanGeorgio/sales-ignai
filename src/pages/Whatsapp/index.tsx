import Navbar from "../../components/Navbar";
import { TextFileIcon, LinkIcon, UsersIcon } from '@icons';
import '../../styles/chatbot.css';

const Whatsapp = () => {
    return (
        <div className="page-content">
            <Navbar />
            <h1 className="text">Automação WhatsApp</h1>
            <div>
                <div style={{ marginLeft: '100px', display: 'flex' }}>
                    <button className="blueButton">
                        <UsersIcon />
                        Estruturação
                    </button>
                    <button className="grayButton">
                        <LinkIcon />
                        Flow Chart
                    </button>
                    <button className="grayButton">
                        <TextFileIcon />
                        Painel
                    </button>
                </div>
            </div>
            <textarea
                className="largeInput"
                placeholder="Escreva aqui a sua necessidade de automação de WhatsApp que iremos configurar para você..."
            />
        </div>
    )
}

export default Whatsapp;