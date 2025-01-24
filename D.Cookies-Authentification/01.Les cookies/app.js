const express = require ('express')
const cookiesParser = require('cookie-parser')

const PORT = process.env.PORT || 3001;

const app = express()

app.use(cookiesParser());


app.get('/set-cookie',(req, res) => {
    res.cookie('monCookie','valeurDuCookie',{maxAge: 900000,httpOnly: true}),
    res.send('Cookie défini avec succès');
})

app.get('/get-cookie', (req,res) => {
    const valeurDuCookie = req.cookies.monCookie;
    if(valeurDuCookie){
        res.send(`Valeur du cookie : ${valeurDuCookie}`)
    }else {
        res.send('Cookie non trouvé');
    }
})

app.listen(PORT, () => {
    console.log(`Le serveur est à l'écoute sur le port ${PORT}`);
  });