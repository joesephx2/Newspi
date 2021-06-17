import { useContext } from 'react'
import NewsContext from './NewsContext'
import React from 'react'
import LineChart from './LineChart'
import VerticalBar from './VerticalBar'

function Stats() {

    const { userNews } = useContext(NewsContext)

    function totalCompleted() {
        return userNews.filter(news => news.completed).length
    }
/*
    let dataAll = userNews.filter(news => news.completed);
    let data = {datasets: [data] = dataAll.map(news => news.completedTime)}

    */


    return (
        <div className="gridRight">
            <div className="roosterBg">
                <h1>Your Reading Stats</h1>
                <p>Articles Completed: {totalCompleted()} </p>
            </div>
            <div className="roosterBg">
                <VerticalBar/>
            </div>
        </div>
    )
}

export default Stats