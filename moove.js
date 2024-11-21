;
;
;
var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, ID, libero) {
        this.tipo = tipo;
        this.ID = ID;
        this.libero = libero;
    }
    ;
    Mezzo.prototype.assegnaUtente = function (utente) {
        this.utente = utente;
        this.libero = false;
    };
    ;
    return Mezzo;
}());
;
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, mail, pagamento) {
        this.nome = nome;
        this.congome = cognome;
        this.mail = mail;
        this.pagamento = pagamento;
    }
    ;
    Utente.prototype.prenotaMezzo = function (mezzo) {
        if (this.mezzo) {
            this.mezzo = mezzo;
            mezzo.assegnaUtente(this);
        }
        else {
            console.log('il mezzo è attualmente prenotato');
        }
        ;
    };
    ;
    return Utente;
}());
;
var Citta = /** @class */ (function () {
    function Citta(nome, mezzi) {
        this.nome = nome;
        this.mezzi = mezzi;
    }
    ;
    Citta.prototype.aggiungiMezzo = function (nuovoMezzo) {
        this.mezzi.push(nuovoMezzo);
    };
    ;
    return Citta;
}());
;
// CREAZIONE ISTANZE
var bici = new Mezzo('bicicletta', 'B798903', true);
var monopattino = new Mezzo('monopattino', 'M245636', true);
var scooter = new Mezzo('scooter', 'S043876', true);
var utente1 = new Utente('Mario', 'Rossi', 'rossimario@gmail.com', 'PayPal');
var utente2 = new Utente('Giuseppe', 'Verdi', 'verdigiuseppe@gmail.com', 'PayPal');
var utente3 = new Utente('Alessandro', 'Manzoni', 'manzonialessandro@gmail.com', 'PayPal');
var Milano = new Citta('Mikano', ['B798903', 'M245636', 'S043876']);
// PROVA METODI 
bici.assegnaUtente(utente1);
monopattino.assegnaUtente(utente2);
scooter.assegnaUtente(utente3);
Milano.aggiungiMezzo('B888763');
