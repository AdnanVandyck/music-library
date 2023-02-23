import {useContext} from 'react'
import { SearchContext } from '../context/SearchContext'

function SearchBar() {
    // let [searchTerm, setSearchTerm] = useState('')
    const {term, handleSearch} = useContext(SearchContext)
  return (
    <form>
        <input ref={term} type="text" placeholder="search here"/>
         <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
      </form>
  )
}

export default SearchBar

