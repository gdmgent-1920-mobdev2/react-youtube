import React from 'react';

import './YoutubeSearchResultsItem.css';

const YoutubeSearchResultsItem = ({item}) => {
    return (
        <li className="youtube-search-results__item">
            <h1>{item.snippet.title}</h1>
            <picture className="picture">
                <img src={item.snippet.thumbnails.high.url}/>
            </picture>
        </li>
    );
};

export default YoutubeSearchResultsItem;