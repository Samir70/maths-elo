const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.post('/update-rating', (req, res) => {
    console.log('something was posted', req.body);
    res.send('received new data');
    let data = JSON.stringify(req.body, null, 2);
    fs.writeFile('QRatings.json', data, (err) => {
        if (err) {console.log('error: ', err)}
    })
})

app.listen(3001);
