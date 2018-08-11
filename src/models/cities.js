const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');


const Cities = function (url) {
  this.url = url;
  this.cities = [];
};

Cities.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    const selectedCity = this.cities[selectedIndex];
  });
}

Cities.prototype.getData = function () {
  const url = `https://api.teleport.org/api/urban_areas/`;
  const request = new Request(url);
  request.get()
  .then((data) => {
    this.data = data.message;
    PubSub.publish('Cities:city-data-loaded', this.data);
  })
  .catch((err) => {
    console.error(err);
  });
}

module.exports = Cities;
