var app = angular.module('ToyBank', ['ui.router', 'ngAnimate', 'ngTouch', 'ui.bootstrap']);

app.controller('appCtrl', ['$profiloService', '$profiloFactory', function ($profiloService, $profiloFactory) {

    var self = this;
    self.profilo = $profiloFactory;

    if (localStorage.getItem('tokenJwt') != null) {
        $profiloService.profilo().then(function (result) {
            self.profilo = result.data;
            $profiloFactory.nome = self.profilo.nome;
            $profiloFactory.cognome = self.profilo.cognome;
            $profiloFactory.dataUltimoAccesso = self.profilo.dataUltimoAccesso;
            $profiloFactory.codiceFiscale = self.profilo.codiceFiscale;
            $profiloFactory.indirizzo = self.profilo.indirizzo;

        });
    }



}]);

app.factory('$profiloFactory', function () {
    return {
        codiceFiscale: null,
        cognome: null,
        dataUltimoAccesso: null,
        indirizzo: null,
        nome: null
    };
});

app.value('baseURL', 'http://localhost:8080');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'login/login.html'
    });

    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: 'dashboard/dashboard.html'
    });

    $stateProvider.state('profilo', {
        url: '/profilo',
        templateUrl: 'profilo/profilo.html'
    });

    $stateProvider.state('movimenti', {
        url: '/movimenti',
        templateUrl: 'movimenti/movimenti.html'
    });

    $stateProvider.state('bonifico', {
        url: '/bonifico',
        templateUrl: 'bonifico/bonifico.html'
    });

}]);