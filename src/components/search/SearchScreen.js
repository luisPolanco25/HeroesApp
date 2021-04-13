import React, { useMemo } from 'react';
import queryString from 'query-string'
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm/useForm';
import { HeroesCards } from '../heroes/HeroesCards';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''}= queryString.parse(location.search);
    
    const [values, handleInputChange] = useForm({
        searchText: q
    });
    
    const {searchText} = values;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Find your hero</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                        type="text"
                        placeholder='(e.g., "Batman")'
                        className="form-control" 
                        onChange={handleInputChange}
                        name="searchText"
                        value={searchText}
                        autoComplete="off"
                        />
                        <button
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '') && 
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) && 
                        <div className="alert alert-danger">
                            There's not a hero with {q}
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroesCards 
                            key={hero.id}
                            {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
