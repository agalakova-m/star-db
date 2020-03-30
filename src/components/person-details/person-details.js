import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './person-details.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: this.props.personId,
    loading: false,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  onPersonLoaded = person => {
    this.setState({ person, loading: false });
  };

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.setState({ loading: true });

    this.swapiService.getPerson(personId).then(this.onPersonLoaded);
  }

  render() {
    const { person, loading } = this.state;
    console.log(person);
    const content = loading ? <Spinner /> : <PersonView person={person} />;

    return <div className="person-details card">{content}</div>;
  }
}

const PersonView = ({ person }) => {
  if (!person) {
    return <span>Select a person from a list</span>;
  }

  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <Fragment>
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt=""
      />

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
      </div>
    </Fragment>
  );
};
