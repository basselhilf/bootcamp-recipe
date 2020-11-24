const express = require('express')
const path = require('path')
const request = require('request')
const urllib = require('urllib')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_moduels')))

app.get('/sanity',function(request,response){
    response.send('OK')
})

app.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    request.get(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (error, response, body) {
        console.log('error: ', error)
        const data = JSON.parse(body).results
        res.send(data)
    })
})

const port = 8080
app.listen(port,function(){
    console.log(`Running server on port : ${port}`)
})