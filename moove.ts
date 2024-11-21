interface IMezzo {
    tipo: string;
    ID: string;
    stato: 'disponibile' | 'in uso'; 
    utente?: IUtente;

    assegnaUtente(utente: IUtente): void;
}

interface IUtente {
    nome: string;
    cognome: string;
    email: string; 
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
    stato: 'disponibile' | 'in uso'; 
    utente?: IUtente;

    constructor(tipo: string, ID: string, stato: 'disponibile' | 'in uso') {
        this.tipo = tipo;
        this.ID = ID;
        this.stato = stato; 
    }

    assegnaUtente(utente: IUtente) {
        if (this.stato === 'disponibile') { 
            this.utente = utente;
            this.stato = 'in uso'; 
        } else {
            console.log('Il mezzo è già prenotato.');
        }
    }
}

class Utente implements IUtente {
    nome: string;
    cognome: string;
    email: string; 
    pagamento: string;
    mezzo?: IMezzo;

    constructor(nome: string, cognome: string, email: string, pagamento: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.pagamento = pagamento;
    }

    prenotaMezzo(mezzo: IMezzo): void {
        if (mezzo.stato === 'disponibile') { 
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

let bici = new Mezzo('bicicletta', 'B798903', 'disponibile');
let monopattino = new Mezzo('monopattino', 'M245636', 'disponibile');
let scooter = new Mezzo('scooter', 'S043876', 'disponibile');

let utente1 = new Utente('Mario', 'Rossi', 'rossimario@gmail.com', 'PayPal');
let utente2 = new Utente('Giuseppe', 'Verdi', 'verdigiuseppe@gmail.com', 'PayPal');
let utente3 = new Utente('Alessandro', 'Manzoni', 'manzonialessandro@gmail.com', 'PayPal');

let Milano = new Citta('Milano', [bici, monopattino, scooter]);

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
let nuovaBici = new Mezzo('bicicletta', 'B888763', 'disponibile');
Milano.aggiungiMezzo(nuovaBici);
console.log('Stato dei mezzi dopo l\'aggiunta:');
console.log(Milano.mezzi);

console.log('--- Fine del Test ---');