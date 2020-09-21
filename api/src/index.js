const express = require('express')
const app = express()
const PORT = 3030
const movies = require('./movies.json')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
    next()
})

app.get('/movies', (req, res) => {
    res.send(movies)
})

app.get('/movies/:movieId', (req, res) => {
    const foundServer = findServer(req, res)

    res.send(foundServer)
})

function findServer(req, res) {
    const serverId = parseInt(req.params.serverId)

    const foundServer = movies.find(it => it.id === serverId)
    if (!foundServer) {
        throw res.status(404).send({ errorMessage: `Server does not exist` })
    }
    return foundServer
}

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
