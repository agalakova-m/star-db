import React, { Component } from 'react';

import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ItemDetails, { Record } from '../item-details/item-details';
import ErrorBoundary from '../error-boundary/error-boundary';
import Row from '../row/row';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from '../sw-components';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            {/* <RandomPlanet />
          <div className="row mb2 button-row">
            <ErrorButton />
          </div> */}
            {/* <PeoplePage /> */}
            {/* <Row left={personDetails} right={starshipDetails} /> */}
            <div className="row mb2">
              <div className="col-md-6">
                <PersonDetails itemId={11} />
                <PlanetDetails itemId={5} />
                <StarshipDetails itemId={9} />
              </div>

              <div className="col-md-6">
                <PersonList />
              </div>

              <div className="col-md-6">
                <PlanetList />
              </div>

              <div className="col-md-6">
                <StarshipList />
              </div>
            </div>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
