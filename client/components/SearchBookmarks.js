import React,{useState} from 'react';
import{fetchBookmarks}from '../api/index.js'

const SearchBookmarks = ({setResults}) => {
  const [name, setName] = useState('');
  
  const handleNameChange = event => {
    setName( event.target.value );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const bookmarks = await fetchBookmarks({
      name,
      text
    });

    setResults(bookmarks);
  }
  
  return (
    <div id="search">
      <h3>Search bookmarks here:</h3>
      <form onSubmit={ handleSubmit }>
      <input
          type="text" 
          placeholder="search bookmarks"
          value={ name }
          onChange={ handleNameChange } />
       
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBookmarks;