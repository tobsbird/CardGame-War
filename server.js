const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const router = express.Router()
const path = require('path')
const mysql = require('mysql')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

//var env = require('dotenv')
const port = process.env.PORT || 3000

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "war"
})

database.connect((err) => {
    if(err) throw err
    console.log("Connected!")
})

//Required for expressjs
app.use(express.urlencoded({ extended: false}));

//Required for expressjs
//app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.status(200).render('home', {
        scripts: [
            {file_name: "/home.js"}
        ]
    })
    //res.sendFile(path.join(__dirname+'/views/home.html'))
})

app.get('/stats', (req, res) => {
    database.query('SELECT * FROM players', async(err, results) => {
        console.log(results)
        res.status(200).render('stats',{
            players: results,
            scripts: [
                {file_name: "/stats.js"}
            ]
        })
    })
    
})

app.get('*', (req, res) => {
    res.status(404).render('404')
})

app.use('/', router)
//app.use('/stats', require('./public/stats'))
app.listen(port, () => {
    console.log('War: The Card Game server listening on port:', port)
})