import React, { useContext, useState } from 'react';
import { YoutubeApiContext } from '../context';

import './YoutubeSearchForm.css';

const YoutubeSearchForm = ({}) => {
    const [ searchString, setSearchString ] = useState('');
    const { search } = useContext(YoutubeApiContext);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        search(searchString);
    };

    return (
        <form className="youtube-search-form" onSubmit={handleSubmit}>
            <input type="text" required placeholder="write your search..." onChange={(ev) => setSearchString(ev.target.value)} value={searchString} />
            <input type="submit" value="Search" />
        </form>
    );
};

export default YoutubeSearchForm;