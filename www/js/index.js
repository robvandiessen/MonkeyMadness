angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

   
  //$ionicConfigProvider.views.transition('android');

  $stateProvider
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.welcome', {
    url: "/welcome",
    views: {
      'menuContent': {
        templateUrl: "welcome.html",
        controller: 'WelcomeCtrl'
      }
    }
  })

  .state('app.start', {
    url: "/start",
    views: {
      'menuContent': {
        templateUrl: "home/start.html", //templates
        controller: 'LoginCtrl'
      }
    }
  })

  .state('app.login2', {
    url: "/login2",
    views: {
      'menuContent': {
        templateUrl: "home/login2.html", //templates
        controller: 'LoginCtrl'
      }
    }
  })

  .state('app.tabs', {
    url: "/tabs",
    abstract: true,
    views: {
      'menuContent': {
        templateUrl: "templates/tabs.html"
      }
    }
  })

  .state('app.tabs.home', {
    url: "/home",
    views: {
      'home': {
        templateUrl: "templates/tabs-home.html"
      }
    }
  })

  .state('app.tabs.ranking', {
    url: "/ranking",
    views: {
      'ranking': {
        templateUrl: "templates/tabs-ranking.html"
      }
    }
  })

  .state('app.tabs.chat', {
    url: "/chat",
    views: {
      'chat': {
        templateUrl: "templates/tabs-chat.html"
      }
    }
  })

  $urlRouterProvider.otherwise("/app/tabs/home");
  //$ionicConfigProvider.views.maxCache(0);
})

.controller('AppCtrl', function($scope) {
  console.log('AppCtrl');
})

.controller('WelcomeCtrl', function($scope) {
  console.log('WelcomeCtrl');
  
})

.controller('LoginCtrl', function($scope) {
  console.log('LoginCtrl');
});


