// Creer une fonction qui rend la monnaie  ; on doit pouvoir entrer n'importe quel montant et obtenir la monnaie correspondante. 
// C'est à dire le nombre de grosses pièces, billets, pieces de 1 euro, piece de 50 centimes, piece de 20 centimes, piece de 10 centimes, 
// piece de 5 centimes, piece de 2 centimes et piece de 1 centime.
// On doit pouvoir customiser les valeurs des pièces et billets rendus parametrant la fonction 


function rendreMonnaie(montant, pieces) {

    let result = {};
    pieces.sort((a, b) => b - a);

    for (let piece of pieces) {
        result[piece] = Math.floor(montant / piece);
        montant %= piece;
    }

    return result;
}

let pieces = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
let montant = 980.76;
let resultat = rendreMonnaie(montant, pieces);


for (let piece in resultat) {

    if (piece >= 1) {
        console.log(`${resultat[piece]} x ${piece} euros`);
    } else {

        console.log(`${resultat[piece]} x ${piece * 100} centimes`);
    }
}


// Declarer toutes les valeurs des billets et pieces
// Declarer le montant à rendre
// Creer une fonction qui prend en parametre le montant