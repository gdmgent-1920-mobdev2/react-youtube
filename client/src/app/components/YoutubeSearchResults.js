import React, { useContext, useState, Fragment } from 'react';
import { YoutubeApiContext } from '../context';
import YoutubeSearchResultsItem from './YoutubeSearchResultsItem';

import './YoutubeSearchResults.css';

const YoutubeSearchResults = ({}) => {
    const { searchResults } = useContext(YoutubeApiContext);

    return (
        <div className="youtube-search-results">
            <ul>
            {
                !!searchResults.items ? 
                searchResults.items.map((item) => {
                    return (
                        <YoutubeSearchResultsItem key={item.id.videoId} item={item} />
                    )
                }) : 
                <Fragment></Fragment>
            }
            </ul>
        </div>
    );
};

export default YoutubeSearchResults;