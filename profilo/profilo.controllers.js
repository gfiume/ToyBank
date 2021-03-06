app.controller('ProfiloCtrl', ['$profiloService', '$appFactory', function ($profiloService, $appFactory) {
    var self = this;

    self.getProfilo = function () {
        $profiloService.profilo().then(function (result) {
            self.profilo = result.data;
            $appFactory.profilo.nome = self.profilo.nome;
            $appFactory.profilo.cognome = self.profilo.cognome;
            $appFactory.profilo.ultimoAccesso = self.profilo.ultimoAccesso;
            $appFactory.profilo.codiceFiscale = self.profilo.codiceFiscale;
            $appFactory.profilo.indirizzo = self.profilo.indirizzo;
        });
    }();
}]);