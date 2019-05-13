var app = angular.module('demonApp',['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl:'home.html',
        controller: 'articlesCtrl'
      })
      .when('/boardGame',{
        templateUrl:'boardGame.html',
        controller: 'articlesCtrl'
      })
      .when('/kids',{
        templateUrl:'kids.html',
        controller: 'articlesCtrl'
      })
      .when('/goodies',{
        templateUrl:'goodies.html',
        controller: 'articlesCtrl'
      })
      .otherwise({
        templateURL: 'home.html'
      });
  }
]);

app.run(['$rootScope', function($rootScope) {
  $rootScope.cart = [];
}]);

app.controller('articlesCtrl',['$scope','$http', function($scope, $http){
  $http({
    method:'GET',
    url:'articles.json'
  }).then(function successCallback(response){
    $scope.articles=response.data;
      }, function errorCallback(response){
    alert('error');
  });
  $scope.cart = [];

  var findItemById = function(items, id) {
    return _.find(items, function(article) {
      return articles.id === id;
    });
  };

  $scope.addToCart = function(cartToAdd) {
      var found = findItemById($scope.cart, cartToAdd.id);
      console.log(found);
  };

}]);
