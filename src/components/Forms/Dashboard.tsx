import React, { useState } from 'react';
import Graph1 from '../Graph/Graph2.tsx';
import Graph2 from '../Graph/Graph1.tsx';
import '../../styles/dashboard.css';

const Dashboard: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('January');

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
  };

  return (
    <div className="dashboard-container">
      <select onChange={(e) => handleMonthSelect(e.target.value)} value={selectedMonth} className="select-month">
        <option value="January">Janeiro</option>
        <option value="January">Fevereiro</option>
        <option value="January">Março</option>
        <option value="January">Abril</option>
        <option value="January">Maiop</option>
        <option value="January">Junho</option>
        <option value="January">Julho</option>
        <option value="January">Agosto</option>
        <option value="January">Setembro</option>
        <option value="January">Outubro</option>
        <option value="January">Novembro</option>
        <option value="January">Dezembro</option>
      </select>

      <div className="graph-row">
        <Graph2 month={selectedMonth} />
        <Graph1 month={selectedMonth} />
      </div>
    </div>
  );
};

export default Dashboard;
