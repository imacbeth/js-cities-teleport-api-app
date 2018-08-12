const PubSub = require('../helpers/pub_sub.js');

const CityView = function (container) {

};

CityView.prototype.createCityDetail = function (city) {
  const cityDetail = document.createElement('section');
  cityDetail.classList.add('city-detail');

  const cityName = this.createTextElement('h2', city.full_name);
  cityDetail.appendChild(cityName);


  const continent = this.createTextElement('h3', city.continent);
  cityDetail.appendChild(continent);

  // const mayor = this.createTextElement('h3', city.mayor)
  // cityDetail.appendChild(mayor);

  return cityDetail;
};


CityView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = CityView;
