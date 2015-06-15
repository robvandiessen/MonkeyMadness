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

  /* WELKOM + UITLEG SCHERMEN */
  .state('app.welkom', {
    url: "/welkom",
    views: {
        'menuContent': {
          templateUrl: "START/welkom.html", //templates
          controller: 'StartCtrl'
        }
      }
    })

  .state('app.uitleg1', {
    url: "/uitleg1",
    views: {
        'menuContent': {
          templateUrl: "START/uitleg1.html", //templates
          controller: 'StartCtrl'
        }
      }
    })

  /* SIDEMENU NAVIGATIE */
  .state('app.mexen', {
    url: "/mexen",
    views: {
      'menuContent': {
        templateUrl: "SIDEMENU/mexen.html",
        controller: 'MexenCtrl'
      }
    }
  })

  .state('app.spelregels', {
    url: "/spelregels",
    views: {
      'menuContent': {
        templateUrl: "SIDEMENU/spelregels.html",
        controller: 'SpelregelsCtrl'
      }
    }
  })

  .state('app.contact', {
    url: "/contact",
    views: {
      'menuContent': {
        templateUrl: "SIDEMENU/contact.html",
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
        templateUrl: "templates/tabs-home.html",
        controller: 'HomeCtrl'
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
        templateUrl: "HOME/start.html", //templates
        controller: 'RadCtrl'
      }
    }
  })

  .state('app.lobbyadmin', {
          url: "/lobbyadmin",
          views: {
              'menuContent': {
                  templateUrl: "HOME/lobbyadmin.html", //templates
                  controller: 'LobbyMakenCtrl'
              }
          }
      })

  .state('app.deelnemen', {
          url: "/deelnemen",
          views: {
              'menuContent': {
                  templateUrl: "HOME/deelnemen.html", //templates
                  controller: 'LobbyDeelnameCtrl'
              }
          }
      })

  .state('app.wheel', {
    url: "/wheel",
    views: {
      'menuContent': {
        templateUrl: "HOME/wheel.html", //templates
        controller: 'WheelCtrl'
      }
    }
  })

  /* CATEGORIEEN NAVIGATIE */
  .state('app.categorie1', {
    url: "/categorie1",
    views: {
      'menuContent': {
        templateUrl: "HOME/CATEGORIEEN/categorie1.html", //templates
        controller: 'CategorieCtrl'
      }
    }
  })

  .state('app.categorie2', {
    url: "/categorie2",
    views: {
      'menuContent': {
        templateUrl: "HOME/CATEGORIEEN/categorie2.html", //templates
        controller: 'CategorieCtrl'
      }
    }
  })

  .state('app.categorie3', {
    url: "/categorie3",
    views: {
      'menuContent': {
        templateUrl: "HOME/CATEGORIEEN/categorie3.html", //templates
        controller: 'CategorieCtrl'
      }
    }
  })

  .state('app.categorie4', {
    url: "/categorie4",
    views: {
      'menuContent': {
        templateUrl: "HOME/CATEGORIEEN/categorie4.html", //templates
        controller: 'CategorieCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise("/app/welkom");
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

.controller('RadCtrl', function($scope) {
  console.log('RadCtrl');
  
})

.controller('WheelCtrl', function($scope, $ionicPopup, $timeout) {
  console.log('WheelCtrl');
  spinButton();
  speelGeluid();
  $ionicPopup.alert({
    title: 'Zet nu je geluid aan!',
    template: 'voor de ultieme beleving'
  });

  
})

.controller('CategorieCtrl', function($scope) {
  console.log('CategorieCtrl');

  speelGeluidOpdracht();
  toonCategorie1();
  toonCategorie2();
  toonCategorie3();
  toonCategorie4();
  stopGeluid();
})

.controller('LobbyMakenCtrl', function($scope) {
  console.log('LobbyMakenCtrl');
  maakLobby();
  
})

.controller('LobbyDeelnameCtrl', function($scope) {
  console.log('LobbyDeelnameCtrl');
  
})

.controller('StartCtrl', function($scope) {
  console.log('StartCtrl');
  hideHeadBar();
  
})

.controller('HomeCtrl', function($scope, $ionicPopup, $timeout) {
  
  showHeadBar();
  
  
});









