import Navbar from "../../components/Navbar";
import usersImage from '../../components/Image/users.svg';
import linkImage from '../../components/Image/link.svg';
import fileTextImage from '../../components/Image/file-text.svg';
import '../../styles/chatbot.css';

const Whatsapp = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text">Automação WhatsApp</h1>
            <div className="container">
            <div className="buttonContainer">
                <button className="blueButton">
                <img src={usersImage} alt="Users" />
                Estruturação
                </button>
                <button className="grayButton">
                <img src={linkImage} alt="Link" />
                Flow Chart
                </button>
                <button className="grayButton">
                <img src={fileTextImage} alt="File Text" />
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