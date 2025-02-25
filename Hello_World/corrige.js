//Exo1

function sum(a, b) {
    return a + b;
}

const result = sum(1, 2);
console.log(result);

//Exo2

function finMaxnumber(arr) {
    return Math.max(...arr);
}


//Exo3

function retireVoyelles(chaine) {
    let result = "";
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let i = 0; i < voyelles.length; i++) {
        const element = chaine[i];
        const estVoyelle = voyelles.includes(element);
        if (estVoyelle) {
            result += element;
        }
    }
    return result;
}

//Exo 4
const trierTableau = (arr) => {
    return arr.sort();
}

// pour gerer la casse on peut utiliser toLowerCase() ou toUpperCase()
// on peut utiliser localeCompare() pour comparer les chaines de caractères

//Exo 5

export function numberToWords(n) {
    const numbers = [
        ...
    ];

    const tens = [...

    ];
    if (n < 20) {
        return numbers[n];
    }
}

