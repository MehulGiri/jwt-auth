const express=require('express')
const app = express();
const mongoose=require('mongoose')


const authRoute=require('./routes/index')
//connect DB
mongoose.connect('mongodb://localhost:27017/task',{
    useUnifiedTopology:true,
    useNewUrlParser:true,  
},()=>console.log('connect'))
// })


//MiddleWare
app.use(express.json())
// app.use(express.urlencoded({extended:true}))


app.use('/',authRoute);

app.listen(3000,()=>console.log('Server Running'))