import React from 'react';

interface AddInfoProps {
    setShowList: () => void; 
}

const AddInfo: React.FC<AddInfoProps> = ({ setShowList }) => {
    return (
        <>
            <button onClick={() => setShowList(true)} style={{marginLeft:'100px'}}>Publicar Pedido</button>
        </>
    );
};

export default AddInfo;