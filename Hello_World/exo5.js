function transformerChiffreChaine(nombre) {
    let unité = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
    let dizaine = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
    let aine = ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];

    if (nombre === 0) {
        return "zéro";
    }
    if (nombre < 10) {
        return unité[nombre];
    }

    if (nombre < 20) {
        return aine[nombre - 10];
    }


}

console.log(transformerChiffreChaine(96));