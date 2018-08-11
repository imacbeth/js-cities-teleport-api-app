const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Cities = function () {
  // this.url = url;
  this.cities = [];
  this.images = null;
};

Cities.prototype.bindEvents = function () {
  this.getListData();
  this.getMoreData();
  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    const selectedCity = this.cities[selectedIndex];
    PubSub.publish('Cities:selected-city-ready', selectedCity);
  });

};

Cities.prototype.getListData = function () {
  const url = `https://api.teleport.org/api/urban_areas/?embed=ua:item/`;
  const request = new Request(url);
  request.get()
  .then((data) => {
    this.cities = data._embedded["ua:item"];
    console.log(this.cities);
    PubSub.publish('Cities:city-data-ready', this.cities);
  })
  .catch((err) => {
    console.error(err);
  });
}

Cities.prototype.getMoreData = function () {
  const url = `https://api.teleport.org/api/urban_areas/?embed=ua:item/ua:images`;
  const request = new Request(url);
  request.get()
  .then((data) => {
    this.images = data;
    console.log(this.images);
    PubSub.publish('Cities:city-detailed-data-ready', this.images);
  })
  .catch((err) => {
    console.error(err);
  });
}



// Cities.prototype.getImages = function () {
//   const url = `https://api.teleport.org/api/urban_areas/${ua_id}/images/`;
//   const request = new Request(url);
//   request.get()
//   .then((data) => {
//     this.images = data.photos;
//     PubSub.publish('Cities:city-data-ready', this.images);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// };

module.exports = Cities;
