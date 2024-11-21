var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, ID, stato) {
        this.tipo = tipo;
        this.ID = ID;
        this.stato = stato;
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        if (this.stato === 'disponibile') {
            this.utente = utente;
            this.stato = 'in uso';
        }
        else {
            console.log('Il mezzo è già prenotato.');
        }
    };
    return Mezzo;
}());
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, email, pagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.pagamento = pagamento;
    }
    Utente.prototype.prenotaMezzo = function (mezzo) {
        if (mezzo.stato === 'disponibile') {
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
var bici = new Mezzo('bicicletta', 'B798903', 'disponibile');
var monopattino = new Mezzo('monopattino', 'M245636', 'disponibile');
var scooter = new Mezzo('scooter', 'S043876', 'disponibile');
var utente1 = new Utente('Mario', 'Rossi', 'rossimario@gmail.com', 'PayPal');
var utente2 = new Utente('Giuseppe', 'Verdi', 'verdigiuseppe@gmail.com', 'PayPal');
var utente3 = new Utente('Alessandro', 'Manzoni', 'manzonialessandro@gmail.com', 'PayPal');
var Milano = new Citta('Milano', [bici, monopattino, scooter]);
// PROVA METODI 
console.log('--- Inizio del Test ---');
console.log('Stato iniziale dei mezzi:');
console.log(Milano.mezzi);
console.log('\nUtente 1 prenota la bici:');
utente1.prenotaMezzo(bici);
console.log('Bici assegnata a:', bici.utente);
console.log('Stato della bici:', bici.stato);
console.log('\nUtente 2 tenta di prenotare la bici già prenotata:');
utente2.prenotaMezzo(bici);
console.log('\nUtente 2 prenota il monopattino:');
utente2.prenotaMezzo(monopattino);
console.log('Monopattino assegnato a:', monopattino.utente);
console.log('Stato del monopattino:', monopattino.stato);
console.log('\nAggiunta di un nuovo mezzo (bicicletta) a Milano:');
var nuovaBici = new Mezzo('bicicletta', 'B888763', 'disponibile');
Milano.aggiungiMezzo(nuovaBici);
console.log('Stato dei mezzi dopo l\'aggiunta:');
console.log(Milano.mezzi);
console.log('--- Fine del Test ---');
