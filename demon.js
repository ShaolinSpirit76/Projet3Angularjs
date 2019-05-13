var app = angular.module('demonApp',['ngRoute']);
var totalPrice = 0;
var totalAmount = 0;
var index = 0;
var finish = 0;
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
   $scope.addToCart = function(article){
   if(article.quantity == 0){
      article.quantity++;
      article.totalPrice = article.quantity*parseFloat(article.price);
      totalAmount += parseFloat(article.price);
        console.log(totalAmount);
      article.position = index;
      index++;
      $rootScope.cart.push({
        name : article.name,
        ref : article.ref,
        price : article.price,
        quantity : article.quantity,
        img : article.img,
        clicked : article.clicked,
        totalPrice:article.totalPrice,
        totalAmount:article.totalAmount,
        position:article.position
      });
   }else{
     console.log(article.position);
     $rootScope.cart[article.position].quantity++;
     $rootScope.cart[article.position].totalPrice = $rootScope.cart[article.position].quantity*parseFloat(article.price);
     totalAmount += parseFloat(article.price);
       console.log(totalAmount);
   }
   }

  $scope.oneMore = function(product){
  console.log(product);
   $rootScope.cart[product.position].quantity++;
   product.totalPrice = product.quantity*parseFloat(product.price);
   totalAmount += parseFloat(product.price);
   console.log(totalAmount);
 }

 $scope.oneLess = function(product){
   console.log(product);
    $rootScope.cart[product.position].quantity--;
    product.totalPrice = product.quantity*parseFloat(product.price);
    totalAmount -= parseFloat(product.price);
    console.log(totalAmount);
    if($rootScope.cart[product.position].quantity==0){
      $rootScope.cart.splice(product.position,1);
      console.log(index);
      index--;
      console.log(index);
    }
  }

  $scope.remove = function(product){
    product.quantity = 0;
    if($rootScope.cart[product.position].quantity==0){
      $rootScope.cart.splice(product.position,1);
      console.log(index);
      index--;
      console.log(index);
        console.log(totalAmount);
    }
    // $rootScope.cart.splice(product.position,1);
    // index--;
  }

  $scope.total = function(product) {
    var totalAmount = 0;
      // totalAmount += parseFloat(product.totalPrice);
    if (totalAmount == undefined) {
      totalAmount = 0.00;
    }
      console.log(totalAmount);
// $(".pay").data("total", totalAmount).children(".total").html(totalAmount);
  }

  $scope.stop = function() { // Fonction au click du bouton valider ma commande pour stopper la boucle
    finish++
    Swal.fire("Votre commande est de " + totalAmount + "€");
  }

  // $scope.keepOn = function() {
  //   $scope.tag="false";
  // }
}]);

// } Fermeture de la boucle
