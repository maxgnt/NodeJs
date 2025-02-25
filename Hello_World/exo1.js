function finMaxnumber(tableau) {
    let max = tableau[0];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }
}
console.log{ finMaxnumber([1, 2, 3, 4, 5]) };
