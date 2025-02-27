const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.use((req, res, next) => {
    req.user = { name: 'John', age: 30 };
    next();
});


app.use((req, res, next) => {
    req.polconf = { title: 'Politique de confidentialité', content: 'Ceci est la page de confidentialité' };
    next();
});

app.get('Contact', (req, res) => {
    res.send('');
});



app.get('/users', (req, res) => {
    res.send(`Hello ${req.user.name}`);
});


app.get('/privacy', (req, res) => {
    res.send(`Ceci ${req.polconf.title} `);
});


app.get('/about', (req, res) => {
    res.send('A propos de nous');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
