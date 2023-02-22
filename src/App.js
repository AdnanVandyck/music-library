import {useState, useEffect} from 'react'
import Gallery from './Components/Gallery';
import SearchBar from './Components/SearchBar';
import './App.css'

function App () {
  let [message, setMessage] = useState('Search for music')
  let [search, setSearch] =useState('')
  let [data, setData] =useState([])

const API_URI = 'https://itunes.apple.com/search?term='
useEffect(()=>{
  if(search){
  const fetchData = async () => {
    document.title = `${search} music`
    const response = await fetch(API_URI + search)
    const resData = await response.json()
    if(resData.results.length > 0){
      setData(resData.results)
    }else{
      setMessage('Not Found')
    }
  }
  fetchData()
}
}, [search])  

const handleSearch = (e, term) => {
  e.preventDefault();
  setSearch(term)
}


  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch}/>
      {message}
      <Gallery data={data}/>
    </div>
  );
}

export default App;