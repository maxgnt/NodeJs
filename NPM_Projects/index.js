// Exemple 1: Module global
console.log("Hello Node.js!");

// Variables globales
console.log(__filename); // Chemin complet du fichier
console.log(__dirname);  // Chemin du répertoire

// Exemple 2: Module HTTP (serveur simple)
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});


server.listen(3000, '127.0.0.1', () => {
    console.log('Serveur en écoute sur http://127.0.0.1:3000/');
});

// Exemple 3: Module FS (système de fichiers)
const fs = require('fs');

// Synchrone (bloquant)
try {
    const data = fs.readFileSync('fichier.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error('Erreur de lecture:', err);
}

// Asynchrone (non-bloquant)
fs.readFile('fichier.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur de lecture:', err);
        return;
    }
    console.log(data);
});

// Version avec promesses
fs.promises.readFile('fichier.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error('Erreur:', err));

// Version async/await
async function lireFichier() {
    try {
        const data = await fs.promises.readFile('fichier.txt', 'utf8');
        console.log('Lecture async/await:', data);
    }
    catch (err) {
        console.error('Erreur async/await:', err);
    }
}
lireFichier();




