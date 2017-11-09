var app =angular.module("MyFirstApp",[])
app.controller("FirstController", ["$scope","$http",
    function ($scope, $http) {
        $scope.posts = [];
        $http.get("https://jsonplaceholder.typicode.com/posts")
        .then(function (data) {
            console.log(data);
            $scope.posts = data.data; 
        },
        function(error) {
            
        })
    
    }]);