const PubSub = require('../helpers/pub_sub.js');
const CityView = require('./city_view.js');


const CityListView = function (container) {
  this.container = container;
};

CityListView.prototype.bindEvents = function () {
  PubSub.subscribe('Cities:city-data-ready', (evt) => {
    this.clearList();
    this.renderCityViews(evt.detail);
    console.log(evt.detail);
  });
};

CityListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

CityListView.prototype.renderCityViews = function (cities) {
  cities.forEach((city) => {
    const cityItem = this.createCityListItem(city);
    console.log(cityItem);
    this.container.appendChild(cityItem);
  });
};

CityListView.prototype.createCityListItem = function (city) {
  const cityView = new CityView();
  const cityDetail = cityView.createCityDetail(city);
  return cityDetail;
};

module.exports = CityListView;
