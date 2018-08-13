const PubSub = require('../helpers/pub_sub.js');

const CityDetailView = function (container) {
  this.container = container;
  this.categories = [];
};

// CityDetailView.prototype.bindEvents = function () {
//   PubSub.subscribe('Cities:city-details', (event) => {
//     this.clearList();
//     this.renderCityDetails(event.detail);
//     console.log(event.detail);
//   });
//
//   CityDetailView.prototype.clearList = function () {
//     this.container.innerHTML = '';
//   };
//
//   CityDetailView.prototype.renderCityDetails = function (categories) {
//     // const cityDetails = document.createElement('section');
//     // cityDetails.classList.add('city-detail');
//     //
//     // const cityName = document.createElement('h2', city.full_name);
//     // cityDetails.appendChild(cityName);
//     //
//     //
//     // const continent = this.createTextElement('h3', city.continent);
//     // cityDetails.appendChild(continent);
//     const categoriesListTitle = this.createTextElement('h3', 'City Data:');
//     this.container.appendChild(categoriesListTitle);
//
//     const categoryHeadings = this.createCategoryList(categories)
//     this.container.appendChild(categoryHeadings)
//
//     return cityDetail;
//   };
//
//
//   // CityDetailView.prototype.createCategoryItem = function () {
//   //
//   //
//   //
//   // };
//
//
//   CityDetailView.prototype.createCategoryList = function (categories) {
//     categories.forEach((category) => {
//       const categoryHeadings= document.createElement('h4');
//       categoryHeadings.textContent = category.label;
//       list.appendChild(categoryHeadings);
//     });
//   };

module.exports = CityDetailView;
