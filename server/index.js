const express = require('express')

const app = express()

const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Server running funtionally")
})

app.post('/api', (req, res) => {
    console.log(req.body.username, req.body.name)
    res.send(req.body)
})

app.get('/message', (req, res)=>{
    res.send("Hello from our server!")
})

app.listen(port, ()=> {
    console.log(`Sercer is runing on port ${port}`)
})