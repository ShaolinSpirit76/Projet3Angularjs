var app = angular.module('demonApp',['ngRoute']);
var totalPrice = 0;
var index = 0;
var productQuantity = 0;
var totalAmount = 0;

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl:'home.html'
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
      .when('/conditions',{
        templateUrl:'conditions.html'

      })
      .when('/legal',{
        templateUrl:'legal.html'

      })
      .when('/retract',{
        templateUrl:'retract.html'

      })
      .when('/delivery',{
        templateUrl:'delivery.html'

      })
      .otherwise({
        templateURL: 'home.html'
      });
  }
]);

// while (finish = 0) {

app.run(['$rootScope','$http', function($rootScope,$http) {
  $rootScope.cart = [];
  $http({
    method:'GET',
    url:'articles.json'
  }).then(function successCallback(response){
    $rootScope.articles=response.data;
      }, function errorCallback(response){
    alert('error');
  });
}]);



app.controller('articlesCtrl',['$scope','$rootScope', function($scope, $rootScope){
  $scope.addToCart = function(articleToCart) {
    var found = $rootScope.cart.find(x => x.id === articleToCart.id);

    if (found) {
      var indexArticle = $rootScope.cart.indexOf(found);
      $rootScope.cart[indexArticle].quantity++;
      $rootScope.cart[indexArticle].totalPrice = Math.round($rootScope.cart[indexArticle].quantity * $rootScope.cart[indexArticle].price * 100) / 100
      productQuantity++;
    } else {

      $rootScope.cart.push(angular.copy(articleToCart));
      $rootScope.cart[index].totalPrice = Math.round(articleToCart.price * 100) / 100;
      index++ ;
      productQuantity++;
    }
  };


  $scope.removeArticle = function(removeArticle) {
    var indexArticle = $rootScope.cart.indexOf(removeArticle);
    productQuantity -= $rootScope.cart[indexArticle].quantity;
    $rootScope.cart.splice(indexArticle, 1);
    index--;
  };
    // $rootScope.cart.splice(product.position,1);
    // index--;

    $scope.totalAmount = function() {
      var total = 0;
      angular.forEach($rootScope.cart, function(value, key) {
        total = Math.round((total + value.quantity * value.price) * 100) / 100;
      });
      totalAmount = total;
      return total;
    };

  $scope.stop = function() { // Fonction au click du bouton valider ma commande pour stopper la boucle
    Swal.fire("Votre commande est de " + totalAmount + "€");
  }

  $scope.oneLess = function(product) {
    product.totalPrice = Math.round(product.quantity * product.price * 100) / 100;
    if (productQuantity >= 1){
    productQuantity--;
  }
  }

  $scope.oneMore = function(product) {
    product.totalPrice = Math.round(product.quantity * product.price * 100) / 100;
    productQuantity++;
  }

  $scope.productTotalQuantity = function(){
    if(productQuantity > 0){
    return productQuantity;
  }
}

// $scope.tag="false";

//   $scope.keepOn = function() {
//     // $scope.tag="true";
//
// it('should check ngHide', function() {
//   var checkbox = element(by.model('clicked'));
//
//   expect(checkElem.isDisplayed()).toBe(false);
//   button.click();
//   expect(checkElem.isDisplayed()).toBe(f);
// });



}]);

// } Fermeture de la boucle
