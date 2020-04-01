import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

import './item-details.css';

export default class ItemDetails extends Component {
  state = {
    item: null,
    loading: false,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onItemLoaded = item => {
    this.setState({
      item,
      loading: false,
      image: this.props.getImageUrl(item),
    });
  };

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    this.setState({ loading: true });
    getData(itemId).then(this.onItemLoaded);
  }

  render() {
    const { item, loading, image } = this.state;
    const content = loading ? (
      <Spinner />
    ) : (
      <ItemView item={item} image={image} />
    );

    return <div className="item-details card">{content}</div>;
  }
}

const ItemView = ({ item, image }) => {
  if (!item) {
    return <span>Select a item from a list</span>;
  }

  const { id, name, gender, birthYear, eyeColor } = item;

  return (
    <Fragment>
      <img className="item-image" src={image} alt="" />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <div className="row mb2 button-row">
          <ErrorButton />
        </div>
      </div>
    </Fragment>
  );
};
