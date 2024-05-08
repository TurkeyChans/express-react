const express = require('express')

const app = express()

const port = 3000

//http://localhost:3000/cat.jpg
app.use(express.static('public'))
//1:28:33
const root = require('path').join(__dirname, '../client', 'dist')
app.use(express.static(root))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root })
})

app.get('/test', (req, res)=>{
    res.send("Server is operational")
})

app.listen(port, ()=> {
    console.log(`Sercer is runing on port ${port}`)
})