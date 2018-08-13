const PubSub = require('../helpers/pub_sub.js');
const CityView = require('./city_view.js');


const CityListView = function (container) {
  this.container = container;
  this.cities = [];
};

CityListView.prototype.bindEvents = function () {
  PubSub.subscribe('Cities:city-data-ready', (event) => {
    this.clearList();
    this.renderCityViews(event.detail);
    console.log(event.detail);
  });

};

CityListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

CityListView.prototype.renderCityViews = function (cities) {
  this.cities = cities;
  cities.forEach((city) => {
  this.createCityListItem(city);
  });
};

CityListView.prototype.createCityListItem = function (city) {
  const cityView = new CityView(this.container, city);
  cityView.createCityItem();
};

module.exports = CityListView;
