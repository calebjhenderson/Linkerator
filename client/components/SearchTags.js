import React, {useState} from 'react';
import{fetchBookmarks}from '../api/index.js'

const SearchTags = ({setResults}) => {
    const [text, setText] = useState('');

    const handleTextChange = event => {
        setText( event.target.value );
      }

    async function handleSubmit(event) {
        event.preventDefault();
        const tags = await fetchBookmarks({
            name,
            text
          });
          setResults(bookmarks);
        }

  return (
    <div id="search">
      <h3>Search tags here:</h3>
      <form onSubmit={ handleSubmit }>
      <input
          type="text" 
          placeholder="search tags"
          value={ name }
          onChange={ handleTextChange } />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchTags;