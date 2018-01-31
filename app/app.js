angular.module('devmtnTravel', ['ui.router']).config( function ( $stateProvider, $urlRouterProvider ) {
  // .state can be chained
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: "app/about/aboutTmpl.html"
    })
    .state('packages',{
      url:'/packages/:country',
      templateUrl: "app/packages/packagesTmpl.html",
      controller: 'packagesCtrl'
    })
    .state('locations',{
      url:'/locations',
      templateUrl: "app/locations/locationsTmpl.html",
      controller: 'locationsCtrl'
    })
    .state('booked',{
      url:'/booked/:id',
      templateUrl: "app/booked/bookedTmpl.html",
      controller: 'bookedCtrl'
    })
    .state('adventures',{
      url:'/adventures',
      templateUrl: "app/adventures/adventuresTmpl.html"
    })
    .state('contact',{
      url:'/contact',
      templateUrl: "app/contact/contactTmpl.html"
    });

  $urlRouterProvider
    .otherwise('/');
});
