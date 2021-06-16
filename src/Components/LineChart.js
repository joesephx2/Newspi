import React from 'react';
import { Line } from 'react-chartjs-2';
import { useContext } from 'react'
import NewsContext from './NewsContext';




const LineChart = () => {
  const { userNews } = useContext(NewsContext)

  function totalCompleted() {
    return userNews.filter(news => news.completed).length
  }

  let data = {
    labels: ['Number of Articles Completed'],
    datasets: [
      {
        label: '# of Completed Articles',
        data: [totalCompleted()],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };


  return (
    <>
      <div className='header'>
        <h2 className='title'>Articles Completed</h2>
      </div>
      <Line data={data} options={options} />
    </>
  )
};

export default LineChart;