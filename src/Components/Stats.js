import { useContext } from 'react'
import NewsContext from './NewsContext'

function Stats() {

    const { userNews } = useContext(NewsContext)

    function totalCompleted() {
        return userNews.filter(news => news.completed).length
    }
    console.log('completed articles:',userNews.filter(news => news.completed).length )
    return (
        <div className="gridRight">
            <h1>Your Reading Stats</h1>
            <p>Articles Completed: {totalCompleted()} </p>
        </div>
    )
}

export default Stats