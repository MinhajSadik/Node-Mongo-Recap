const express = require('express');

const app = express();


app.listen(545, () => console.log('Server ON Port:545'));


app.get('/', (req, res) => {
    res.send('I Know How To Run Node>');
} )




// Normal function To Write and request to server

// function rootCall(req, res) {
//     res.send('Thanks For Calling Me By: Minhaj');
// }

// arrow function to write and request to server

// const rootCall = (req, res) => {
//     res.send('Thank You ANother Port')
// }