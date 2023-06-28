import React from 'react';
import Film from '../components/Film'
import '../App.css';

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return(
            <>
            <Film name={film.name} key={film.id} url={film.url}></Film>
            </>
        )
    })

    return (
        <div>
        <h3>Upcoming Film releases for UK:</h3>
        {filmNodes}
        </div>
    )
};

export default FilmList;