const PubSub = require('../helpers/pub_sub.js');

const CityDetailView = function (container) {
  this.container = container;
  this.categories = [];
};

CityDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Cities:city-details', (event) => {
    this.renderCityDetails(event.detail);
  });
};


  CityDetailView.prototype.renderCityDetails = function (categories) {
    this.container = document.querySelector('.city-details');
    this.container.innerHTML = '';
    const categoriesListTitle = this.createTextElement('h3', 'City Data:');
    this.container.appendChild(categoriesListTitle);

    const categoryHeadings = this.createCategoryList(categories)

    console.log(this.container);
    return this.container;
  };



  CityDetailView.prototype.createCategoryList = function (categories) {
    categories.forEach((category) => {
      const categoryHeadings = document.createElement('h4');
      categoryHeadings.textContent = `${category.label}:`;
      this.container.appendChild(categoryHeadings);
    });
  };


  CityDetailView.prototype.createCategoryItem = function () {



  };

  CityDetailView.prototype.createTextElement = function (elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
  };
module.exports = CityDetailView;
