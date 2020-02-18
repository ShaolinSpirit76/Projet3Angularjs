var app = angular.module('demonApp', ['ngRoute']);
var totalPrice = 0;
var index = 0;
var productQuantity = 0;
var totalAmount = 0;
var tax = 0;
var finalAmount = 0;

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html'
      })
      .when('/boardGame', {
        templateUrl: 'boardGame.html',
        controller: 'articlesCtrl'
      })
      .when('/kids', {
        templateUrl: 'kids.html',
        controller: 'articlesCtrl'
      })
      .when('/goodies', {
        templateUrl: 'goodies.html',
        controller: 'articlesCtrl'
      })
      .when('/conditions', {
        templateUrl: 'conditions.html'

      })
      .when('/legal', {
        templateUrl: 'legal.html'

      })
      .when('/retract', {
        templateUrl: 'retract.html'

      })
      .when('/delivery', {
        templateUrl: 'delivery.html'

      })
      .otherwise({
        templateURL: 'home.html'
      });
  }
]);



app.run(['$rootScope', '$http', function($rootScope, $http) {
  $rootScope.cart = [];
  $http({
    method: 'GET',
    url: 'articles.json'
  }).then(function successCallback(response) {
    $rootScope.articles = response.data;
  }, function errorCallback(response) {
    alert('error');
  });
}]);



app.controller('articlesCtrl', ['$scope', '$rootScope', '$window', function($scope, $rootScope, $window) {
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
      index++;
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


  $scope.oneLess = function(product) {
    product.totalPrice = Math.round(product.quantity * product.price * 100) / 100;
    if (productQuantity >= 1) {
      productQuantity--;
    }
  }

  $scope.oneMore = function(product) {
    product.totalPrice = Math.round(product.quantity * product.price * 100) / 100;
    productQuantity++;
  }

  $scope.productTotalQuantity = function() {
    if (productQuantity > 0) {
      return productQuantity;
    }
  }

  $scope.finalAmount = function() {
    var total = 0;
    angular.forEach($rootScope.cart, function(value, key) {
      total = Math.round((total + value.quantity * value.price) * 100) / 100;
    });
    totalAmount = total;

    if ($scope.selectCountry === undefined) {
      tax = 0;
    } else if (totalAmount >= 65) {
      tax = 0;
      finalAmount = totalAmount;
      return finalAmount;
    } else {
      tax = $scope.selectCountry;
      finalAmount = Math.round((totalAmount + parseFloat(tax)) * 100) / 100;
      return finalAmount;
    }

  }



  $scope.stop = function() {
    Swal.fire("Votre commande est de " + finalAmount + "€. Nous venons de vous envoyer un récapitulatif de votre commande à votre adresse email \"" + $scope.email + "\"");
  }

  $scope.scrollToTop = function() {

    if (window.innerWidth <= 991) {
      $window.scrollTo(0, 0);
    } else if (window.innerWidth > 991) {
      $window.scrollTo(0, 320);
    }
  }


}]);
