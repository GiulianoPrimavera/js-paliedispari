//chiedi all'untente di scegliere tra pari dispari
let pariDispari; 
console.log(pariDispari);

while(pariDispari === undefined){

    pariDispari = prompt("scegli pari o dispari?")

    if(pariDispari.toLowerCase() === "pari"){
        alert("hai scelto pari");
        console.log("hai scelto pari");

    }else if(pariDispari.toLowerCase() === "dispari"){
        alert("hai scelto dispari");
        console.log("hai scelto dispari");
    } else{
        alert("devi scegliere o pari o dispari");
        pariDispari = undefined;
    }
}
console.log(pariDispari);


//chiedi all'utente di inserire un numero tra 1 e 5
let numeroDellUtente = parseInt(prompt("scegli un numero tra 1 e 5"));
console.log(numeroDellUtente);
//chiedi allutente di inserire un numero finché non è reimpit



//il computer genera un numero randomtra 1 e 5

//sommiamo i due numeri

//stabiliamo se la somma dei due numeri è pari o dispari

//dichiariamo se l'utente a vinto o no (se ha perso, vuol dire che ha vinto il computer)