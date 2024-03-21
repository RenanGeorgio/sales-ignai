import { useEffect, useRef } from "react";
import { Chart } from "chart.js";

interface GraphFormConversationProps {
  month: string;
}

const GraphFormConversation: React.FC<GraphFormConversationProps> = ({ month }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<'bar'> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['6', '5', '4', '3', '2', '1'],
            datasets: [
              {
                // axis: 'y',
                label: '',
                data: [35, 30, 20, 15, 15, 10],
                // fill: false,
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
          },
          options: {
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: { legend: { display: false } },
          },
        });
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [month]);

  return (
    <div className="graph-container-3">
      <h3>Conversão de formulário</h3>
      <div className="graph">
        <canvas ref={chartRef} />
      </div>
      {/* Your legend and other JSX here */}
    </div>
  );
}

export default GraphFormConversation;