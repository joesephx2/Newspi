import { useContext } from 'react';
import NewsContext from './NewsContext';
import React from 'react';

function Home() {

    const { newsData, userNews, setUserNews } = useContext(NewsContext)

    console.log('Home() newsData = useContext(NewsContext): ', newsData);
    function handleClick(e) {
        //e.preventDefault();
        console.log('Home() handleClick() e.target.localName', e.target.localName);

        //console.log('Home() handleClick() e.target: ', e.target);
        //console.log('Home() handleClick() e.target.children.checked: ', e.target.children[0].checked);

        // checking to see if we clicked on the LI
        // function removeNews(news) {
        //     userNews[]
        // }
        console.log('Home() handleClick() e.target.localName ', e.target.localName);
        console.log('Home() handleClick() e.target', e.target);
        console.log('Home() handleClick() e', e);
/*
        function removeNews(news) {
            delete userNews
        }

*/

        if (e.target.localName !== 'input') {
            if (e.target.children[0].checked)
                e.target.children[0].checked = false;
            else {
                e.target.children[0].checked = true;
                setUserNews([...userNews, e.target])
                console.log('userNews', userNews)
            }
        } else { // else we clicked on the input
            if (e.target.checked) {   // verifying it isn't set to null
                document.getElementById(e.target.id).toggleAttribute('checked')
                setUserNews([...userNews, e.target])
                console.log('userNews', userNews)
                console.log('userNews e.target type', userNews[0].type);
            } else {
                document.getElementById(e.target.id).setAttribute('checked', true)
            }
        }

        // if( e.target){ 
        //    console.log('Home() handleClick() e.target: ', e.target);
        //     console.log('inside e.target.nodeNAME if block', document.getElementById(e.target.lastChild))
        //     //document.getElementById(e.target.lastChild).toggleAttribute('checked')
        // } else {
        //     e.target.value = !e.target.value
        // }
    }

    if (newsData.value) {
        return (
            <div className="gridRight newsTitles">

                <ul>
                    {newsData.value.map(news => {
                        return (
                            <li onClick={handleClick} id={'li-' + news.id} className="newsCard">
                                <h1 id={'h1-' + news.id}>{news.title}</h1>
                                <p id={'p-' + news.id}>{news.description}</p>
                                <img src={news.image.url} id={'img-' + news.id}></img>
                                <input type="checkbox" id={'input-' + news.id} className="article" />
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