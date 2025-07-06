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
            link: "https://open.spotify.com/intl-pt/album/41Dl68Kik63nV6zvn07NgY?si=-s4uVXulTPWjeSkez4AMcw",
            capa: "Jarre.png"
        },
        {   nome: "The Human League - Reproduction",
            ano: 1979, 
            link: "https://open.spotify.com/intl-pt/album/7tc1nTdBA717D74uJ07VRn?si=XY5GHfFqS1OtRB5-GEUbqA",
            capa: "HumanLeague.png"
        },
        {   nome: "Suicide",
            ano: 1977,
            link: "https://open.spotify.com/intl-pt/album/7lHdDQ8qsbcNWkEYtcIiHF?si=NsHLxh1aRyyUGEImftV0pA",
            capa: "Suicide.png"
        },
        {   nome: "New Order - Technique",
            ano: 1989,
            link: "https://open.spotify.com/intl-pt/album/6HQo3byKYGsHxOqofRmgCh?si=vaxi84XLSua1sSM82Os4WA",
            capa: "NewOrder.png"
        },
        {   nome: "Depeche Mode - Violator",
            ano: 1990,
            link: "https://open.spotify.com/intl-pt/album/0Tg76MY2wNK4j37iCb6qyH?si=rnEj22K4SISP4BcW77iGuA",
            capa: "Depeche.png"
        },
        {   nome: "Air - Premiere Symptomes",
            ano: 1999,
            link: "https://open.spotify.com/intl-pt/album/3g9O7pvuaaFRvdzsoSJXVc?si=kDEsk5jDRVOflnyPulHNdQ",
            capa: "Air.png"
        },
        {   nome: "James Blake",
            ano: 2011,
            link: "https://open.spotify.com/intl-pt/album/0qY6lBQSi8IMJjHYDPdAqX?si=sZyqQQ-ZQBSor36mm6gPgw",
            capa: "Blake.png"
        },
        {   nome: "State Azure - Phantoms",
            ano: 2016,
            link: "https://open.spotify.com/intl-pt/album/76d3Xese7hgiRV5XqnS440?si=LjWf1yzDTRSz15H2DQyLJg",
            capa: "StateAzure.png"
        },
        {   nome: "[Ambrosia] - Compilation",
            ano: 2016,
            link: "https://open.spotify.com/intl-pt/album/4y4qj7UpeH7wMEqHmDqzIa?si=aMwBC1XWSz-Hg7VWthCHZw",
            capa: "Ambrosia.png"
        }
    ]

})