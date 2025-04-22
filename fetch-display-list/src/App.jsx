import React from 'react';
import ListFetcher from './ListFetcher';

/* Objective: Build a functional React component that fetches data from an API and displays it.
Also, create a reusable list component to follow best practices in component reusability and separation of concerns. */

function App() {
  return (
    <div className="App">
      <h1>Fetched List</h1>
      <ListFetcher />
    </div>
  );
}

export default App;
