webApp.controller('TemplateListController', function($scope, $http){

$scope.templates = {}

//Template Manipulation Controllers
$http.get('/api/templates')
        .success(function(data) {
            $scope.templates = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

//Add a template
  $scope.add = function(){

    // $scope.templates.push(
    //   {
    //     name: $scope.templates.name,
    //     date: date
    //   }
    // );

    $http.post('/api/templates', $scope.templates)
    .success(function(data) {
      console.table($scope.templates);
    })
    .error(function(data) {
            console.log('Error: ' + data);
        });

  };

//Remove Template
  $scope.remove = function(id){

    $http.delete('/api/templates/' + id)
    .success(function(data) {
      $scope.templates = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

  $scope.openMenu = function (menuButton){

    var menuShow = true;
  };

$scope.templateViewClass = true;
});
