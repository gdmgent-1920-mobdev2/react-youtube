import React, { createContext, useEffect, useState } from 'react';

import { youtubeDataApi } from '../config';

const YoutubeApiContext = createContext();

const YoutubeApiProvider= ({children}) => { 
    const [ searchResults, setSearchResults ] = useState([]);

    const YOUTUBE_API_SEARCH = `${youtubeDataApi.searchUrl}?key=${youtubeDataApi.apiKey}&part=snippet&maxResults=20&q=`;

    const search = async (q) => {
        const url = `${YOUTUBE_API_SEARCH}${q}`;
        const response = await fetch(url);
        const jsonData = await response.json();
        setSearchResults(jsonData);
    }   

    return (
        <YoutubeApiContext.Provider value={{search, searchResults}}>
            {children}
        </YoutubeApiContext.Provider>
    )
};

export {
    YoutubeApiContext,
    YoutubeApiProvider,
}