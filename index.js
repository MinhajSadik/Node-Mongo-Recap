const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const users = ['Minhaj', 'Anika', "Ahmed", 'Sadik', 'ikra'];
app.get('/', (req, res) => {
    res.send('I Know How To Run Node>');
})
 
app.get('/fruits/banana', (req, res) => {
    res.send({fruits: 'banana'});
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    // console.log(req.query.sort)
    const name = users[id];
    res.send({name, id});
})

app.listen(545, () => console.log('Server Runnig Port:545'));


// Normal function To Write and request to server

// function rootCall(req, res) {
//     res.send('Thanks For Calling Me By: Minhaj');
// }

// arrow function to write and request to server

// const rootCall = (req, res) => {
//     res.send('Thank You ANother Port')
// }