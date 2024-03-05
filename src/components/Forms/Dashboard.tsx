import React, { useState } from 'react';
import GraphVisit from '../Graph/GraphVisit';
import GraphTimeUser from '../Graph/GraphTimeUser';
import '../../styles/dashboard.css';
import GraphClientVolume from '../Graph/GraphClientVolume';
import GraphFontClick from '../Graph/GraphFontClick';
import GraphFormConversation from '../Graph/GraphFormConversation';
import GraphNumberVisit from '../Graph/GraphNumberVisit';

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
        <GraphTimeUser month={selectedMonth} />
        <GraphVisit month={selectedMonth} />
      </div>

      <div className="graph-row">
        <GraphClientVolume month={selectedMonth} />
        <GraphFontClick month={selectedMonth}/>
      </div>

      <div className="graph-row">
        <GraphFormConversation month={selectedMonth} />
        <GraphNumberVisit month={selectedMonth}/>
      </div>
    </div>
  );
};

export default Dashboard;
