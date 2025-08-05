import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function ApexBarChart() {
  const [state, setState] = useState({
     series: [
      {
        name: 'Sales',
        data: [120, 135, 150, 140, 160, 175, 180, 190, 210],
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 5,
          borderRadiusApplication: 'end',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: 'Sales ($k)',
        },
      },
      fill: {
        opacity: 1,
        colors: ['#5B79E7'], // Optional: Custom bar color
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + 'k';
          },
        },
      },
    },
  });

  return (
    <div className='text-left h-[360px] w-[800px] flex flex-col justify-around items-center flex-wrap  bg-[#171F2F]'>

    <div>
        <div className=' mb-3'>
            <h2 className='text-white text-2xl'>Monthly Sales</h2>
        </div>
        <div>
 <ReactApexChart options={state.options} series={state.series} type="bar" height={320} width={700} />
        </div>

    </div>
     
    </div>
  );
}
