import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router';
import { heroesImages } from '../../helpers/heroesImages';
import { getHeroeById } from '../../selectors/getHeroById';

export const HeroesScreen = ({history}) => {

    const {heroeId} = useParams();

    const hero = useMemo(() => getHeroeById(heroeId), [heroeId]);
    
    if (!hero) {
        return <Redirect to="/" />
    }

    const {superhero, publisher, alter_ego, first_appearance, characters} = hero;
    
    const handleReturn = () => {
        
        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack();
        }
        
    }
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                src={heroesImages(`./${heroeId}.jpg`)}
                alt={superhero} 
                className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h1>{superhero}</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b>{alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b>{publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearance: </b>{first_appearance}
                    </li>
                </ul>

                <br />

                <h4>Characters</h4>
                <p>{characters}</p>

                <button 
                className="btn btn-outline-info"
                onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
