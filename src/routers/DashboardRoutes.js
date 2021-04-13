import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Navbar } from '../components/ui/NavBar';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
          <Navbar />

          <div className="ml-5 mr-5 mt-1">
            <Switch>
                <Route exact path="/marvel" component={MarvelScreen} />
                <Route exact path="/hero/:heroeId" component={HeroesScreen} />
                <Route exact path="/dc" component={DcScreen} />
                <Route exact path="/search" component={SearchScreen} />


                <Redirect to="/marvel" />
            </Switch>    
          </div>  
        </>
    )
}
