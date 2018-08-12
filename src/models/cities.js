const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Cities = function () {
  // this.url = url;
  this.citiesData = [];
  this.continents = [];
  this.images = null;
};

Cities.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishCitiesByContinent(selectedIndex);
  });

};

Cities.prototype.getData = function () {
  const url = `https://api.teleport.org/api/urban_areas/?embed=ua:item/`;
  const request = new Request(url);
  request.get()
  .then((data) => {
    this.citiesData = data._embedded["ua:item"];
    console.log(this.citiesData);
    // PubSub.publish('Cities:city-data-ready', this.citiesData);
    this.publishContinents(data);
  })
  .catch((err) => {
    console.error(err);
  });
};

Cities.prototype.publishContinents = function () {
  this.continents = this.continentsList(this.citiesData);
  PubSub.publish('Cities:continents-ready', this.continents);
};

Cities.prototype.continentsList = function (cities) {
  return cities
    .map(city => city.continent)
    .filter((continent, index, continents) => continents.indexOf(continent) === index);
};


Cities.prototype.citiesByContinent = function (continentIndex) {
  const selectedContinent = this.continents[continentIndex];
  console.log(selectedContinent);
  return this.citiesData.filter(city => city.continent === selectedContinent);
};

Cities.prototype.publishCitiesByContinent = function (continentIndex) {
  const foundCities = this.citiesByContinent(continentIndex);
  console.log(foundCities);
  PubSub.publish('Cities:city-data-ready', foundCities);
};


module.exports = Cities;
