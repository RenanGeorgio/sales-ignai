import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "@components/Navbar";
import ContactDetails from "@components/Contact/ContactDetails/ContactDetails";
import { IClient } from "@interfaces";

const ContactDetailsPage = () => {
  const { state } = useLocation();
  
  const clientsState = useSelector((state: any) => state.clients);

  const [client, setClient] = useState<null | IClient>(null);

  useEffect(() => {
    const clientFind = clientsState?.find((client: any) => client._id === state.id);

    setClient(clientFind);
  }, [clientsState, state.id]);

  return (
    <div className="page-content">
      <Navbar />
      {client && <ContactDetails client={client} />}
    </div>
  );
}

export default ContactDetailsPage;