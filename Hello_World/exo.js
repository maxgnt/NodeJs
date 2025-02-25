// Exo 1
function somme(a, b) {
    return a + b;
}

// Exo 2 
function findMaxnumber(tableau) {
    let max = tableau[0];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }

    }
    return max;
}


// Exo 3

function remplacerChaine(chaine) {
    return chaine.replace('a,e,i,o,u,y', 'A,E,I,O,U,Y');
}

//Exo 4 

function trierTableau(tableau) {
    return tableau.sort()
}

//Exo 5

function transformerChiffreChaine(nombre) {
    let unité = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
    let dizaine = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
    let aine = ["", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];

    if (nombre === 0) {
        return "zéro";
    }
    if (nombre < 10) {
        return unité[nombre];
    }

    if (nombre < 20) {
        return aine[nombre
}


    //Exo 6



    //Exo 7

    function trierOrdreDecroissant(tableau) {
        return tableau.sort((a, b) => b - a);
    }
    //Exo 8

    function ecrireVoyelleMajuscule(chaine) {
        return chaine.replace("a", "e", "i", "o", "u", "y") => toUpperCase();

    }