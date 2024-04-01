import { Bar } from "react-chartjs-2";
import "@styles/statistics.scss";

interface GraphProps {}

const GraphSource: React.FC<GraphProps> = () => {
  const labels = ['6', '5', '4', '3', '2', '1'];
  const data = {
    labels: labels,
    datasets: [
      {
        axis: 'y',
        label: '',
        data: [35, 30, 20, 15, 15, 10],
        fill: false,
        backgroundColor: [
          'rgba(115, 103, 240, 1)',
          'rgba(0, 207, 232, 1)',
          'rgba(40, 199, 111, 1)',
          'rgba(168, 170, 174, 1)',
          'rgba(234, 84, 85, 1)',
          'rgba(255, 159, 67, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const legendItems = [
    ['Formulário', 'WhatsApp'],
    ['E-mail', 'Facebook'],
    ['TikTok', 'Instagram'],
  ];

  return (
    <div className="graph-container-source">
      <h3>Fontes de Lead</h3>
      <div className="graph-source">
        <Bar data={data} options={{ maintainAspectRatio: false, indexAxis: 'y', plugins: { legend: { display: false } } }} />
      </div>
      <div className="legend-source">
        {legendItems.map((group, groupIndex) => (
          <div key={groupIndex} className="legend-item-group">
            {group.map((label, index) => (
              <div key={index} className="legend-item">
                <div className="color-dot" style={{ backgroundColor: data.datasets[0].backgroundColor[index + groupIndex * 2] }}></div>
                <span className="legend-label">{label}</span>
                <div className="number-container">
                  <span className="number">{groupIndex === 0 ? '40%' : '30%'}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GraphSource;