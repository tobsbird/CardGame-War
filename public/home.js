const port = process.env.PORT || 3000
const express = require('express')

function stats_button(){
    console.log("in stats_button")
    res.sendFile(path.join(__dirname+'/views/stats.html'))
}