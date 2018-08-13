const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Cities = function () {
  // this.url = url;
  this.citiesData = [];
  this.continents = [];
  this.cityDetails= [];
};

Cities.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishCitiesByContinent(selectedIndex);
  });

  PubSub.subscribe('CityListView:selected', (event) => {
    const selectedCityName = event.detail;
    console.log(event);
    this.publishCityDetails(selectedCityName);
  })
};

Cities.prototype.getData = function () {
  const url = `https://api.teleport.org/api/urban_areas/?embed=ua:item/`;
  const request = new Request(url);
  request.get()
  .then((data) => {
    this.citiesData = data._embedded["ua:item"];
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
  return this.citiesData.filter(city => city.continent === selectedContinent);
};

Cities.prototype.publishCitiesByContinent = function (continentIndex) {
  const foundCities = this.citiesByContinent(continentIndex);
  PubSub.publish('Cities:city-data-ready', foundCities);
};

Cities.prototype.publishCityDetails = function (cityName) {
  const url = `https://api.teleport.org/api/urban_areas/?embed=ua:item/slug:${cityName}/details/`;
  const request = new Request(url);
  request.get()
  .then((data) => {
    this.cityDetails = data.categories;
    PubSub.publish('Cities:city-details', this.cityDetails);
  })
  .catch((err) => {
    console.error(err);
  });

};


module.exports = Cities;
