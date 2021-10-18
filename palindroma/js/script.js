//chiedo all'utente di inserire una parola che poi salvo in una variabile
const parolaInserita = prompt("inserisci una parola a tua scelta");
console.log("la parola inserita è ", parolaInserita);

function isPalindroma(parola){
    //uso la funzione split per dividere la parola in lettere che vengono inserite in un array (in questo caso chiamato "spezzettaLaStringa")
    let spezzettaLaStringa = parola.split("");
    console.log("la parola in array è ", spezzettaLaStringa);
    
    //inverto l'ordine degli elementi all'interno dell'array appena creato
    let invertoLArray = spezzettaLaStringa.reverse();
    console.log("l'array invertito è ", invertoLArray);
    
    //collego gli elementi dell'array che ora è invertito in una nuova "parola"
    let parolaInvertita = spezzettaLaStringa.join("");
    console.log("la parola invertita è ", parolaInvertita);

    if(parola === parolaInvertita){
        alert("questa parola è palindroma");
        console.log("questa parola è palindroma");
    }else{
        alert("questa parola non è palindroma");
        console.log("questa parola non è palindroma");
    }
}

isPalindroma(parolaInserita);