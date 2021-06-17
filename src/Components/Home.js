import { useContext } from 'react';
import NewsContext from './NewsContext';
import React from 'react';
import Pin from '../pin-tack.svg'

function Home() {

    const { newsData, userNews, setUserNews } = useContext(NewsContext)


    // sets initial pin styling
    function setPin(id) {
        if (userNews.length === 0) return 'notPinned'
        else if (userNews.filter(news => news.id === id).length > 0)
            return 'Pinned'
        else
            return 'notPinned'
    }


    // console.log('Home() newsData = useContext(NewsContext): ', newsData);
    function handleClick(e) {
        //e.preventDefault();
        // console.log('Home() handleClick() e.target.localName', e.target.localName);

        //console.log('Home() handleClick() e.target: ', e.target);
        //console.log('Home() handleClick() e.target.children.checked: ', e.target.children[0].checked);

  
        // console.log('Home() handleClick() e.target.localName ', e.target.localName);
        // console.log('Home() handleClick() e.target', e.target);
        // console.log('Home() handleClick() e', e);
        // console.log('Home() handleClick() - e.target.getAttribute: ', e.target.getAttribute('id'));
        // console.log('Home() handleClick() newsData.value', newsData.value);

        let clickedID = e.target.getAttribute('id').split('-')[1]


        function removeNews(id = clickedID) {
            setUserNews(userNews.filter(news => news.id !== id));
            console.log('Home() removeNews()');
            togglePin(id)

        }


        function addNews(id = clickedID) {
            let addedTime = Date.now();
            setUserNews([...userNews, {...newsData.value.filter(news => news.id === id).[0], completed: false, addedTime: addedTime, completedTime: 0 }]);
            console.log('Home() addNews()');

            togglePin(id)
        }


        function includesID(id = clickedID) {
            if (userNews.length === 0) return false
            else if (userNews.filter(news => news.id === id).length > 0)
                return true
            else
                return false
        }


        // function displayNews(id) {
        //     let news = newsData.values.filter(news => news.id === id);

        // }

        // function addRemoveNews(id) {
        //     if(includesID(id)) {
        //         setUserNews([...userNews, (newsData.value.filter(news => news.id === id).[0]]);

        //     }
        //  
        // }


        // toggles pin styling
        function togglePin(id = clickedID) {
            if (document.getElementById('pin-' + id).getAttribute('class') === 'notPinned') {
                document.getElementById('pin-' + id).setAttribute('class', 'Pinned')
            }
            else {
                document.getElementById('pin-' + id).setAttribute('class', 'notPinned')
            }
        }



        if (includesID(clickedID)) {
            removeNews(clickedID)
        } else {
            addNews(clickedID)
        }

        console.log('Home() handleClick() userNews', userNews);

        // addNews(clickedID);
        // console.log( 'Home() handleClick() includesID() ID:', clickedID, '; included? ', includesID( clickedID ) );
        // console.log( 'userNews.filter(news => news.id !== id)', userNews.filter(news => news.id !== clickedID));
        // removeNews(clickedID);
        // console.log( 'after removewNews() Home() handleClick() includesID() ID:', clickedID, '; included? ', includesID( clickedID ) );

        // }


    }

    if (newsData.value) {
        return (
            <div className="gridRight">
                <ul className="newsTitles">
                    {newsData.value.map(news => {
                        return (
                            <li onClick={handleClick} id={'li-' + news.id} className="newsCard">
                                <img src={news.image.url} id={'img-' + news.id} alt="a pic relevant to the title"></img>
                                <p id={'p-' + news.id}>{news.title} <img id={"pin-" + news.id} src={Pin} className={setPin(news.id)} alt="a pin to save article" /> </p>
                                {/* <p id={'p-' + news.id}>{news.description}</p> */}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    else {
        return <h1 className="gridRight">Loading</h1>
    }


    return (
        <div className="gridRight">
            <p>home</p>
        </div>
    )
}

export default Home