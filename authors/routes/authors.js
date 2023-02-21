const express = require('express')
const router = express.Router()

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

router.get('/authors/:id', (req, res) => {
    let id = req.params.id
    let author = authors[id]
    console.log(author)
    res.json({
        name : `Voici l'auteur : ${author.name}`,  
        nationality : author.nationality,  
        books : `C'est livre  ${author.books }` 
    })
})

router.get('/authors/:id/books/', (req, res) => {
    let id = req.params.id
    let author = authors[id]
    console.log(author);
    res.json({
        books : `C'est livre  ${author.books}`
    })
})


router.get('/json/authors/:id', (req, res) => {
        let id = req.params.id
        let author = authors[id]
        console.log(author);
        res.json({
            name : `Name ${author.name}`,
            nationality : `Nationality ${author.nationality}`
          
        })
})

router.get('/json/authors/:id/books', (req, res) => {
    let id = req.params.id
    let author = authors[id]
    console.log(author);
    res.json({
        books: `${author.books}`
    })
})



module.exports = router