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

  this.cities.forEach((city) => {
  city.addEventListener('click', (event) => {
    const selectedCityName = event.target.slug;
    PubSub.publish('CityListView:selected', selectedCityName);
  });
});
};

CityListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

CityListView.prototype.renderCityViews = function (cities) {
  this.cities = cities;
  cities.forEach((city) => {
    const cityItem = this.createCityListItem(city);
    console.log(cityItem);
    this.container.appendChild(cityItem);
  });
};

CityListView.prototype.createCityListItem = function (city) {
  const cityView = new CityView();
  const cityItem = cityView.createCityItem(city);
  return cityItem;
};

module.exports = CityListView;
