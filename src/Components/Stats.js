import { useContext } from 'react'
import NewsContext from './NewsContext'
import React from 'react'
import LineChart from './LineChart'

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
            <h1>Your Reading Stats</h1>
            <p>Articles Completed: {totalCompleted()} </p>
            <div className="statsChart">
                <LineChart/>
            </div>
        </div>
    )
}

export default Stats