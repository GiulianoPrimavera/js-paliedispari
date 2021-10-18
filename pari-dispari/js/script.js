//chiedi all'untente di scegliere tra pari dispari
let inserisciPariODispari; 
console.log(inserisciPariODispari);

//chiedi all'utente di scegliere tra pari o dispari finché non sceglie o pari o dispari
while(inserisciPariODispari === undefined){

    inserisciPariODispari = prompt("scegli pari o dispari?")

    if(inserisciPariODispari.toLowerCase() === "pari"){
        alert("hai scelto pari");
        console.log("hai scelto pari");

    }else if(inserisciPariODispari.toLowerCase() === "dispari"){
        alert("hai scelto dispari");
        console.log("hai scelto dispari");
    } else{
        alert("devi scegliere o pari o dispari");
        inserisciPariODispari = undefined;
    }
}
console.log(inserisciPariODispari);


//chiedi all'utente di inserire un numero tra 1 e 5
let numeroDellUtente;
console.log(numeroDellUtente);

//chiedi allutente di inserire un numero finché non è compreso tra 1 e 5
while(numeroDellUtente === undefined || isNaN(numeroDellUtente)){

    numeroDellUtente = parseInt(prompt("scegli un numero compreso tra 1 e 5"));

    if(numeroDellUtente < 1 || numeroDellUtente > 5){
        alert("devi scegliere un numero che sia per forza compreso tra 1 e 5");
        numeroDellUtente = undefined;
    }else{
        alert("hai scelto " + numeroDellUtente);
        console.log("hai scelto ", numeroDellUtente);
    } 
}

//il computer genera un numero randomtra 1 e 5
const numeroDelComputer = Math.ceil(Math.random()* 5)
console.log("numero del computer ", numeroDelComputer);

//sommiamo i due numeri
const sommaDeiDueNumeri = numeroDellUtente + numeroDelComputer;

//stabiliamo se la somma dei due numeri è pari o dispari
function getPariDispari()){

}

//dichiariamo se l'utente a vinto o no (se ha perso, vuol dire che ha vinto il computer)