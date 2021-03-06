const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (selectElement) {
  this.element = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Cities:continents-ready', (event) => {
    this.populate(event.detail)
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  })
};

SelectView.prototype.populate = function (continents) {
  continents.forEach((continent, index) => {
    const continentOption = this.createOption(continent, index);
    this.element.appendChild(continentOption);
  });
};

SelectView.prototype.createOption = function (continent, index) {
  const option = document.createElement('option');
  option.textContent = continent;
  option.value = index;
  return option;
};

module.exports = SelectView;
