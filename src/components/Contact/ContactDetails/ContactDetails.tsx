import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Alert, Button, IconButton } from "@mui/material";
import { CurrencyDollarIcon, ShoppingCartIcon, TrashIcon } from "@icons";
import ImageLogo from "@assets/images/Queiroz_Galvão_Logo 1.png";
import PaymentAddress from "./PaymentAdress";
import Notification from "./Notifications";
import { priorityStatus, getPriorityStyles } from "@helpers/status";
import ModalComponent from "@components/Modal/Modal";
import { baseUrl, deleteRequest, postRequest, putRequest } from "@services/api/apiService";
import ModalForm from "@components/Forms/Modal/ModalForm";
import ContactFormFields from "../FormFields/Contact";
import { clientsActions } from "@store/store";
import Revenue from "./Revenue";
import { IContactInfo, IClient } from "@interfaces";
import { Obj } from "@types";
import "./PaymentAdress/PaymentAdress.module.css";

interface Props {
  client: IClient;
  children?: React.ReactNode;
};

const ContactDetails = ({ client }: Props) => {
  const [activePage, setActivePage] = useState<string>("Geral");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<IContactInfo>({} as IContactInfo);
  const [priorityStyles, setPriorityStyles] = useState<Obj>({ color: "", backgroundColor: "" });
  const [modalMode, setModalMode] = useState<Obj>({ mode: null, title: null });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = (pageName: string) => {
    setActivePage(pageName);
  };

  const handleAdd = async (contact: IContactInfo) => {
    setIsLoading(true);
    
    const response = await postRequest(`${baseUrl}/client/${client._id}/contact`, contact);

    if (response.error) {
      requestError(response.message);
    } else {
      updateClientContacts(response);
      setOpenModal(false);
    }

    setIsLoading(false);
  };

  const handleUpdate = async (contact: IContactInfo) => {
    const response = await putRequest(`${baseUrl}/client/${client._id}/contact/${contact._id}`, contact);

    if (response.error) {
      requestError(response.message);
    } else {
      updateClientContacts(response);
      setOpenModal(false);
    }

    setIsLoading(false);
  };

  const updateClientContacts = (contacts: IContactInfo) => {
    dispatch(clientsActions?.updateContactList({
      id: client._id,
      contacts,
    })
  )};

  const deleteClient = () => { // todo: Adicionar pop-up de confirmação
    (async () => {
      const response = await deleteRequest(`${baseUrl}/client/${client._id}`);

      if (response.error) {
        requestError(response.message);
      } else {
        dispatch(clientsActions.removeClient(client._id));
        navigate(-1);
      }
    })();
  };

  const requestError = (error: string) => {
    setError(true);
    setErrorMessage(error);

    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  useEffect(() => {
    setPriorityStyles(getPriorityStyles(client?.priority));
  }, [client]);

  return (
    <div
      style={{
        width: "94%",
        height: "80%",
        flexDirection: "column",
        paddingLeft: "6%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 1,
        display: "inline-flex",
        overflow: "auto",
      }}
    >
      <div style={{color: '#4b465cca',}}>
        <Button style={{color: '#4b465cca',}} size="small" onClick={() => navigate(-1)}>
          Voltar
        </Button>
      </div>
      <div
        style={{
          width: "98%",
          height: 30,
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          padding: 15,
        }}
      >
        <div
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 0,
            display: "flex",
            lineHeight: 0,
          }}
        >
          <p
            style={{
              color: '#4b465cca',
              fontSize: 18,
              fontFamily: "sans-serif",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Cliente ID #634759
          </p>
          <span
            style={{
              alignSelf: "stretch",
              color: '#4b465cca',
              fontSize: 13,
              fontFamily: "sans-serif",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Ago 17, 2020, 5:48 (ET)
          </span>
        </div>
        <div style={{ display: "flex" }}>
          <Button
            variant="outlined"
            color="error"
            style={{ color: "#EA5451", background: "rgba(234, 84, 85, 0.16)" }}
            onClick={() => deleteClient()}
          >
            Deletar Cliente
          </Button>
        </div>
      </div>
      <div
        style={{
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 1,
          display: "inline-flex",
        }}
      >
        {/* Lado Esquerdo  */}
        <div
          style={{
            width: 300,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 1,
            display: "inline-flex",
            boxShadow: "0px 4px 18px rgba(75, 70, 92, 0.10)",
            marginRight:10,
            borderRadius: 6
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              height: 605,
              background: "white",
              borderRadius: 6,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
              paddingBottom:5
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: 600,
                padding: 4,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 1,
                display: "flex",
                borderRadius:6
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  height: 209,
                  paddingTop: 3,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 1,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 24,
                    justifyContent: "flex-end",
                    display: "flex",
                    gap: 5,
                    border: "1px green",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      color: '#4b465cca',
                      fontSize: 13,
                      fontFamily: "sans-serif",
                      fontWeight: "600",
                      wordWrap: "break-word",
                    }}
                  >
                    Prioridade:
                  </div>

                  {/* <div style={{ height: 24, paddingLeft: 10, paddingRight: 1, paddingTop: 5, paddingBottom: 5,  background: '#F95F5F', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}> */}
                  <div
                    style={{
                      padding: "5px 10px",
                      background: priorityStyles.backgroundColor,
                      borderRadius: 4,
                      color: priorityStyles.color,
                      fontSize: 13,
                      fontFamily: "sans-serif",
                      alignItems: "center",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    {/* @ts-ignore */}
                    {priorityStatus[client?.priority]}
                  </div>
                  {/* </div> */}
                </div>
                <img
                  style={{ width: 171, height: 49 }}
                  src={ImageLogo}
                  alt="logo"
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 114,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    display: "flex",
                    marginBottom:10,
                    paddingBottom:10,
                    borderBottom:'2px solid #DBDADE'
                  }}
                >
                  <div
                    style={{
                      width: 284,
                      textAlign: "center",
                      color: '#4b465cca',
                      fontSize: 22,
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                      lineHeight: 2,
                      wordWrap: "break-word",
                    }}
                  >
                    {client?.name}
                  </div>
                  <div
                    style={{
                      color: '#4b465cca',
                      fontSize: 13,
                      fontFamily: "sans-serif",
                      fontWeight: "400",
                      lineHeight: 0,
                      wordWrap: "break-word",
                    }}
                  >
                    Cliente ID {"#" + client?._id.slice(0, 10)}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      paddingTop: 24,
                      justifyContent: "space-around",
                      alignItems: "flex-start",
                      gap: 5,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: 5,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          padding: 5,
                          background: "rgba(115, 103, 240, 0.08)",
                          borderRadius: 6,
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <ShoppingCartIcon />
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: '#4b465cca',
                            fontSize: 15,
                            fontFamily: "sans-serif",
                            fontWeight: "600",
                            lineHeight: 1,
                            wordWrap: "break-word",
                          }}
                        >
                          25
                        </div>
                        <div
                          style={{
                            color: '#4b465cca',
                            fontSize: 13,
                            fontFamily: "sans-serif",
                            fontWeight: "400",
                            lineHeight: 1,
                            wordWrap: "break-word",
                          }}
                        >
                          Faturas
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 10,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          padding: 5,
                          background: "rgba(115, 103, 240, 0.08)",
                          borderRadius: 6,
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 1,
                          display: "flex",
                        }}
                      >
                        <CurrencyDollarIcon />
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: '#4b465cca',
                            fontSize: 15,
                            fontFamily: "sans-serif",
                            fontWeight: "600",
                            lineHeight: 1,
                            wordWrap: "break-word",
                          }}
                        >
                          R$12,378
                        </div>
                        <div
                          style={{
                            color: '#4b465cca',
                            fontSize: 13,
                            fontFamily: "sans-serif",
                            fontWeight: "400",
                            lineHeight: 1,
                            wordWrap: "break-word",
                          }}
                        >
                          Gasto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  borderRadius: 6,
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: "inline-flex",
                  margin: "3px 0px",
                }}
              >
                <div
                  style={{
                    color: '#4b465cca',
                    fontSize: 13,
                    fontFamily: "sans-serif",
                    fontWeight: "400",
                    wordWrap: "break-word",
                    borderTop:'1px solid #ececec'
                  }}
                >
                  CONTATO
                </div>
                <Button
                style={{textTransform:'capitalize'}}
                  variant="contained"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalMode({ mode: "add", title: "Adicionar contato" });
                    setOpenModal(true);
                  }}
                >
                  Adicionar
                </Button>
              </div>
              {/* <bloco 1 esquerdo  */}
              <div className="contactInfo-Container">
              {client?.contacts?.map((item: any, _index: number | string) => (
                <div className="infoContact">
                  <div
                    style={{
                      alignSelf: "stretch",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 1,
                      display: "flex",
                    }}
                  >
                    <div style={{ width: 284,  }}>
                      <span
                        style={{                       
                          fontFamily: "sans-serif",
                          fontWeight: "600",                      
                          wordWrap: "break-word",
                        }}
                      >
                        Contato:
                      </span>
                      <span
                        style={{                       
                          fontFamily: "sans-serif",                     
                          wordWrap: "break-word",
                        }}
                      >
                        {" "}
                        {item?.contactName}
                      </span>
                    </div>
                    <div style={{ width: 284,  }}>
                      <span
                        style={{                       
                          fontFamily: "sans-serif",
                          fontWeight: "600",                       
                          wordWrap: "break-word",
                        }}
                      >
                        Email:{" "}
                      </span>
                      <span
                        style={{                       
                          fontFamily: "sans-serif",                         
                          wordWrap: "break-word",
                        }}
                      >
                        {item?.email}
                      </span>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 1,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{                       
                          fontFamily: "sans-serif",
                          fontWeight: "600",                       
                          wordWrap: "break-word",
                        }}
                      >
                        Status:
                      </div>
                      <div
                        style={{
                          padding: " 1px 20px",
                          background: "rgba(40, 199, 111, 0.16)",
                          borderRadius: 4,
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#28C76F",
                            fontSize: 13,
                            fontFamily: "sans-serif",
                            fontWeight: "500",                 
                            wordWrap: "break-word",
                          }}
                        >
                          {item?.status ? "Ativo" : "Inativo"}
                        </div>
                      </div>
                    </div>
                    <div style={{ width: 284,  }}>
                      <span
                        style={{                         
                          fontFamily: "sans-serif",
                          fontWeight: "600",                       
                          wordWrap: "break-word",
                        }}
                      >
                        Telefone:
                      </span>
                      <span
                        style={{                         
                          fontFamily: "sans-serif",                
                          wordWrap: "break-word",
                        }}
                      >
                        {" "}
                        {item?.tel}
                      </span>
                    </div>
                    <div style={{ width: 284, }}>
                      <span
                        style={{                          
                          fontFamily: "sans-serif",
                          fontWeight: "600",
                          wordWrap: "break-word",
                        }}
                      >
                        Estado:{" "}
                      </span>
                      <span
                        style={{                                   
                          fontFamily: "sans-serif",
                          wordWrap: "break-word",
                        }}
                      >
                        {item?.state}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                      width: '100%',
                      alignItems:'center'
                    }}
                  >
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "sans-serif",
                        background: "#BABABD",
                        height:'30px'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(item);
                        setModalMode({ mode: "edit", title: "Editar contato" });
                        setOpenModal(true);
                      }}
                    >
                      Editar detalhes
                    </Button>
                    <IconButton>
                      <TrashIcon className={undefined}/>
                    </IconButton>
                  </div>
                </div>
              ))}
          </div>
            </div>
          </div>
        </div>
        {/* wrap tabela lado direito  */}
        <div
          style={{
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 6,
            display: "inline-flex",
            width:'100%'
          }}
        >
          <div className="buttonContainer">
            <div>
              <button
                className={activePage === "Geral" ? "blueButton" : "grayButton"}
                onClick={() => handleButtonClick("Geral")}
              >
                Geral
              </button>
            </div>
            <div>
              <button
                className={
                  activePage === "Payment" ? "blueButton" : "grayButton"
                }
                onClick={() => handleButtonClick("Payment")}
              >
                Endereço e Pagamento{" "}
              </button>
            </div>
            <div>
              <button
                className={
                  activePage === "Painel" ? "blueButton" : "grayButton"
                }
                onClick={() => handleButtonClick("Painel")}
              >
                Notificação
              </button>
            </div>
          </div>
          <div>
            {activePage === "Geral" && <Revenue />}
            {activePage === "Payment" && (
              <div>
                {/* @ts-ignore */}
                <PaymentAddress address={client?.adresses} clientId={client._id} />
              </div>
            )}
            {activePage === "Painel" && (
              <div>
                <Notification />
              </div>
            )}
          </div>
        </div>
      </div>
      <ModalComponent
        open={openModal}
        title={modalMode.title}
        onClose={() => setOpenModal(false)}
      >
        <ModalForm
          onSubmit={(contact) => {
            modalMode.mode === "add"
              ? handleAdd(contact)
              : handleUpdate(contact);
          }}
          isLoading={isLoading}
          initialValues={selectedItem}
          mode={modalMode.mode}
        >
          <ContactFormFields />
        </ModalForm>
      </ModalComponent>
      {error && (
        <Alert className="msg-error" variant="filled" severity="error" onClose={() => {}}>
          {errorMessage}
        </Alert>
      )}
    </div>
  );
}

export default ContactDetails;