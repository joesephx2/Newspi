import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import NewsContext from './Components/NewsContext';
require('dotenv').config()


function App() {


  const [newsData, setState] = useState([])
  const [userNews, setUserNews] = useState([])

<<<<<<< HEAD
  useEffect(() => {

    fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=1&pageSize=20&withThumbnails=false&location=us", {
=======
  useEffect(async () => {

    await fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=1&pageSize=40&withThumbnails=false&location=us", {
>>>>>>> 17918e649a0d9ba56c0630f49b0a240d8fb4172e
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
      }
    })
<<<<<<< HEAD
      .then((response) => {
        let tmp = response.json();
        console.log('Received data from fetch:', tmp)
=======
      .then(async (response) => {
        let tmp = await response.json();
        console.log('Received data from fetch:',tmp)
>>>>>>> 17918e649a0d9ba56c0630f49b0a240d8fb4172e
        return tmp;
      })
      .then(resjson => {
        return resjson;
      })
      .then(setState)
      .catch(err => {
        console.error(err);
<<<<<<< HEAD
      });//fetch

      //loading up userNews through
      let localUserData = localStorage.getItem('userNews');
      if(localUserData) {
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
=======
      });//fetch    

    
  }, []);//useEffect

return (
  <div className="App">
    <NewsContext.Provider value={{newsData, userNews, setUserNews}} >
      <Navigation />
    </NewsContext.Provider>
  </div>
);
>>>>>>> 17918e649a0d9ba56c0630f49b0a240d8fb4172e
};

export default App;