import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useLocation } from "react-router-dom";
import ContactDetails from "components/Contact/ContactDetails/ContactDetails";
import { IClient } from "types/interfaces";
import { useSelector } from "react-redux";

const ContactDetailsPage = () => {
  const { state } = useLocation();
  const clientsState = useSelector((state: any) => state.clients);
  const [client, setClient] = useState<null | IClient>(null);

  useEffect(() => {
    const clientFind = clientsState?.find((client) => client._id === state.id);
    setClient(clientFind);
  }, [clientsState, state.id]);

  return (
    <div className="page-content">
      <Navbar />
      {client && <ContactDetails client={client} />}
    </div>
  );
};

export default ContactDetailsPage;
