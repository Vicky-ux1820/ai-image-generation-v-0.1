import React from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const StatsGrid = () => {
    const stats = [
        { title: 'Total Orders', value: '21 -', change: '+12%' },
        { title: 'Order items over time', value: '15 -', change: '-5%' },
        { title: 'Return Orders', value: '0 -', change: '+15%' },
        { title: 'Fulfilled orders over time', value: '12 -', change: '+23%'},
      ];

  const getChartData = (change) => {
    // Simulate a trend: up for positive, down for negative
    const base = 20;
    const percent = parseFloat(change);
    if (isNaN(percent)) return [base, base, base, base, base, base];
    if (percent >= 0) {
      // Upward trend
      return [base, base + 2, base + 4, base + 6, base + 8, base + 10];
    } else {
      // Downward trend
      return [base + 10, base + 8, base + 6, base + 4, base + 2, base];
    }
  };

  return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const isNegative = stat.change.trim().startsWith('-');
              const chartData = getChartData(stat.change);
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-4  border border-gray-200">
                  <div className="flex items-center justify-between ">
                    <div className='space-y-3'>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-1 tracking-wider">{stat.value}</p>
                      <p className={`text-sm mt-1 ${isNegative ? 'text-red-600' : 'text-green-600'}`}>{stat.change} <span className='text-gray-600'>Last week</span> </p>
                    </div>
                    <div className="text-3xl flex items-center">
                      <div style={{ width: 80, height: 32 }}>
                        <Line
                          data={{
                            labels: [ '', '', '', '', '', '' ],
                            datasets: [
                              {
                                data: chartData,
                                borderColor: isNegative ? '#f87171' : '#4fd1c5',
                                borderWidth: 2,
                                fill: false,
                                pointRadius: 0,
                                tension: 0.4,
                              },
                            ],
                          }}
                          options={{
                            plugins: { legend: { display: false } },
                            scales: { x: { display: false }, y: { display: false } },
                            elements: { line: { borderJoinStyle: 'round' } },
                            responsive: true,
                            maintainAspectRatio: false,
                          }}
                          height={32}
                          width={80}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
  )
}

export default StatsGrid
