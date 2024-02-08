import React from 'react';
import SearchBusiness from '../../components/Table/searchBusiness';
import Navbar from '../../components/Navbar';

const Business: React.FC = () => {

  return (
    <>
      <div className="page-content">
        <Navbar />
        <SearchBusiness />
      </div>
    </>
  );
};

export default Business;
