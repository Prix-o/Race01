const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'photos')));

app.use(session({
    secret: 'your_secret_key', 
    resave: false,
    saveUninitialized: false,  
    cookie: {
        httpOnly: true,       
        secure: false,      
        maxAge: 1000 * 60 * 60 * 24 
    }
}));

app.use('/', routes);

app.get('/', (req,res)=>{
    res.redirect('/login');
})

// 404 Handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
