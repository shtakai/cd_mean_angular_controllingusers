console.log('start');

let myApp = angular.module('myApp',[]);
function User(firstName, lastName, language){
  this.firstName = firstName;
  this.lastName = lastName;
  this.language = language;
  this.createdAt = Date.now();
}

myApp.controller('usersController', [
  '$scope',
  function($scope){

  console.log('start controller');
  $scope.firstName = '';
  $scope.lastName = '';
  $scope.language = '';
  $scope.userList = [];

  $scope.createUser = function(){
    console.log('create user clicked');
    let user = new User(
      $scope.firstName,
      $scope.language,
      $scope.language
    );
    $scope.userList.unshift(user);
    console.log(`user added ${user.createdAt}, on list ${$scope.userList}`);
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.language = '';
  }

  $scope.delete = function (user){
    console.log('delete start', user);
    _.remove($scope.userList, function(u){
       return u == user;
    });
    console.log('deleted');
  }


}]);
