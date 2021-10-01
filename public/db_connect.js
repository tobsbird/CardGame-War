const express = require('express')
const router = express.Router()

const mysql = require('mysql')

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "war"
})

router.post('/add_player', async (req, res) => {
    try{
        database.query('SELECT id FROM players ORDER BY id DESC LIMIT 1', async(err, results) => {
            console.log(results[0].id)
            var newName = "SimPlayer" + (results[0].id + 2)
            console.log(newName)
            var id = results[0].id + 1
            console.log(id)
            console.log('Adding new player to DB')
            database.query('INSERT INTO players VALUES(?,?,?,?,?)', [id, newName, 0, 0, 0], async (err, results) => {
                if(err) console.log(err)
                console.log('Add Player Request Added')
                //window.location.reload(true)
                res.redirect(req.get('referer'))
            })
        })
    } catch (err) {
        console.log('Failed To Add Player To DB')
        res.redirect(req.get('referer'))
    }
    //res.redirect(req.get('referer'))
})

module.exports = router