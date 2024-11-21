var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, ID, libero) {
        this.tipo = tipo;
        this.ID = ID;
        this.libero = libero;
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        if (this.libero) {
            this.utente = utente;
            this.libero = false;
        }
        else {
            console.log('Il mezzo è già prenotato.');
        }
    };
    return Mezzo;
}());
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, mail, pagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.mail = mail;
        this.pagamento = pagamento;
    }
    Utente.prototype.prenotaMezzo = function (mezzo) {
        if (mezzo.libero) {
            this.mezzo = mezzo;
            mezzo.assegnaUtente(this);
        }
        else {
            console.log('Il mezzo è attualmente prenotato.');
        }
    };
    return Utente;
}());
var Citta = /** @class */ (function () {
    function Citta(nome, mezzi) {
        this.nome = nome;
        this.mezzi = mezzi;
    }
    Citta.prototype.aggiungiMezzo = function (nuovoMezzo) {
        this.mezzi.push(nuovoMezzo);
    };
    return Citta;
}());
// CREAZIONE ISTANZE
var bici = new Mezzo('bicicletta', 'B798903', true);
var monopattino = new Mezzo('monopattino', 'M245636', true);
var scooter = new Mezzo('scooter', 'S043876', true);
var utente1 = new Utente('Mario', 'Rossi', 'rossimario@gmail.com', 'PayPal');
var utente2 = new Utente('Giuseppe', 'Verdi', 'verdigiuseppe@gmail.com', 'PayPal');
var utente3 = new Utente('Alessandro', 'Manzoni', 'manzonialessandro@gmail.com', 'PayPal');
var Milano = new Citta('Milano', [bici, monopattino, scooter]);
// PROVA METODI 
utente1.prenotaMezzo(bici);
utente2.prenotaMezzo(monopattino);
utente3.prenotaMezzo(scooter);
Milano.aggiungiMezzo(new Mezzo('bicicletta', 'B888763', true));
