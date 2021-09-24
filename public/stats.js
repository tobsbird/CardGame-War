const mysql = require('mysql')

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

/*var add_player = document.getElementById("add_button")

add_player.addEventListener("click", function(){
    database.query('SELECT id FROM players ORDER BY id DESC LIMIT 1', async(err, results) => {
        if(results.length == 1){
            console.log("ininin")
            var newName = "SimPlayer" + (results[0] + 2)
            database.query('INSERT INTO war VALUES ('+ (results[0] + 1) + ', '+ newName +', 0, 0)', async(err, results) => {
                if(err) console.log(err)
            })
        } else{console.log("Error adding new player")}
    })
})*/
