# Moove - Micro Mobilità Condivisa

## Introduzione

Moove è un'applicazione di micro mobilità condivisa che offre biciclette, scooter e monopattini elettrici in diverse città europee. Questo progetto, sviluppato in TypeScript, mira a fornire una soluzione flessibile, conveniente e rispettosa dell'ambiente per gli spostamenti urbani.

## Funzionalità Principali

- **Prenotazione Mezzi**: Gli utenti possono prenotare un mezzo disponibile tramite l'app.
- **Gestione dei Mezzi**: L'app tiene traccia dello stato dei mezzi (disponibile, in uso) e delle loro assegnazioni agli utenti.
- **Gestione delle Città**: L'app gestisce i mezzi disponibili in varie città e permette l'aggiunta di nuovi mezzi.

## Struttura del Progetto

### Interfacce

- **IMezzo**: Rappresenta i mezzi di trasporto con proprietà come tipo, ID univoco e stato (disponibile, in uso).
  ```typescript
  interface IMezzo {
      tipo: string;
      ID: string;
      stato: 'disponibile' | 'in uso';
      utente?: IUtente;
      assegnaUtente(utente: IUtente): void;
  }
  ```

- **IUtente**: Rappresenta gli utenti del servizio con proprietà come nome, cognome, email e metodo di pagamento.
  ```typescript
  interface IUtente { 
    nome: string; 
    cognome: string; 
    email: string; 
    pagamento: string; 
    mezzo?: IMezzo; 
    prenotaMezzo(mezzo: IMezzo): void; }
  ```

- **ICittà**: Rappresenta le città in cui Moove opera con proprietà come nome della città e elenco dei mezzi disponibili.
  ```typescript
  interface ICitta { 
    nome: string; 
    mezzi: IMezzo[]; 
    aggiungiMezzo(nuovoMezzo: IMezzo): void; }
  ```

### Classi 

- **Mezzo**: Implementa l'interfaccia IMezzo e gestisce le informazioni dei mezzi e l'assegnazione agli utenti.
```typescript
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
  ```

- **Utente**: Implementa l'interfaccia IUtente e gestisce le informazioni degli utenti e la loro capacità di prenotare mezzi.
```typescript
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
```

- **Città**: Implementa l'interfaccia ICitta e rappresenta una città specifica in cui Moove opera, gestendo i mezzi disponibili e l'aggiunta di nuovi mezzi.
```typescript
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
```

## Esecuzione del progetto

Assicurati di averre typescript insyallato
```
npm install -g typescript
```

Compila il file moove.ts:
```
tsc moove.ts
```

Esegui il file moove.js generato con Node.js:
```
node moove.js
```

## Test delle funzionalità

Esegui il codice di test fornito per verificare il corretto funzionamento delle principali funzionalità del progetto. Il test creerà istanze di mezzi, utenti e città, eseguirà prenotazioni e aggiungerà nuovi mezzi, mostrando i risultati nella console.

## Link utili

[Codepen](https://codepen.io/Ale-Doa/pen/KKOjLrx?editors=1112) per provare il codice.