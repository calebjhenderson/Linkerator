import React from 'react';
import{fetchBookmarks}from '../api/index.js'

const SearchTags = ({setResults}) => {
  async function handleSubmit(event) {
    event.preventDefault();
    const searchedTags = await fetchBookmarks();
    setResults(searchedTags);
  }
  return (
    <div id="search">
      <h3>Search tags here:</h3>
      <form onSubmit={ handleSubmit }>
        <input type="text" placeholder="search tags" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchTags;