import NewsContext from './NewsContext';
import { useContext } from 'react'
import Check from '../check.svg'
import Close from '../close.svg'


function ReadingList() {

        const { userNews, setUserNews } = useContext(NewsContext)

        function handleClick(e) {

            let clickedID = e.target.getAttribute('id').split('-')[1];
            let clickedElement = e.target.getAttribute('id').split('-')[0];

            if( clickedElement === 'close'){
                removeNews()
            } else if ( clickedElement === 'check') {
                let tmp = userNews;
                tmp = tmp.map(news => {
                    if(news.id === clickedID) {
                        news.completed = true;
                        news.completedTime = Date.now()
                        console.log('THE TIME IS:', Date.now())
                    }
                    return news;
                })//tmp.map()
                setUserNews(tmp);         
                console.log('ReadingList() handleClick() check mark handle - tmp', tmp);
                console.log('ReadingList() handleClick() check mark handle - userNews', userNews);                
            } else {
                console.log('grabbing userNews index', userNews.indexOf( clickedID ))
                let url = userNews.filter( news =>  news.id === clickedID)[0].url;
                window.open( url, '_blank');
            }


            function removeNews(id = clickedID) {
                setUserNews(userNews.filter(news => news.id !== id));
             }

        }
        console.log('ReadingList() userNews', userNews);

        if (userNews.filter(news => !news.completed).length > 0) {
            return (
                <div className="gridRight newsTitles">
                    <ul>
                        {userNews.filter(news => !news.completed)                                                      
                        .map(news => {
                            return (
                                <li onClick={handleClick} id={'li-' + news.id} className="newsCard">
                                    <img src={news.image.url} id={'img-' + news.id} alt="a pic relevant to the title"></img>
                                    <h1 id={'h1-' + news.id}>{news.title} 
                                        <img id={"check-" + news.id} src={Check} className="checkMark" alt="a pic to mark as read" />
                                        <img id={"close-" + news.id} src={Close} className="close" alt="a pic to remove article from reading list" />
                                    </h1>
                                    <p id={'p-' + news.id}>{news.description}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
        else {
            return <h1 className="gridRight">No news to read, go pin some!</h1>
        }

}

export default ReadingList