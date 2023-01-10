const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('hellooooo bitches');
});

app.post('/', (req, res) =>{
    res.send("POST request");
});

app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});