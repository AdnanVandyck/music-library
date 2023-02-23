import {useState, useRef} from 'react'
import Gallery from './Components/Gallery';
import SearchBar from './Components/SearchBar';
import {DataContext} from './context/DataContext'
import { SearchContext } from './context/SearchContext';
import './App.css'

function App () {
  let [message, setMessage] = useState('Search for music')

  let [data, setData] =useState([])
  let searchInput = useRef('')

const API_URI = 'https://itunes.apple.com/search?term='


const handleSearch = (e, term) => {
  e.preventDefault();
  const fetchData = async () => {
    document.title = `${term} music`
    const response = await fetch(API_URI + term)
    const resData = await response.json()
    if(resData.results.length > 0){
      setData(resData.results)
    }else{
      setMessage('Not Found')
    }
  }
  fetchData()
}


  return (
    <div className="App">
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
      <SearchBar/>
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
      <Gallery data={data}/>
      </DataContext.Provider>
    </div>
  );
}

export default App;