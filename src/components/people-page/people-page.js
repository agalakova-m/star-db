import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import ErrorBoundary from '../error-boundary/error-boundary';
import Row from '../row/row';

import SwapiService from '../../services/swapi-service';

import './people-page.css';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 3,
  };

  onItemSelected = selectedItem => {
    this.setState({
      selectedItem,
    });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={i => `${i.name} (${i.birthYear})`}
      />
    );

    const itemDetails = <ItemDetails itemId={this.state.selectedItem} />;

    return (
      <ErrorBoundary>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundary>
    );
  }
}
