const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
//const router = express.Router()
//const path = require('path')
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
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    //res.send('Hello World!')
    database.query('SELECT * FROM players WHERE playing=1', async(err, results1) => {
        if(err) console.log(err)
        else{
            database.query('SELECT * FROM players WHERE playing=0', async(err, results2) => {
                if(err) console.log(err)
                else {
                    res.status(200).render('home', {
                        player1: results1[0].name,
                        player2: results1[1].name,
                        other_players: results2, 
                        scripts: [
                            {file_name: "/testDeck.js",
                            file_type: "module"}
                        ]
                    })
                }
            })
        }
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

//app.use('/', router)
app.use('/db', require('./public/db_connect'))
//app.use('/stats', require('./public/stats'))
app.listen(port, () => {
    console.log('War: The Card Game server listening on port:', port)
})