app.service('helloWorld', function () {
  this.myFunc = function () {
    return "helloWorld";
  };
  this.filterFunction = function (x) {
    return x.toUpperCase();
  }
});

app.filter('myFormat', ['helloWorld', function (helloWorld) {
  return function (x) {
    return helloWorld.filterFunction(x);
  };
}]);