const express = require ('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 8000;

//middleware
app.use(cors())
app.use(express.json())

app.get('/',(req,res) =>{
    res.send('Hello World!')
})

const users = [
    {id: 1 ,name: 'ahnaf'},
    {id: 2 ,name: 'mahi'},
    {id: 3 ,name: 'hitu'}
]

app.get('/users',(req,res) => {
    res.send(users)
})

app.post('/users', (req,res)=>{
    console.log('data in the request:',req.body)
  
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);

    res.send({success:true,data: newUser,message: 'User is added'})
})

app.get('/products',(req,res)=>{
    res.send('products are jumping up')
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})