var app =angular.module("MyFirstApp",[])
app.controller("FirstController", function ($scope) {
    $scope.nombre="Irving";
    $nuevoComentario = {};
    $scope.comentarios =[
        {
            comentario: "Exelente Taller",
            usuario: "Irving"
        },
        {
            comentario: "Tengo Sueño",
            usuario: "Anonymous"
        }
    ];
    //agregamos una funcion a nuestro controlador
    $scope.agregarComentario = function () {
        //agregamos el nuevo comentario 
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};        
    };
    
});