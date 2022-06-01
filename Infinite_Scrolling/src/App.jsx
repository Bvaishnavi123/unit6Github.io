import { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
  const [isFetching,setIsFetching] = useState(false)
  // const [changeData,setchangeData] = useState([])

  // const getData = ()=>{
  //    axios.get(`https://api.instantwebtools.net/v1/passenger?page=0&size=10`).then(({data})=>{
  //      setchangeData(data)
  //    })
  // }
   

   useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    console.log('Fetch more list items!');
    setIsFetching(true);
  }
  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
      setIsFetching(false);
    }, 2000);
  }
  return (
    <div className="App">
       <ul >
      {listItems.map(listItem => <li className="list-group-item">List Item {listItem}</li>)}
    </ul>
    {isFetching && 'Fetching more list items...'}
    </div>
  );
}

export default App;
