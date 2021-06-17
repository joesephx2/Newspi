import NewsContext from './NewsContext';
import { useContext } from 'react'
import Check from '../check.svg'
import Close from '../close.svg'


function CompletedList() {

    const { userNews } = useContext(NewsContext)

    function handleClick(e) {

        let clickedID = e.target.getAttribute('id').split('-')[1];
        let clickedElement = e.target.getAttribute('id').split('-')[0];

        console.log('ReadingList() handleClick() check mark handle - userNews', userNews);
        console.log('grabbing userNews index', userNews.indexOf(clickedID))

        let url = userNews.filter(news => news.id === clickedID)[0].url;
        window.open(url, '_blank');
    };//handleClick()


    console.log('Completed() userNews', userNews);

    if (userNews.filter(news => news.completed).length > 0) {
        return (
            <div className="gridRight">
                <ul>
                    {userNews.filter(news => news.completed)
                        .map(news => {
                            return (
                                <li onClick={handleClick} id={'li-' + news.id} className="condensedCard">
                                    <p id={'h1-' + news.id}>{news.title}</p>
                                
                                </li>
                            )
                        })}
                </ul>
            </div>
        )
    }//if
    else {
        return <h1 className="gridRight">Nothing has been completed 😞!</h1>
    }//else

}

export default CompletedList