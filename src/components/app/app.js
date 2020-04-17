import React, { Component } from 'react';

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
  render() {
    return (
      <ErrorBoundary>
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
              <PersonList onItemSelected={this.onItemSelected}>
                {({ name }) => <span>{name}</span>}
              </PersonList>
            </div>

            <div className="col-md-6">
              <PlanetList onItemSelected={this.onItemSelected}>
                {({ name }) => <span>{name}</span>}
              </PlanetList>
            </div>

            <div className="col-md-6">
              <StarshipList onItemSelected={this.onItemSelected}>
                {({ name }) => <span>{name}</span>}
              </StarshipList>
            </div>
          </div>
          {/* <div className="row mb2">
            <div className="col-md-6">
              <PersonList onItemSelected={this.onItemSelected}>
                {({ name }) => <span>{name}</span>}
              </PersonList>
            </div>
            {/* <div className="col-md-6">
              <ItemDetails itemId={this.state.selectedItem} />
            </div> */}
          {/* </div> */}
        </div>
      </ErrorBoundary>
    );
  }
}
