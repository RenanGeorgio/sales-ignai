import React, { useState } from 'react';
import clip from '../../components/Image/paperclip.svg';
import message from '../../components/Image/message-dots-gray.svg';
import avatar from '../../components/Image/Avatar3.png';

import '../../styles/leads.css';  
import Navbar from '../../components/Navbar';
import LeadModal from '../../components/Modal';
import SearchFilter from '../../components/Table/searchFilter';

const Leads: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showKanban, setShowKanban] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleShowKanban = () => {
        setShowKanban(true);
    };

    const handleShowList = () => {
        setShowKanban(false);
    };

    return (
        <>
            <Navbar />
            { showKanban ? (
                <SearchFilter setShowList={handleShowList} />
            ) : (
                <div className="leads-kanban">
                    <div className="button-group">
                        <button>+ Coluna</button>
                        <div className="divider"></div>
                        <button onClick={handleShowKanban}>Ver Lista</button>
                        <div className="divider"></div>
                        <button>Editar</button>
                    </div>
                    <div className="select-box">
                    <select className="select-box">
                        <option>Assignados a mim</option>
                        <option>Todos</option>
                    </select>
                    </div>

                    <div className="kanban-columns">
                        <div className="kanban-column">
                        <h2>Contato Inicial</h2>
                        <div className="menu-icon-leads">&#8942;</div>
                        <button className="add-button">+ Adicionar</button>
                        <div className="info-section contact-column" onClick={openModal}>
                            <p>MaxAgro LTDA</p>
                            <div className="icons-section">
                                <img src={clip} alt="Ícone 1" />
                                <span className="last-number">3</span>
                                <img src={message} alt="Ícone 2" />
                                <span>5</span>
                            </div>
                            <img src={avatar} alt="Ícone 3" className="right-icon" />
                        </div>
                        <div className="info-section contact-column" onClick={openModal} style={{marginTop: '10px'}}>
                            <p>Químicos Co</p>
                            <div className="icons-section">
                                <img src={clip} alt="Ícone 1" />
                                <span className="last-number">3</span>
                                <img src={message} alt="Ícone 2" />
                                <span>5</span>
                            </div>
                            <img src={avatar} alt="Ícone 3" className="right-icon" />
                        </div>
                        <div className="info-section contact-column" onClick={openModal} style={{marginTop: '10px'}}>
                            <p>Farm Cosméticos</p>
                            <div className="icons-section">
                                <img src={clip} alt="Ícone 1" />
                                <span className="last-number">3</span>
                                <img src={message} alt="Ícone 2" />
                                <span>5</span>
                            </div>
                            <img src={avatar} alt="Ícone 3" className="right-icon" />
                        </div>
                    </div>

                        <div className="kanban-column">
                            <h2>Discussões</h2>
                            <div className="menu-icon-leads">&#8942;</div>
                            <button className="add-button">+ Adicionar</button>
                            <div className="info-section discussion-column" onClick={openModal} >
                                <p>Nice Foods</p>
                                <div className="icons-section">
                                    <img src={clip} alt="Ícone 1" />
                                    <span className="last-number">3</span>
                                    <img src={message} alt="Ícone 2" />
                                    <span>5</span>
                                </div>
                                <img src={avatar} alt="Ícone 3" className="right-icon" />
                            </div>
                            <div className="info-section discussion-column" onClick={openModal} style={{marginTop: '10px'}}>
                                <p>Fazenda Amiga</p>
                                <div className="icons-section">
                                    <img src={clip} alt="Ícone 1" />
                                    <span className="last-number">3</span>
                                    <img src={message} alt="Ícone 2" />
                                    <span>5</span>
                                </div>
                                <img src={avatar} alt="Ícone 3" className="right-icon" />
                            </div>
                        </div>

                        <div className="kanban-column">
                            <h2>Tomada de Decisão</h2>
                            <div className="menu-icon-leads">&#8942;</div>
                            <button className="add-button">+ Adicionar</button>
                            <div className="info-section decision-column" onClick={openModal} >
                                <p>Planta e Raiz</p>
                                <div className="icons-section">
                                    <img src={clip} alt="Ícone 1" />
                                    <span className="last-number">3</span>
                                    <img src={message} alt="Ícone 2" />
                                    <span>5</span>
                                </div>
                                <img src={avatar} alt="Ícone 3" className="right-icon" />
                            </div>
                            <div className="info-section decision-column" onClick={openModal} style={{marginTop: '10px'}}>
                                <p>Fazenda Master</p>
                                <div className="icons-section">
                                    <img src={clip} alt="Ícone 1" />
                                    <span className="last-number">3</span>
                                    <img src={message} alt="Ícone 2" />
                                    <span>5</span>
                                </div>
                                <img src={avatar} alt="Ícone 3" className="right-icon" />
                            </div>
                        </div>

                        <div className="kanban-column">
                            <h2>Contrato</h2>
                            <div className="menu-icon-leads">&#8942;</div>
                            <button className="add-button">+ Adicionar</button>
                            <div className="info-section contract-column" onClick={openModal}>
                                <p>Café dos Irmãos</p>
                                <div className="icons-section">
                                    <img src={clip} alt="Ícone 1" />
                                    <span className="last-number">3</span>
                                    <img src={message} alt="Ícone 2" />
                                    <span>5</span>
                                </div>
                                <img src={avatar} alt="Ícone 3" className="right-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isModalOpen && <LeadModal closeModal={closeModal} />}
        </>
    );
};

export default Leads;
