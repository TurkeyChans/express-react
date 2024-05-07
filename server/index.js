const express = require('express')

const app = express()

const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Server running funtionally")
})

app.get('/test', (req, res)=>{
    res.send("Server is operational")
})

app.listen(port, ()=> {
    console.log(`Sercer is runing on port ${port}`)
})