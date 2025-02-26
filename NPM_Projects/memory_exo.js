const readlineSync = require('readline-sync');

let cartes = [1, 2, 3, 4, 1, 2, 3, 4];

console.log("Bienvene dans le jeu de memory!");
console.log("Cartes disponibles: ", cartes);

let premiereCarte = null; // => premiere carte choisie par l'utilisateur

function jouer() {

    let i = readlineSync.question("Entrez un numéro de carte (0-7): ");

    if (i < 0 || i >= cartes.length) {
        console.log("Carte Invalide. Choisissez un nombre entre 0 et 7");
        return jouer();
    }

    console.log("Retornez une carte" + i + ": " + cartes[i]);
}

if (premiereCarte === null) {
    premiereCarte = i;
    console.log("Chosissez une autre carte");
    return jouer();
} else {
    if (cartes[premiereCarte] === cartes[i]) {
        console.log("Bravo! Vous avez trouvé une paire!");
        cartes[premiereCarte] = null;
        cartes[i] = null;
    } else {
        console.log("Dommage! Les cartes ne correspondent pas");
    }
    premiereCarte = null;
}
