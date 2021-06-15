import { useContext } from 'react';
import NewsContext from './NewsContext';
import React from 'react';

function Home() {

    const newsData = useContext(NewsContext);
    console.log('Home() newsData = useContext(NewsContext): ', newsData);
    function handleClick(e) {
        //e.preventDefault();
        console.log('Home() handleClick() e.target.localName', e.target.localName);

        //console.log('Home() handleClick() e.target: ', e.target);
        //console.log('Home() handleClick() e.target.children.checked: ', e.target.children[0].checked);

        // checking to see if we clicked on the LI
        if( e.target.localName !== 'input'){
            if(e.target.children[0].checked) 
                e.target.children[0].checked = false;
            else e.target.children[0].checked = true;
        } else { // else we clicked on the input
            if(e.target.checked){   // verifying it isn't set to null
                document.getElementById(e.target.id).toggleAttribute('checked')
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
    
        if(newsData.value){
            return(
                <div className="gridRight newsTitles">
                    
                    <ul>
                        {newsData.value.map(news => {
                            return (
                                <li onClick={handleClick} id={'li-'+news.id} >
                                    {news.title}
                                    <input type="checkbox" id={'input-' + news.id} name="article"/>
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