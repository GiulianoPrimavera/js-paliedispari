//chiedo all'utente di inserire una parola che poi salvo in una variabile
const parolaInserita = prompt("inserisci una parola a tua scelta");

function isPalindroma(parola){
    //uso la funzione split per dividere la parola in lettere che vengono inserite in un array (in questo caso chiamato "spezzettaLaStringa")
    let spezzettaLaStringa = parola.split("");
    console.log(spezzettaLaStringa);
    

}

isPalindroma(parolaInserita);