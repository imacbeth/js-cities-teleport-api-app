const Request = function (url) {
  this.url = url;
}

Request.prototype.get = function () {
  // fetch returns a promise - get data back from url
  return fetch(this.url)
  // converts the response text that we get back from the request to a JS object
  .then(response => response.json());
}


module.exports = Request;
