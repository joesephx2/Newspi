import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import NewsContext from './Components/NewsContext';
require('dotenv').config()


function App() {


  const [newsData, setState] = useState([])
  const [userNews, setUserNews] = useState([])

  useEffect(() => {

    fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=1&pageSize=40&withThumbnails=false&location=us", {


      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
      }
    })
      .then((response) => {
        let tmp = response.json();
        console.log('Received data from fetch:', tmp)

        return tmp;
      })
      .then(resjson => {
        return resjson;
      })
      .then(setState)
      .catch(err => {
        console.error(err);

      });//fetch

    //loading up userNews through
    let localUserData = localStorage.getItem('userNews');
    if (localUserData) {
      localUserData = JSON.parse(localUserData);
      setUserNews(localUserData);
      console.log('App() userEffect() loading userNews from localStorage');
    } else {
      console.log('App useEffect() userNews not found in localStorage');
    }




  }, []);//useEffect initial API call



  useEffect(() => {

    localStorage.setItem('userNews', JSON.stringify(userNews));

    console.log('App() localStorage useEffect() - saving updated userNews');

  }, [userNews]);//useEffect local storage for persistent data state




  return (
    <div className="App">
      <NewsContext.Provider value={{ newsData, userNews, setUserNews }} >
        <Navigation />
      </NewsContext.Provider>
    </div>
  );


};

export default App;
