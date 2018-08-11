const Cities = require('./models/cities.js');
const SelectView = require('./views/select_view.js');
const CityView = require('./views/city_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#cities');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const cityContainer = document.querySelector('#city');
  const cityView = new CityView(cityContainer);
  cityView.bindEvents();

  const cityImageContainer = document.querySelector('#city');
  const cities = new Cities();
  cities.bindEvents();

});
