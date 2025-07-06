var appEletric = angular.module('appEletric', []);

appEletric.controller('EletricController', function($scope){
    $scope.testes = ['teste1', 'teste2', 'teste3'];
    
    $scope.discos = [
        {   nome: "Kraftwerk - The Man Machine", 
            ano: 1978, 
            link: "https://open.spotify.com/intl-pt/album/3eyz60xEK5dGEeZF1JJSi9?si=Dryw6KMWSs2gezBRWo-F9A",
            capa: "ManMachine.png"
        },
        {   nome: "Jean-Michel Jarre - Equinoxe",
            ano: 1978, 
            link: "https://open.spotify.com/intl-pt/album/3eyz60xEK5dGEeZF1JJSi9?si=Dryw6KMWSs2gezBRWo-F9A",
            capa: "Jarre.png"
        }
    ]

})