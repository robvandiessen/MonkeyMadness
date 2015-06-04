angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

   
  //$ionicConfigProvider.views.transition('android');

  $stateProvider

  /* SIDEMENU NAVIGATIE */
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.mexen', {
    url: "/mexen",
    views: {
      'menuContent': {
        templateUrl: "sidemenu/mexen.html",
        controller: 'MexenCtrl'
      }
    }
  })

  .state('app.spelregels', {
    url: "/spelregels",
    views: {
      'menuContent': {
        templateUrl: "sidemenu/spelregels.html",
        controller: 'SpelregelsCtrl'
      }
    }
  })

  .state('app.contact', {
    url: "/contact",
    views: {
      'menuContent': {
        templateUrl: "sidemenu/contact.html",
        controller: 'ContactCtrl'
      }
    }
  })

  /* TAB NAVIGATIE */
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

  /* HOME/RAD VAN SCHAAMTE NAVIGATIE */
  .state('app.start', {
    url: "/start",
    views: {
      'menuContent': {
        templateUrl: "home/start.html", //templates
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.wheel', {
    url: "/wheel",
    views: {
      'menuContent': {
        templateUrl: "home/wheel.html", //templates
        controller: 'HomeCtrl'
      }
    }
  })

  /* OPDRACHTEN NAVIGATIE */
  .state('app.opdracht1', {
    url: "/opdracht1",
    views: {
      'menuContent': {
        templateUrl: "home/opdrachten/opdracht1.html", //templates
        controller: 'OpdrachtCtrl'
      }
    }
  })

  .state('app.opdracht2', {
    url: "/opdracht2",
    views: {
      'menuContent': {
        templateUrl: "home/opdrachten/opdracht2.html", //templates
        controller: 'OpdrachtCtrl'
      }
    }
  })

  .state('app.opdracht3', {
    url: "/opdracht3",
    views: {
      'menuContent': {
        templateUrl: "home/opdrachten/opdracht3.html", //templates
        controller: 'OpdrachtCtrl'
      }
    }
  })

  .state('app.opdracht4', {
    url: "/opdracht4",
    views: {
      'menuContent': {
        templateUrl: "home/opdrachten/opdracht4.html", //templates
        controller: 'OpdrachtCtrl'
      }
    }
  })

  .state('app.opdracht5', {
    url: "/opdracht5",
    views: {
      'menuContent': {
        templateUrl: "home/opdrachten/opdracht5.html", //templates
        controller: 'OpdrachtCtrl'
      }
    }
  })

  .state('app.opdracht6', {
    url: "/opdracht6",
    views: {
      'menuContent': {
        templateUrl: "home/opdrachten/opdracht6.html", //templates
        controller: 'OpdrachtCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise("/app/tabs/home");
  //$ionicConfigProvider.views.maxCache(0);
})

.controller('AppCtrl', function($scope) {
  console.log('AppCtrl');
})

.controller('MexenCtrl', function($scope) {
  console.log('MexenCtrl');
  
})

.controller('SpelregelsCtrl', function($scope) {
  console.log('SpelregelsCtrl');
  
})

.controller('ContactCtrl', function($scope) {
  console.log('ContactCtrl');
  
})

.controller('HomeCtrl', function($scope, $ionicPopup, $timeout) {
  drawRouletteWheel();

  /*
  $scope.toonOpdracht = function(){

    $ionicPopup.alert({
       title: 'Don\'t eat that!',
       template: 'It might taste good'
     });
  }
  */
});


