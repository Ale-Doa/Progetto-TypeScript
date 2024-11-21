interface IMezzo {
    tipo: string;
    ID: string;
    libero: boolean;
    utente?: IUtente;

    assegnaUtente(utente: IUtente): void;
}

interface IUtente {
    nome: string;
    cognome: string;
    mail: string;
    pagamento: string;
    mezzo?: IMezzo;

    prenotaMezzo(mezzo: IMezzo): void;
}

interface ICitta {
    nome: string;
    mezzi: IMezzo[];

    aggiungiMezzo(nuovoMezzo: IMezzo): void;
}

class Mezzo implements IMezzo {
    tipo: string;
    ID: string;
    libero: boolean;
    utente?: IUtente;

    constructor(tipo: string, ID: string, libero: boolean) {
        this.tipo = tipo;
        this.ID = ID;
        this.libero = libero;
    }

    assegnaUtente(utente: IUtente) {
        if (this.libero) {
            this.utente = utente;
            this.libero = false;
        } else {
            console.log('Il mezzo è già prenotato.');
        }
    }
}

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
    }

    prenotaMezzo(mezzo: IMezzo): void {
        if (mezzo.libero) {
            this.mezzo = mezzo;
            mezzo.assegnaUtente(this);
        } else {
            console.log('Il mezzo è attualmente prenotato.');
        }
    }
}

class Citta implements ICitta {
    nome: string;
    mezzi: IMezzo[];

    constructor(nome: string, mezzi: IMezzo[]) {
        this.nome = nome;
        this.mezzi = mezzi;
    }

    aggiungiMezzo(nuovoMezzo: IMezzo): void {
        this.mezzi.push(nuovoMezzo);
    }
}

// CREAZIONE ISTANZE

let bici = new Mezzo('bicicletta', 'B798903', true);
let monopattino = new Mezzo('monopattino', 'M245636', true);
let scooter = new Mezzo('scooter', 'S043876', true);

let utente1 = new Utente('Mario', 'Rossi', 'rossimario@gmail.com', 'PayPal');
let utente2 = new Utente('Giuseppe', 'Verdi', 'verdigiuseppe@gmail.com', 'PayPal');
let utente3 = new Utente('Alessandro', 'Manzoni', 'manzonialessandro@gmail.com', 'PayPal');

let Milano = new Citta('Milano', [bici, monopattino, scooter]);

// PROVA METODI 

utente1.prenotaMezzo(bici);
utente2.prenotaMezzo(monopattino);
utente3.prenotaMezzo(scooter);

Milano.aggiungiMezzo(new Mezzo('bicicletta', 'B888763', true));
