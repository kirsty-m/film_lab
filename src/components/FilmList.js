import React from 'react';
import Film from '../components/Film'

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return(
            <>
            <Film name={film.name} key={film.id} url={film.url}></Film>
            </>
        )
      
    })

    return (
        <>
        <h3>Film List:</h3>
        {filmNodes}
        </>
    )
};

export default FilmList;