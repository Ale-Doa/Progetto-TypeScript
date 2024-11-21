interface IMezzo {
    tipo: string;
    ID: string;
    libero: boolean;
    utente?: IUtente;

    assegnaUtente(utente: IUtente): void;
};

interface IUtente {
    nome: string;
    cognome: string;
    mail: string;
    pagamento: string;
    mezzo?: IMezzo;

    prenotaMezzo(mezzo: IMezzo): void;
};

interface ICitta {
    nome: string;
    mezzi: string[];

    aggiungiMezzo(nuovoMezzo: string): void;
};

class Mezzo implements IMezzo {
    tipo: string;
    ID: string;
    libero: boolean;
    utente?: IUtente;

    constructor(tipo: string, ID: string, libero: boolean) {
        this.tipo = tipo;
        this.ID = ID;
        this.libero = libero;
    };
    assegnaUtente(utente: IUtente) {
        this.utente = utente;
        this.libero = false;
    };
};

class Utente implements IUtente {
    nome: string;
    cognome: string;
    mail: string;
    pagamento: string;
    mezzo?: IMezzo;

    constructor(nome: string, cognome: string, mail: string, pagamento: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.mail = mail;
        this.pagamento = pagamento;
    };
    prenotaMezzo(mezzo: IMezzo): void {
        if (this.mezzo) {
            this.mezzo = mezzo;
            mezzo.assegnaUtente(this);
        }else {
            console.log('il mezzo è attualmente prenotato');
        };
    };
};

class Citta implements ICitta {
    nome: string;
    mezzi: string[];

    constructor(nome: string, mezzi: string[]) {
        this.nome = nome;
        this.mezzi = mezzi;
    };
    aggiungiMezzo(nuovoMezzo: string): void {
        this.mezzi.push(nuovoMezzo);
    };
};

// CREAZIONE ISTANZE

let bici = new Mezzo('bicicletta', 'B798903', true);
let monopattino = new Mezzo('monopattino', 'M245636', true);
let scooter = new Mezzo('scooter', 'S043876', true);

let utente1 = new Utente('Mario', 'Rossi', 'rossimario@gmail.com', 'PayPal');
let utente2 = new Utente('Giuseppe', 'Verdi', 'verdigiuseppe@gmail.com', 'PayPal');
let utente3 = new Utente('Alessandro', 'Manzoni', 'manzonialessandro@gmail.com', 'PayPal');

let Milano = new Citta('Mikano', ['B798903', 'M245636', 'S043876']);

// PROVA METODI 

bici.assegnaUtente(utente1);
monopattino.assegnaUtente(utente2);
scooter.assegnaUtente(utente3);

Milano.aggiungiMezzo('B888763')