const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('login')
})

app.get('/signup', (req, res) => {
    res.render('signup')
});
app.get('/retail', (req, res) => {
    res.render('retail')
});
app.get('/sco', (req, res) => {
    res.render('sco')
});
app.get('/ticketswitch', (req, res) => {
    res.render('ticketswitch')
});
app.get('/socialdistance', (req, res) => {
    res.render('socialdistance')
});
app.get('/sco_tcs', (req, res) => {
    res.render('sco_tcs')
});
app.get('/sco_azure', (req, res) => {
    res.render('sco_azure')
});


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})