import React from 'react';

import './YoutubeSearchResultsItem.css';

const YoutubeSearchResultsItem = ({item, videoClicked}) => {
    return (
        <li className="youtube-search-results__item" onClick={videoClicked}>
            <h1>{item.snippet.title}</h1>
            <picture className="picture">
                <img src={item.snippet.thumbnails.high.url}/>
            </picture>
        </li>
    );
};

export default YoutubeSearchResultsItem;