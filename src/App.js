import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import NewsContext from './Components/NewsContext';
require('dotenv').config()


function App() {


  const [newsData, setState] = useState([])


  useEffect(async () => {

    await fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=1&pageSize=40&withThumbnails=false&location=us", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
      }
    })
      .then(async (response) => {
        let tmp = await response.json();
        console.log(tmp)
        return tmp;
      })
      .then(resjson => {
        console.log('resjon', resjson)
        return resjson;
      })
      .then(setState)
      .catch(err => {
        console.error(err);
      });//fetch    

    
  }, []);//useEffect

console.log('App() newsData: ', newsData);


return (
  <div className="App">
    <NewsContext.Provider value={newsData} >
      <Navigation />
    </NewsContext.Provider>
  </div>
);
};


export default App;