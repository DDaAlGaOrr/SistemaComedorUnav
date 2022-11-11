const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/internoDesayuno',(req,res)=>{
    console.log(req.body)
    console.log('Desayuno interno')
})
app.post('/externoDesayuno',(req,res)=>{
    console.log(req.body)
    console.log('Desayuno externo')
})
app.post('/visitaDesayuno',(req,res)=>{
    console.log(req.body)
    console.log('Desayuno visita')
})


app.post('/internoComida',(req,res)=>{
    console.log(req.body)
    console.log('Comida interno')
})
app.post('/externoComida',(req,res)=>{
    console.log(req.body)
    console.log('Comida externo')
})
app.post('/visitaComida',(req,res)=>{
    console.log(req.body)
    console.log('Comida visita')
})

app.post('/internoCena',(req,res)=>{
    console.log(req.body)
    console.log('Cena interno')
})
app.post('/externoCena',(req,res)=>{
    console.log(req.body)
    console.log('Cena externo')
})
app.post('/visitaCena',(req,res)=>{
    console.log(req.body)
    console.log('Cena visita')
})

app.listen(3000, ()=>{
    console.log('SERVER corriendo en http://localhost:3000');
});