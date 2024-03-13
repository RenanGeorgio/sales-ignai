import React from "react";
import Navbar from "../../components/Navbar";
import { useLocation } from "react-router-dom";
import ContactDetails from "components/Contact/ContactDetails/ContactDetails";

const ContactDetailsPage = () => {
  const { state } = useLocation();

  return (
    <div className="page-content">
      <Navbar />
      <ContactDetails client={state} />
    </div>
  );
};

export default ContactDetailsPage;
