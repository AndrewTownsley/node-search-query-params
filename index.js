import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

// const params = new URLSearchParams({
//     query: 'dinner',
//     language: 'en'
// })

// const url = ``

// fetch(url)
//     .then(res => res.text())
//     .then(console.log())

app.get('/', (req, res) => {
    res.send('Ello m8')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/about/:first/:age', (req, res) => {
    // console.log("req.params",req.params)
    // console.log("req.query",req.query);
    res.send(req.params.first + ' ' + req.params.age )
})

app.get('/about/contact', (req, res) => {
    res.send('Contact Us')
})

app.listen(PORT, () => console.log(`Server is listening on PORT:${PORT}`))



// const queryStr = 'name=Andrew&age=36&occupation=web+dev';
// const usp = new URLSearchParams(queryStr);
// const myName = usp.get('name');
// console.log(`Value for name =${myName}`);

// usp.set('name', 'Jeff')

// for ( const [key, value] of usp) {
//     console.log(`${key} = ${value}`);
// }

// const myURL = new URL(`https://www.youtube.com`);
// console.log(myURL);
// myURL.hostname = `google.com`;
// myURL.search = '?name=Andrew&age=36'
