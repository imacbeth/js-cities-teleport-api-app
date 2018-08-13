const Cities = require('./models/cities.js');
const SelectView = require('./views/select_view.js');
const CityView = require('./views/city_view.js');
const CityListView = require('./views/city_list_view.js');
const CityDetailView = require('./views/city_detail_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#continents');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const cityContainer = document.querySelector('#cities-in-continent');
  const cityListView = new CityListView(cityContainer);
  cityListView.bindEvents();

  const cityDetailContainer = document.querySelector('#city');

  const cities = new Cities();
  cities.bindEvents();
  cities.getData();

});
