import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ItemDetails, { Record } from '../item-details/item-details';
import ErrorBoundary from '../error-boundary/error-boundary';
import Row from '../row/row';

import ItemList from '../item-list/item-list';

import SwapiService from '../../services/swapi-service';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );
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
              <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPlanets}
              >
                {({ name }) => <span>{name}</span>}
              </ItemList>
            </div>
            {/* <div className="col-md-6">
              <ItemDetails itemId={this.state.selectedItem} />
            </div> */}
          </div>

          <div className="row mb2">
            <div className="col-md-6">
              <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllStarships}
              >
                {({ name }) => <span>{name}</span>}
              </ItemList>
            </div>
            {/* <div className="col-md-6">
              <ItemDetails itemId={this.state.selectedItem} />
            </div> */}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
