import React, { useContext } from 'react';

import { YoutubeApiProvider } from './context';
import { YoutubeSearchForm, YoutubeSearchResults } from './components';

import './App.css';

function App() {

  return (
    <div className="app">
      <YoutubeApiProvider>
        <YoutubeSearchForm />
        <YoutubeSearchResults />
      </YoutubeApiProvider>
    </div>
  );
}

export default App;
