const PubSub = require('../helpers/pub_sub.js');

const CityView = function (container) {
  this.container = container;
};

CityView.prototype.bindEvents = function () {
  PubSub.subscribe('Cities:selected-city-ready', (evt) => {
    this.clearCity();
    this.render(evt.detail);
  });
  PubSub.subscribe('Cities:city-image-ready', (evt) => {
    this.clearCity();
    // this.renderImages(evt.detail);
    console.log(evt.detail);
  });
};

CityView.prototype.render = function (city) {
  const cityName = this.createTextElement('h2', city.full_name);
  this.container.appendChild(cityName);


  const continent = this.createTextElement('h3', city.continent);
  this.container.appendChild(continent);

  const mayor = this.createTextElement('h3', city.mayor)
  this.container.appendChild(mayor);

  // const location = this.createTextElement('p', city["_links"].)

  // this.container.appendChild(flagImage);
};


CityView.prototype.renderImages = function (city) {
  const image = document.createElement('img');
  image.src = city._embedded["ua:item"]["embedded"];
  console.log(image.src);

  this.container.appendChild(image);
};

CityView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

CityView.prototype.clearCity = function () {
  this.container.innerHTML = '';
};
module.exports = CityView;
