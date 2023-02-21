const express = require('express')
const router = express.Router()
const api = require('../data.json')
const axios = require('axios')


router.get('/game-of-thrones/json', (req, res) => {
    res.send(api)
})

router.get('/game-of-thrones/url', (req, res) => {
        axios.get("https://thronesapi.com/api/v2/Characters")
        .then(reponse => console.log(reponse.data))
})


router.get('/pokemon/:limit/:offset/', (req, res) => {
    let offset = req.params.offset
    let limit = req.params.limit

    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(reponse => {
        let result = reponse.data;
        res.json({
            allPokemon : result
        })
    })
})

 router.get('/pokemon/:id', (req, res) => {
    let id = req.params.id 
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(reponse => {
        let result = reponse.data.name
        res.json({
            pokemon : result
        })
    })
 })





module.exports = router