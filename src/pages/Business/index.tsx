import React from 'react';
import SearchBusiness from '../../components/Table/searchBusiness';
import Navbar from '../../components/Navbar';

const Business: React.FC = () => {

  return (
    <>
      <div style={{marginLeft: '10px'}}>
        <Navbar />
        <SearchBusiness />
      </div>
    </>
  );
};

export default Business;
