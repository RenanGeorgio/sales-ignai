import React from 'react';

const DetailsPage = ({ match }) => {
  // Usar o ID da URL para obter os detalhes do cliente
  const clientId = match.params.id;
  // Aqui, você deve buscar os detalhes do cliente com base no ID

  // Exemplo de renderização dos detalhes do cliente
  return (
    <div>
      <h2>Detalhes do Cliente {clientId}</h2>
      {/* Renderizar os detalhes do cliente aqui */}
    </div>
  );
};

export default DetailsPage;
