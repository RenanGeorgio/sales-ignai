import React, { useEffect, useState } from "react";
import {
  CurrencyDollar,
  DotsVertical,
  PaperClip,
  ShoppingCart,
} from "../../Image/icons";
import { Alert, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ImageLogo from "../../Image/Queiroz_Galvão_Logo 1.png";
import PaymentAddress from "./PaymentAdress";
import Notification from "./Notifications/Notification";
import "./PaymentAdress/payment.css";
import { priorityStatus, getPriorityStyles } from "helpers/status";
import ModalComponent from "components/Modal/Modal";
import { IContactInfo } from "types/interfaces";
import {
  baseUrl,
  deleteRequest,
  postRequest,
  putRequest,
} from "services/api/apiService";
import ModalForm from "components/Forms/Modal/ModalForm";
import ContactFormFields from "../FormFields/Contact";
import { useDispatch } from "react-redux";
import { clientsActions } from "store/store";
import Revenue from "./Revenue";

// const ImageLogo = '../../Image/Queiroz_Galvão_Logo 1.png'

const ContactDetails = ({ client }) => {
  const [activePage, setActivePage] = useState("Geral");
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as IContactInfo);
  const [priorityStyles, setPriorityStyles] = useState({
    color: "",
    backgroundColor: "",
  });
  const [modalMode, setModalMode] = useState({
    mode: null,
    title: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = (pageName: string) => {
    setActivePage(pageName);
  };

  useEffect(() => {
    setPriorityStyles(getPriorityStyles(client.priority));
  }, [client]);

  const handleAdd = async (contact: IContactInfo) => {
    setIsLoading(true);
    const response = await postRequest(
      `${baseUrl}/client/${client._id}/contact`,
      contact
    );
    if (response.error) {
      requestError(response.message);
    } else {
      updateClientContacts(response);
      setOpenModal(false);
    }
    setIsLoading(false);
  };

  const handleUpdate = async (contact: IContactInfo) => {
    const response = await putRequest(
      `${baseUrl}/client/${client._id}/contact/${contact._id}`,
      contact
    );
    if (response.error) {
      requestError(response.message);
    } else {
      updateClientContacts(response);
      setOpenModal(false);
    }
    setIsLoading(false);
  };

  const updateClientContacts = (contacts: IContactInfo) => {
    dispatch(
      clientsActions.updateContactList({
        id: client._id,
        contacts,
      })
    );
  };

  const deleteClient = async () => {
    // todo: Adicionar pop-up de confirmação
    const response = await deleteRequest(`${baseUrl}/client/${client._id}`);
    if (response.error) {
      requestError(response.message);
    } else {
      dispatch(clientsActions.removeClient(client._id));
      navigate(-1);
    }
  };

  const requestError = (error: string) => {
    setError(true);
    setErrorMessage(error);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };

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
      }}
    >
      <div>
        <Button size="small" onClick={() => navigate(-1)}>
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
              color: "black",
              fontSize: 22,
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
              color: "black",
              fontSize: 15,
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
            width: 360,
            height: "100%",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 1,
            display: "inline-flex",
            boxShadow: "0px 4px 18px rgba(75, 70, 92, 0.10)",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              height: 615,
              background: "white",
              boxShadow: "0px 4px 18px rgba(75, 70, 92, 0.10)",
              borderRadius: 6,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: 560,
                padding: 4,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 1,
                display: "flex",
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
                    gap: 10,
                    border: "1px green",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      color: "black",
                      fontSize: 13,
                      fontFamily: "sans-serif",
                      fontWeight: "400",
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
                  }}
                >
                  <div
                    style={{
                      width: 284,
                      textAlign: "center",
                      color: "black",
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
                      color: "black",
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
                      gap: 10,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "space-around",
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
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <ShoppingCart />
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
                            color: "black",
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
                            color: "black",
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
                        <CurrencyDollar />
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
                            color: "black",
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
                            color: "black",
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
                    color: "black",
                    fontSize: 13,
                    fontFamily: "sans-serif",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  CONTATO
                </div>
                <Button
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

              {client?.contacts?.map((item, index) => (
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 190,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 20,
                    display: "flex",
                  }}
                >
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
                    <div style={{ width: 284, lineHeight: 1.3 }}>
                      <span
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontFamily: "sans-serif",
                          fontWeight: "600",
                          lineHeight: 0,
                          wordWrap: "break-word",
                        }}
                      >
                        Contato:
                      </span>
                      <span
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontFamily: "sans-serif",
                          lineHeight: 1,
                          wordWrap: "break-word",
                        }}
                      >
                        {" "}
                        {item?.contactName}
                      </span>
                    </div>

                    <div style={{ width: 284, lineHeight: 1.3 }}>
                      <span
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontFamily: "sans-serif",
                          fontWeight: "600",
                          lineHeight: 0,
                          wordWrap: "break-word",
                        }}
                      >
                        Email:{" "}
                      </span>
                      <span
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontFamily: "sans-serif",
                          lineHeight: 1,
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
                          color: "black",
                          fontSize: 15,
                          fontFamily: "sans-serif",
                          fontWeight: "600",
                          lineHeight: 0,
                          wordWrap: "break-word",
                        }}
                      >
                        Status:
                      </div>
                      <div
                        style={{
                          padding: " 10px 20px",
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
                            lineHeight: 0,
                            wordWrap: "break-word",
                          }}
                        >
                          {item?.status ? "Ativo" : "Inativo"}
                        </div>
                      </div>
                    </div>

                    <div style={{ width: 284, lineHeight: 1.3 }}>
                      <span
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontFamily: "sans-serif",
                          fontWeight: "600",
                          lineHeight: 0,
                          wordWrap: "break-word",
                        }}
                      >
                        Contato:
                      </span>
                      <span
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontFamily: "sans-serif",
                          lineHeight: 0,
                          wordWrap: "break-word",
                        }}
                      >
                        {" "}
                        {item?.tel}
                      </span>
                    </div>

                    <div style={{ width: 284, lineHeight: 1.5 }}>
                      <span
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontFamily: "sans-serif",
                          fontWeight: "600",
                          lineHeight: 0,
                          wordWrap: "break-word",
                        }}
                      >
                        Estado:{" "}
                      </span>
                      <span
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontFamily: "sans-serif",
                          lineHeight: 1,
                          wordWrap: "break-word",
                        }}
                      >
                        {item?.state}
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      justifyContent: "flex-start",
                      display: "inline-flex",
                    }}
                  >
                    <Button
                      size="small"
                      style={{
                        color: "white",
                        fontFamily: "sans-serif",
                        background: "#BABABD",
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* wrap tabela lado direito  */}
        <div
          style={{
            flex: "1 1 0",
            height: "100%",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 6,
            display: "inline-flex",
          }}
        >
          {/* 
                secção Geral endereço pagamento  */}
          <div
            //  style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', height: 50, gap:15}}
            className="buttonContainer"
          >
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
                <PaymentAddress
                  address={client?.adresses}
                  clientId={client._id}
                />
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
        <Alert variant="filled" severity="error" onClose={() => {}}>
          {errorMessage}
        </Alert>
      )}
    </div>
  );
};

export default ContactDetails;
