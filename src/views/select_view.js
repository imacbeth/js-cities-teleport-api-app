const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (selectElement) {
  this.element = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Cities:city-data-ready', (evt) => {
    this.populate(evt.detail)
    console.log(evt.detail);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  })
};

SelectView.prototype.populate = function (cities) {
  cities.forEach((city, index) => {
    const cityOption = this.createOption(city.name, index);
    this.element.appendChild(cityOption);
  });
};

SelectView.prototype.createOption = function (name, index) {
  const option = document.createElement('option');
  option.textContent = name;
  option.value = index;
  return option;
};

module.exports = SelectView;
