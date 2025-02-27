import readlineSync from 'readline-sync';

let cartes = [1, 2, 3, 4, 1, 2, 3, 4];
let trouvées = [false, false, false, false, false, false, false, false];
//let vies = 5;
console.log("Bienvenue dans le Memory ! Trouvez les paires.");
console.log("Vous avez 5 vies pour trouver toutes les paires.");


/*
function affichervies() {
    let(i = 0; i < vies; i++) {
        console.log("Vies restantes : " + vies);
    }
}
    */

function afficherCartes() {
    let affichage = "";
    for (let i = 0; i < cartes.length; i++) {
        if (trouvées[i]) {
            affichage += cartes[i] + " ";
        } else {
            affichage += "* ";
        }
    }
    console.log("Cartes : " + affichage);
}

function choisirCarte() {
    let choix;
    while (true) {
        choix = parseInt(readlineSync.question("Choisissez une carte (0-7) : "));
        if (!isNaN(choix) && choix >= 0 && choix <= 7 && !trouvées[choix]) {
            return choix;
        }
        console.log("Choix invalide, donnez un chiffre entre 0 et 7.");
    }
}

function jouer() {
    while (!trouvées.every(val => val)) {
        afficherCartes();
        let c1 = choisirCarte();
        let c2 = choisirCarte();

        console.log(`Cartes choisies : ${cartes[c1]} et ${cartes[c2]}`);

        if (cartes[c1] === cartes[c2]) {
            console.log("Bravo ! Paire trouvée !");
            trouvées[c1] = trouvées[c2] = true;
        } else {
            console.log("Pas de paire !");
        }
    }
    console.log(" Félicitations ! Toutes les paires sont trouvées ! ");
}

if (vies === 0) {
    console.log("Vous avez perdu !");
}


jouer();
