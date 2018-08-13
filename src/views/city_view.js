const PubSub = require('../helpers/pub_sub.js');

const CityView = function (container, city) {
  this.container = container;
  this.city = city;
};

CityView.prototype.createCityItem = function () {
  this.container.value = this.city.slug;
  const cityName = this.createTextElement('h3', this.city.full_name);
  cityName.addEventListener('click', (event) => {
    const selectedCityName = this.city.slug;
    PubSub.publish('CityListView:selected', selectedCityName);
  });
  this.container.appendChild(cityName);

  const detailsSection = document.createElement('section');
  detailsSection.classList.add('city-details');
  this.container.appendChild(detailsSection);
};


CityView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = CityView;
