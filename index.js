const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')

let pLanguage = []

app.get('/', (req, res) => {
  res.render('index', {plName: pLanguage});
});

app.get('/contact', (req, res) => {
    res.render('contact', {})
})

app.post('/', (req, res) => {
    const pl = req.body.pLanguage;
    pLanguage.push(pl)
    res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
