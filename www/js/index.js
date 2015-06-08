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
  .state('app.categorie1', {
    url: "/categorie1",
    views: {
      'menuContent': {
        templateUrl: "home/opdrachten/categorie1.html", //templates
        controller: 'CategorieCtrl'
      }
    }
  })

  .state('app.categorie2', {
    url: "/categorie2",
    views: {
      'menuContent': {
        templateUrl: "home/opdrachten/categorie2.html", //templates
        controller: 'CategorieCtrl'
      }
    }
  })

  .state('app.categorie3', {
    url: "/categorie3",
    views: {
      'menuContent': {
        templateUrl: "home/opdrachten/categorie3.html", //templates
        controller: 'CategorieCtrl'
      }
    }
  })

  .state('app.categorie4', {
    url: "/categorie4",
    views: {
      'menuContent': {
        templateUrl: "home/opdrachten/categorie4.html", //templates
        controller: 'CategorieCtrl'
      }
    }
  })

  .state('app.categorie5', {
    url: "/categorie5",
    views: {
      'menuContent': {
        templateUrl: "home/opdrachten/categorie5.html", //templates
        controller: 'CategorieCtrl'
      }
    }
  })

  .state('app.categorie6', {
    url: "/categorie6",
    views: {
      'menuContent': {
        templateUrl: "home/opdrachten/categorie6.html", //templates
        controller: 'CategorieCtrl'
      }
    }
  })

  .state('app.categorie7', {
    url: "/categorie7",
    views: {
      'menuContent': {
        templateUrl: "home/opdrachten/categorie7.html", //templates
        controller: 'CategorieCtrl'
      }
    }
  })

  .state('app.categorie8', {
    url: "/categorie8",
    views: {
      'menuContent': {
        templateUrl: "home/opdrachten/categorie8.html", //templates
        controller: 'CategorieCtrl'
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

.controller('CategorieCtrl', function($scope) {
  console.log('CategorieCtrl');
  
})


.controller('HomeCtrl', function($scope, $ionicPopup, $timeout) {
  
  /*
  drawRouletteWheel();
  
  $ionicPopup.alert({
    title: 'Zet nu je geluid aan!',
    template: 'voor de ultieme beleving'
  });
  */
  
});


