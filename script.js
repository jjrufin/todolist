var app = angular.module('ourModule', []);

app.controller('ourController', function($scope){

      $scope.taskList = [];

      $scope.addTask = function(newTask){

      console.log(newTask);

      $scope.taskList.push({ name: newTask.name });
      console.log($scope.taskList);
      }

      $scope.remove = function(task) {
      var index = $scope.taskList.indexOf(task);
      $scope.taskList.splice($scope.task, 1);
      }



});
