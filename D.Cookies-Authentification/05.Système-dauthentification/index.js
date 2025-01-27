const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));

app.use(session({secret: "Votre_cle_secrete", resave: true, saveUninitialized: true}));


app.use(passport.initialize());
app.use(passport.session());

const userDB = {
    'utilisateur1': {id: 'utilisateur1', username: 'utilisateur1',password: 'mot_de_passe1'},
    'utilisateur2': {id: 'utilisateur2', username: 'utilisateur2',password: 'mot_de_passe2'},

}

passport.use(new LocalStrategy(
    (username,password,done)=> {
        const user = userDB(username);
        if(user && user.password === password){
            return done(null,user);
        }
        return done(null,false, {message : `Nom d'utilisateur ou mot de passe incorrect`});
    }
))

passport.serializeUser((user,done) => {
    done(null,user.id);
})

passport.deserializeUser((id,done) => {
    const user = userDB[id];
    done(null,user);
})


app.get('/', (req,res) => {
    res.send('Page home - contenu public');
})

app.post('/login',passport.authenticate('local',{
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}))

app.get('/login', (req, res) => {
    res.send(`
        <h2>Page de connexion</h2>
        <form action="/login" method="POST">
            <label>Nom d'utilisateur :</label>
            <input type="text" name="username" required /><br/>
            <label>Mot de passe :</label>
            <input type="password" name="password" required /><br/>
            <button type="submit">Se connecter</button>
        </form>
    `);
});


app.get('/dashboard',isAuthentificated, (req,res) => {
    res.send(`Bienvenue ${req.user.username} sur le tableau de bord, contenu -sécurisé`);
})

app.get('/logout', (req,res) => {
    req.logout();
    res.redirect('/');
})

app.get('/dashboard',isAuthentificated, (req,res) => {
    res.send(`Bienvenue ${req.user.username} sur le tableau de bord, contenu -sécurisé`);
})

function isAuthentificated(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}   



app.listen(PORT, () => {
    console.log(`Le serveur est sur le port http://localhost:${PORT}`);
});
