import React from 'react';
import{fetchBookmarks}from '../api/index.js'

const SearchBookmarks = ({setResults}) => {
  async function handleSubmit(event) {
    event.preventDefault();
    const bookMarks = await fetchBookmarks();
    setResults(bookMarks);
  }
  return (
    <div id="search">
      <h3>Search bookmarks here:</h3>
      <form onSubmit={ handleSubmit }>
        <input type="text" placeholder="search bookmarks" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBookmarks;