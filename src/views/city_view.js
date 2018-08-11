const PubSub = require('../helpers/pub_sub.js');

const CityView = function (container) {
  this.container = container;
};

CityView.prototype.bindEvents = function () {
  PubSub.subscribe('Cities:selected-city-ready', (evt) => {
    this.clearCity();
    this.render(evt.detail);
  });
};
