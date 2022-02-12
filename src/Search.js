import React from 'react';

const Search = ({ onsearch }) => {
    const onChangeEvent = (e) => {
        const query = e.target.value.toString().toLowerCase();
        onsearch(e.target.value);
    }
    return (
        <input type="text" onChange={onChangeEvent} />
    );
}

export default Search;