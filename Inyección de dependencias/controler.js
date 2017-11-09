var app =angular.module("MyFirstApp",[])
app.controller("FirstController", ["$scope", "$http",
    function (m) {
    m.nombre="Irving";
    $nuevoComentario = {};
    m.comentarios =[
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
    m.agregarComentario = function () {
        //agregamos el nuevo comentario 
        m.comentarios.push(m.nuevoComentario);
        m.nuevoComentario = {};        
    };
    
}]);