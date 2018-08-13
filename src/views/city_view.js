const PubSub = require('../helpers/pub_sub.js');

const CityView = function (container) {

};

CityView.prototype.createCityItem = function (city) {
  const cityItem = document.createElement('section');
  cityItem.classList.add('city-detail');

  const cityName = this.createTextElement('h2', city.full_name);
  cityItem.appendChild(cityName);

  return cityItem;
};


CityView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = CityView;
