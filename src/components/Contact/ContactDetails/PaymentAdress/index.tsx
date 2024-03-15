import { IconButton, Button, Badge, Checkbox, Alert } from "@mui/material";
import React, { useState } from "react";
import { DotsVertical, Pencil, Trash } from "../../../Image/icons";
import "./payment.css";
import { IAddress } from "types/interfaces";
import ModalComponent from "components/Modal/Modal";
import { baseUrl, postRequest } from "services/api/apiService";
import ModalForm from "components/Forms/Modal/ModalForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PaymentAddress({ address, clientId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMode, setModalMode] = useState({
    mode: "add",
    title: "Adicionar Cliente",
  });

  const [selectedItem, setSelectedItem] = useState<IAddress | null>(null);

  const handleAddAddress = async (address: IAddress) => {
    setIsLoading(true);
    const response = await postRequest(
      `${baseUrl}/client/${clientId}/address`,
      address
    );
    if (response.error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      setErrorMessage(response.message);
    } else {
      setOpenModal(false);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="index">
        <div style={{}} className="card-wrapper">
          <div className="row-container">
            <div className="card">
              <div className="card-heading">
                <div className="text-wrapper-19">Endereço</div>
                <Button variant="outlined" onClick={() => setOpenModal(true)}>
                  Novo endereço
                </Button>
                <ModalComponent
                  open={openModal}
                  title={modalMode.title}
                  onClose={() => setOpenModal(false)}
                >
                  <ModalForm
                    onSubmit={(address: IAddress) => {
                      handleAddAddress(address);
                    }}
                    isLoading={isLoading}
                    initialValues={selectedItem}
                    mode={modalMode.mode}
                  ><div></div></ModalForm>
                </ModalComponent>
              </div>
              <div className="card-body">
                <div className="accordion-without">
                  {address?.map((addr: IAddress, key) => (
                    <div className="accordion-collapse" key={key}>
                      <div className="text-6">
                        <div className="row-4">
                          <div className="text-wrapper-20">{addr.name}</div>
                          {addr.isMain ? (
                            <span className="badge-3">{addr.name}</span>
                          ) : (
                            ""
                          )}
                        </div>
                        <p className="text-wrapper-21">
                          {`${addr.street}, 
                            ${addr.number}, 
                            ${addr.district}, 
                            ${addr.city} - ${addr.state}
                          `}
                        </p>
                      </div>
                      <div className="actions">
                        <IconButton className="button-icon-instance">
                          <Pencil className="icon-instance-node" />
                        </IconButton>
                        <IconButton>
                          <Trash className="icon-instance-node" />
                        </IconButton>
                        <IconButton>
                          <DotsVertical className="icon-instance-node" />
                        </IconButton>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-heading">
                <div className="text-wrapper-19">Método de Pagamento</div>
                <Button variant="outlined">Adicionar</Button>
              </div>
              <div className="card-body">
                <div className="accordion-without">
                  <div className="accordion-collapse">
                    <div className="text-7">
                      <img
                        className="img-3"
                        alt="Mastercard"
                        src="https://cdn.animaapp.com/projects/654154912a46b119340afa31/releases/65bb83897b26ce5f64b90797/img/mastercard-.svg"
                      />
                      <div className="text-6">
                        <div className="text-wrapper-24">Mastercard</div>
                        <div className="text-wrapper-25">Expira Abr 2028</div>
                      </div>
                    </div>
                    <div className="actions">
                      <IconButton className="button-icon-instance">
                        <Pencil className="icon-instance-node" />
                      </IconButton>
                      <IconButton>
                        <Trash className="icon-instance-node" />
                      </IconButton>
                      <IconButton>
                        <DotsVertical className="icon-instance-node" />
                      </IconButton>
                    </div>
                  </div>
                  <img
                    className="divider"
                    alt="Divider"
                    src="https://cdn.animaapp.com/projects/654154912a46b119340afa31/releases/65bb83897b26ce5f64b90797/img/divider-1.svg"
                  />
                  <div className="accordion-expanded">
                    <div className="accordion-collapse">
                      <div className="text-7">
                        <img
                          className="img-3"
                          alt="American express"
                          src="https://cdn.animaapp.com/projects/654154912a46b119340afa31/releases/65bb83897b26ce5f64b90797/img/american-express.svg"
                        />
                        <div className="text-6">
                          <div className="row-5">
                            <div className="text-wrapper-20">
                              American Express
                            </div>
                            <span className="badge-3">Principal</span>
                          </div>
                          <div className="text-wrapper-25">
                            45 Roker Terrace
                          </div>
                        </div>
                      </div>
                      <div className="actions">
                        <IconButton className="button-icon-instance">
                          <Pencil className="icon-instance-node" />
                        </IconButton>
                        <IconButton>
                          <Trash className="icon-instance-node" />
                        </IconButton>
                        <IconButton>
                          <DotsVertical className="icon-instance-node" />
                        </IconButton>
                      </div>
                    </div>
                    <div className="row-6">
                      <div className="row-7">
                        <div className="row-8">
                          <div className="text-wrapper-26">Name</div>
                          <div className="text-wrapper-11">Violet Mendoza</div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-26">Number</div>
                          <div className="text-wrapper-11">**** 4487</div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-26">Expires</div>
                          <div className="text-wrapper-11">08/2028</div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-26">Type</div>
                          <div className="text-wrapper-11">Mastercard Card</div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-26">Issuer</div>
                          <div className="text-wrapper-11">VICBANK</div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-26">ID</div>
                          <div className="text-wrapper-11">DH73DJ8</div>
                        </div>
                      </div>
                      <div className="row-7">
                        <div className="row-8">
                          <div className="text-wrapper-27">Billing Phone</div>
                          <div className="text-wrapper-11">USA</div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-27">Number</div>
                          <div className="text-wrapper-11">+7634 983 637</div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-27">Email</div>
                          <a
                            className="text-wrapper-11"
                            href="mailto:vafgot@vultukir.org"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            vafgot@vultukir.org
                          </a>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-27">Origin</div>
                          <div className="row-9">
                            <div className="text-wrapper-11">United States</div>
                            <img
                              className="chevron-right"
                              alt="Usa"
                              src="https://cdn.animaapp.com/projects/654154912a46b119340afa31/releases/65bb83897b26ce5f64b90797/img/usa.svg"
                            />
                          </div>
                        </div>
                        <div className="row-8">
                          <div className="text-wrapper-27">CVC check</div>
                          <div className="row-9">
                            <div className="text-wrapper-11">Passed</div>
                            <div className="check-wrapper">
                              <Checkbox className="check-3" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="divider"
                    alt="Divider"
                    src="https://cdn.animaapp.com/projects/654154912a46b119340afa31/releases/65bb83897b26ce5f64b90797/img/divider-1.svg"
                  />
                  <div className="accordion-collapse">
                    <div className="text-7">
                      <img
                        className="img-3"
                        alt="Visa"
                        src="https://cdn.animaapp.com/projects/654154912a46b119340afa31/releases/65bb83897b26ce5f64b90797/img/visa.svg"
                      />
                      <div className="text-6">
                        <div className="text-wrapper-24">Visa</div>
                        <div className="text-wrapper-25">512 Water Plant</div>
                      </div>
                    </div>
                    <div className="actions">
                      <IconButton className="button-icon-instance">
                        <Pencil className="icon-instance-node" />
                      </IconButton>
                      <IconButton>
                        <Trash className="icon-instance-node" />
                      </IconButton>
                      <IconButton>
                        <DotsVertical className="icon-instance-node" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {error && (
        <Alert variant="filled" severity="error" onClose={() => {}}>
          {errorMessage}
        </Alert>
      )}
    </>
  );
}
