import React, { createContext, useEffect, useState } from 'react';

const YoutubeApiContext = createContext();

const YoutubeApiProvider= ({children}) => { 
    const [ searchResults, setSearchResults ] = useState([]);

    const YOUTUBE_API_SEARCH = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDMtqcgbO-Ix7fOJc-plvQ7YmSjB0C14WI&part=snippet&maxResults=50&q=';

    const search = async (q) => {
        const url = `${YOUTUBE_API_SEARCH}${q}`;
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);
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