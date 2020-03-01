export default class SwapiService {
  // это приватная часть класса, ее не следует использовать или изменять снаружи
  _apiBase = 'https://swapi.co/api';
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planet/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starchips/`);
    return res.results;
  }

  getStarchip(id) {
    return this.getResource(`/starchips/${id}/`);
  }
}

// const swapi = new SwapiService();
// swapi.getPerson(3).then(p => {
//   console.log(p.name);
// });
