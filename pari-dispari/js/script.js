//chiedi all'untente di scegliere tra pari dispari
const pariDispari = prompt("scegli pari o dispari?");

if (pariDispari.toLocaleLowerCase() === "pari"){
    alert("hai scelto pari");
    console.log("hai scelto pari");
} else if(pariDispari.toLocaleLowerCase() === "dispari"){
   alert("hai scelto dispari");
   console.log("hai scelto dispari");
} else{
    alert("puoi scegliere solo tra pari e dispari");
    console.log("puoi scegliere solo tra pari e dispari");
}

//chiedi all'utente di inserire un numero tra 1 e 5
const numeroDellUtente = parseInt(prompt("scegli un numero tra 1 e 5"));




//il computer genera un numero randomtra 1 e 5

//sommiamo i due numeri

//stabiliamo se la somma dei due numeri è pari o dispari

//dichiariamo se l'utente a vinto o no (se ha perso, vuol dire che ha vinto il computer)