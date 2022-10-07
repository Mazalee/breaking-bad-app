import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CharacterList from './components/CharacterList';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Spinner from './components/Spinner';
import './Styles.scss'

function App() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    
    axios
      .get(`https://breakingbadapi.com/api/characters?name=${query}`)
      .then(res => {
        setItems(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [query]);


  return (
    <div className='app'>
      <Header />
      <SearchBar setQuery={(query) => setQuery(query)} />
      {loading ? <Spinner /> : <CharacterList items={items} />}
    </div>
  );
}

export default App;
