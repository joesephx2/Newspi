import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useContext } from 'react'
import NewsContext from './NewsContext';


const VerticalBar = () => {
    const { userNews } = useContext(NewsContext)
    let vertBar = <p>No data to render, please read.</p>

    let completedNews = userNews.filter(news => news.completed) 

    //check if user has read anything
    if ( completedNews.length > 1){
    
        let count = completedNews.length - 1
        let startTime = completedNews[0].completedTime
        let lastTime = completedNews[count].completedTime
        let duration = lastTime - startTime
        let step = duration / 6
    
        console.log('startTime:',startTime)
        console.log('endTime:',lastTime)
        console.log('duration:', duration)
        console.log('step:', step)

        let second = startTime + step
        let third = second + step
        let fourth = third + step
        let fifth = fourth + step
        let sixth = fifth + step

        console.log('first:', new Date(startTime))
        console.log('second:', second)
        console.log('third:', third)
        console.log('fourth:', fourth)
        console.log('fifth:', fifth)
        console.log('sixth',sixth)

        let count1 = 0
        let count2 = 0
        let count3 = 0
        let count4 = 0
        let count5 = 0
        let count6 = 0

        completedNews.forEach( news => {
            if( news.completedTime > sixth ) count6++
            else if( news.completedTime > fifth ) count5++
            else if( news.completedTime > fourth ) count4++
            else if( news.completedTime > third ) count3++
            else if( news.completedTime > second ) count2++
            else {
                count1++
            }

        })

    
        const data = {
            labels: [`${new Date(startTime).toLocaleString()} - ${new Date(second-1000).toLocaleString()}`,
                     `${new Date(second).toLocaleString()} - ${new Date(third-1000).toLocaleString()}`,
                     `${new Date(third).toLocaleString()} - ${new Date(fourth-1000).toLocaleString()}`,
                     `${new Date(fourth).toLocaleString()} - ${new Date(fifth-1000).toLocaleString()}`, 
                     `${new Date(fifth).toLocaleString()} - ${new Date(sixth-1000).toLocaleString()}`,
                     `${new Date(sixth).toLocaleString()} - ${new Date(lastTime).toLocaleString()}`],
            datasets: [
            {
                label: '# of articles read',
                data: [ `${count1}`, `${count2}`, `${count3}`, `${count4}`, `${count5}`, `${count6}`],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
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

        vertBar = (
            <Bar data={data} options={options} />
        )
        
    }
    
    
    return (
        <>
            <div className='header'>
                <h1 className='title'>Completed Reading over time</h1>
            </div>
            {vertBar}
        </>
    )
  };

export default VerticalBar;