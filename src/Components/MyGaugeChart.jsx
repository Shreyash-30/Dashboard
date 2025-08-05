import React from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';

const ApexGaugeChart = () => {
  const [state, setState] = React.useState({
    series: [85], // 85% achieved
    options: {
      chart: {
        type: 'radialBar',
        height: 350,
        sparkline: {
          enabled: true, // removes outer border/padding
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
          },
          track: {
            background: '#E5E7EB',
            strokeWidth: '100%',
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '16px',
            },
            value: {
              formatter: function (val) {
                return `${parseInt(val)}%`;
              },
              color: '#111',
              fontSize: '24px',
              show: true,
            },
          },
        },
      },
      fill: {
        colors: ['#0088FE'], // blue
      },
      labels: ['Achieved'],
    },
  });

  return (
    <div >
      {/* <div className="text-left w-full mb-6">
        <h2 className="text-2xl font-semibold">Monthly Target</h2>
        <p className="text-[#75A2A6]">Target you’ve set for each month</p>
      </div> */}

      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={250}
        width={750}
      />
    </div>
  );
};

export default ApexGaugeChart;

// Mounting manually (only for vanilla setup, not needed in modern React apps):
// const domContainer = document.querySelector('#app');
// ReactDOM.render(<ApexGaugeChart />, domContainer);
