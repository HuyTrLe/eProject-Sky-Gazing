var myApp = angular.module("myApp", [
    'ngRoute',
    'homedefault',
    'planet',
    'star',
    'starlist',
    'starlistitem1',
    'starlistitem2',
    'starlistitem3',
    'starlistitem4',
    'starlistitem5',
    'news',
    'news1',
    'news2',
    'news3',
    'news4',
    'news5',
    'observatories',
    'comet',
    'gallery',
    'aboutus',
    'contactus',
    'menu'
]);

myApp.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/",{
        templateUrl:"homedefault.html",controller:"homedefaultCtrl"
    })
    .when("/planet",{
        templateUrl:"planet.html",controller:"planetCtrl"
    })
    .when("/starlist",{
        templateUrl:"star-list.html",controller:"starlistCtrl"
    })
    .when("/starlistitem1",{
        templateUrl:"star-list-item1.html",controller:"starlistitem1Ctrl"
    })
    .when("/starlistitem2",{
        templateUrl:"star-list-item2.html",controller:"starlistitem2Ctrl",
    })
    .when("/starlistitem3",{
        templateUrl:"star-list-item3.html",controller:"starlistitem3Ctrl"
    })
    .when("/starlistitem4",{
        templateUrl:"star-list-item4.html",controller:"starlistitem4Ctrl"
    })
    .when("/starlistitem5",{
        templateUrl:"star-list-item5.html",controller:"starlistitem5Ctrl"
    })
   
    .when("/comet",{
        templateUrl:"comet.html",controller:"cometCtrl"
    })
    .when("/star",{
        templateUrl:"star.html",controller:"starCtrl"
    })
    .when("/news",{
        templateUrl:"news.html",controller:"newsCtrl"
    })
    .when("/news1",{
        templateUrl:"news1.html",controller:"news1Ctrl"
    })
    .when("/news2",{
        templateUrl:"news2.html",controller:"news2Ctrl"
    })
    .when("/news3",{
        templateUrl:"news3.html",controller:"news3Ctrl"
    })
    .when("/news4",{
        templateUrl:"news4.html",controller:"news4Ctrl"
    })
    .when("/news5",{
        templateUrl:"news5.html",controller:"news5Ctrl"
    })
    .when("/observatories",{
        templateUrl:"observatories.html",controller:"observatoriesCtrl"
    })
.when("/gallery",{
    templateUrl:"gallery.html",controller:"galleryCtrl"
})
.when("/sitemap",{
    templateUrl:"sitemap.html"
})
.when("/about-us",{
    templateUrl:"about-us.html",controller:"aboutusCtrl"
})
.when("/contact-us",{
    templateUrl:"contact-us.html",controller:"contactusCtrl"
})

}]);



angular.module("homedefault", [])
    .controller("homedefaultCtrl", ['$scope','$http', function($scope,$http){
         //Lập trình
        $http.get("assets/json/homedefault.json")
        .then(function(response){
            var data = response.data;
            $scope.dataList = data;
            console.log($scope.dataList);
        });
    }]);

    angular.module("planet", [])
    .controller("planetCtrl", ['$scope','$http', function($scope,$http){
         //Lập trình
         $http.get("assets/json/planet.json")
         .then(function(response){
             var data = response.data;
             $scope.dataList = data;
             console.log($scope.dataList);
         });
         const $ = document.querySelector.bind(document);
         const $$ = document.querySelectorAll.bind(document);
         
         const tabs = $$('.tab-item');
         const panes = $$('.tab-pane');
         
         const tabActive = $('.tab-item.active-tab');
         const line = $('.tabs .line')
         
         console.log(line);
         tabs.forEach((tab, index) => {
            const pane = panes[index];
        
            tab.onclick = function () {
                $('.tab-item.active-tab').classList.remove('active-tab');  
                $('.tab-pane.active-tab').classList.remove('active-tab');  
        
                line.style.left = tab.offsetLeft + 'px';
                line.style.width = tab.offsetWidth + 'px';
        
                this.classList.add('active-tab');
                pane.classList.add('active-tab');
            }
        })
     }]);
    

     angular.module("starlist", [])
     .controller("starlistCtrl", ['$scope','$http', function($scope,$http){
          //Lập trình
          $http.get("assets/json/starlist.json")
         .then(function(response){
             var data = response.data;
             $scope.dataList = data;
             console.log($scope.dataList);
         });
        }]);

        angular.module("starlistitem1", [])
     .controller("starlistitem1Ctrl", ['$scope','$http', function($scope,$http){
          //Lập trình
          $http.get("assets/json/starlistitem1.json")
         .then(function(response){
             var data = response.data;
             $scope.dataList = data;
             console.log($scope.dataList);
         });
        }]);

        angular.module("starlistitem2", [])
        .controller("starlistitem2Ctrl", ['$scope','$http', function($scope,$http){
             //Lập trình
             $http.get("assets/json/starlistitem2.json")
            .then(function(response){
                var data = response.data;
                $scope.dataList = data;
                console.log($scope.dataList);
            });
           }]);
           angular.module("starlistitem3", [])
        .controller("starlistitem3Ctrl", ['$scope','$http', function($scope,$http){
             //Lập trình
             $http.get("assets/json/starlistitem2.json")
            .then(function(response){
                var data = response.data;
                $scope.dataList = data;
                console.log($scope.dataList);
            });
           }]);
           angular.module("starlistitem4", [])
        .controller("starlistitem4Ctrl", ['$scope','$http', function($scope,$http){
             //Lập trình
             $http.get("assets/json/starlistitem4.json")
            .then(function(response){
                var data = response.data;
                $scope.dataList = data;
                console.log($scope.dataList);
            });
           }]);

           angular.module("starlistitem5", [])
        .controller("starlistitem5Ctrl", ['$scope','$http', function($scope,$http){
             //Lập trình
             $http.get("assets/json/starlistitem5.json")
            .then(function(response){
                var data = response.data;
                $scope.dataList = data;
                console.log($scope.dataList);
            });
           }]);

           angular.module("news", [])
           .controller("newsCtrl", ['$scope','$http', function($scope,$http){
                //Lập trình
                $http.get("assets/json/news.json")
               .then(function(response){
                   var data = response.data;
                   $scope.dataList = data;
                   console.log($scope.dataList);
               });
              }]);

              angular.module("news1", [])
           .controller("news1Ctrl", ['$scope','$http', function($scope,$http){
                //Lập trình
                $http.get("assets/json/news1.json")
               .then(function(response){
                   var data = response.data;
                   $scope.dataList = data;
                   console.log($scope.dataList);
               });
              }]);
              angular.module("news2", [])
              .controller("news2Ctrl", ['$scope','$http', function($scope,$http){
                   //Lập trình
                   $http.get("assets/json/news2.json")
                  .then(function(response){
                      var data = response.data;
                      $scope.dataList = data;
                      console.log($scope.dataList);
                  });
                 }]);

                 angular.module("news3", [])
                 .controller("news3Ctrl", ['$scope','$http', function($scope,$http){
                      //Lập trình
                      $http.get("assets/json/news3.json")
                     .then(function(response){
                         var data = response.data;
                         $scope.dataList = data;
                         console.log($scope.dataList);
                     });
                    }]);

                    angular.module("news4", [])
                    .controller("news4Ctrl", ['$scope','$http', function($scope,$http){
                         //Lập trình
                         $http.get("assets/json/news4.json")
                        .then(function(response){
                            var data = response.data;
                            $scope.dataList = data;
                            console.log($scope.dataList);
                        });
                       }]);



              angular.module("news5", [])
           .controller("news5Ctrl", ['$scope','$http', function($scope,$http){
                //Lập trình
                $http.get("assets/json/news5.json")
               .then(function(response){
                   var data = response.data;
                   $scope.dataList = data;
                   console.log($scope.dataList);
               });
              }]);

              angular.module("observatories", [])
              .controller("observatoriesCtrl", ['$scope','$http', function($scope,$http){
                   //Lập trình
                   $http.get("assets/json/observatories.json")
                  .then(function(response){
                      var data = response.data;
                      $scope.dataList = data;
                      console.log($scope.dataList);
                  });
                 }]);
   
                 angular.module("comet", [])
                 .controller("cometCtrl", ['$scope','$http', function($scope,$http){
                      //Lập trình
                      $http.get("assets/json/comet.json")
                     .then(function(response){
                         var data = response.data;
                         $scope.dataList = data;
                         console.log($scope.dataList);
                     });
                    }]);

angular.module("gallery", [])
    .controller("galleryCtrl", ['$scope','$http',function($scope,$http){
        //Lập trình
        
        $http.get("assets/json/gallery.json")
        .then(function(response){
            $scope.galleryList = response.data;
            console.log(response.data);
        },
        function (err) {
                    $scope.galleryList = "Request JSON failed.";
        });

    }]);
    
    angular.module("star", [])
    .controller("starCtrl", ['$scope','$http', function($scope,$http){
         //Lập trình
         $http.get("assets/json/star.json")
        .then(function(response){
            var data = response.data;
            $scope.dataList = data;
            console.log($scope.dataList);
        });
       }]);

       angular.module("aboutus", [])
       .controller("aboutusCtrl", ['$scope','$http', function($scope,$http){
            //Lập trình
            $http.get("assets/json/aboutus.json")
           .then(function(response){
               var data = response.data;
               $scope.dataList = data;
               console.log($scope.dataList);
           });
          }]);

          angular.module("contactus", [])
          .controller("contactusCtrl", ['$scope','$http', function($scope,$http){
               //Lập trình
               $http.get("assets/json/contactus.json")
              .then(function(response){
                  var data = response.data;
                  $scope.dataList = data;
                  console.log($scope.dataList);
              });
             }]);


             angular.module("menu", [])
.controller("MainCtrl",['$scope','$location','$route',function($scope, $location,$route) {
    $scope.activePath = null;
    $scope.$on('$routeChangeSuccess', function(){
        $scope.activePath = $location.path();
        console.log($location.path() );
    })
}]);