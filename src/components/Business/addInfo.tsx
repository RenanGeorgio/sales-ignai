import React from 'react';
import PedidoInfoModal from '../Modal/pedidoInfo';
import '../../styles/business.css';
import PrecoModal from '../Modal/price';
import ArquivosModal from '../Modal/arquivos';
import OrganizeModal from '../Modal/organize';
import VariantesModal from '../Modal/variantes';
import InventarioModal from '../Modal/inventario';

interface AddInfoProps {
    setShowList: () => void;
}

const AddInfo: React.FC<AddInfoProps> = ({ setShowList }) => {
    return (
        <div className="business-add-info-container">
            <div style={{width:'98%'}}>
                <div style={{ alignSelf: 'stretch', paddingLeft: 4, paddingRight: 1, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', width: '100%', marginLeft:'10px', marginTop:'15px' }}>
                    <div style={{ color: 'black', fontSize: 18, fontFamily: 'sans-serif', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word' }}>Adicionar Pedido / Proposta</div>
                </div>
                <div style={{ justifyContent: 'space-between', alignItems: 'center', gap: 24, display: 'flex', width: '100%', padding: '5px 0px 1px 10px', marginBottom:'25px', marginLeft:'10px'}}>
                    <div style={{ flex: '1 ', height: 38, borderRadius: 6, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', width: '100px' }}>
                        <div style={{ flex: '1 1 0', height: 38, background: 'white', borderRadius: 6, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <form style={{ width: '100%', height: '95%' }}>
                                <select style={{ width: '95%', height: '100%', borderRadius: 6}}>
                                    <option value="" selected>
                                        <em>Selecionar o cliente</em>
                                    </option>
                                    <option value={10}>Twenty</option>
                                    <option value={21}>Twenty one</option>
                                    <option value={22}>Twenty one and a half</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div style={{ flex: '1 1 0', height: 38, borderRadius: 6, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                        <div style={{ flex: '1 1 0', height: 38, background: 'white', borderRadius: 6, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <form style={{ width: '100%', height: '95%' }}>
                                <select style={{ margin: 1, width: '95%', height: '100%', borderRadius: 6}}>
                                    <option value="" selected>
                                        <em>Selecionar a etapa da proposta</em>
                                    </option>
                                    <option value={10}>Twenty</option>
                                    <option value={21}>Twenty one</option>
                                    <option value={22}>Twenty one and a half</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div style={{ flex: '1 1 0', height: 38, borderRadius: 6, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                        <div style={{ flex: '1 1 0', height: 38, background: 'white', borderRadius: 6, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <form style={{ width: '95%', height: '95%' }}>
                                <select style={{ width: '100%', height: '100%', borderRadius: 6 }}>
                                    <option value="" selected>
                                        <em>Selecionar o setor da empresa</em>
                                    </option>
                                    <option value={10}>Twenty</option>
                                    <option value={21}>Twenty one</option>
                                    <option value={22}>Twenty one and a half</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info-section">
                <div className="title-section">
                    <h2>Complete as informações necessárias</h2>
                    <span>Escreva a ordem do pedido</span>
                </div>
                <div className="button-section">
                    <button className="gray">Descartar</button>
                    <button className="blue">Salvar</button>
                    <button onClick={() => setShowList(true)} className="dark-blue">Publicar Pedido</button>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <PedidoInfoModal />
                <PrecoModal />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ArquivosModal />
                <OrganizeModal />
            </div>
            <div>
                <VariantesModal />
                <InventarioModal />
            </div>
        </div>
    );
};

export default AddInfo;