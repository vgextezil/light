import express from 'express';

const PORT = 3000;
const server = express();
console.log('Nodemon1');

server.listen(PORT, () =>{
    console.log(`Server has been started on port ${PORT}`);
})

server.get('/', (req,res) => {
    res.send('Hello from express!!!');
})