const PubSub = require('../helpers/pub_sub.js');

const CityDetailView = function (container) {
  this.container = container;
  this.categories = [];
};

CityDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Cities:city-details', (event) => {
    this.clearList();
    this.renderCityDetails(event.detail);

  });
};

  CityDetailView.prototype.clearList = function () {
    this.container.innerHTML = '';
  };

  CityDetailView.prototype.renderCityDetails = function (categories) {
    // const cityDetails = document.createElement('section');
    // cityDetails.classList.add('city-detail');
    //
    // const cityName = document.createElement('h2', city.full_name);
    // cityDetails.appendChild(cityName);
    //
    //
    // const continent = this.createTextElement('h3', city.continent);
    // cityDetails.appendChild(continent);
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
