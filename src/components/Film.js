import React from 'react';

const Film = ({name, id, url}) => {
    return(
        <>
        <p>
        <a href={url}>{name}</a>   
        </p>
        </>
        )
};

export default Film;