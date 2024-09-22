const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const routes = require('./routes');

const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server)

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


let players = [];
let turn = 0;

io.on('connection', (socket) => {
    console.log('user connected:' + socket.id)

    socket.on('find_game', () =>{
        players.push(socket.id);
        socket.join(`room by ${players[0]}`);
        console.log(`user ${socket.id} start search`);
        if (players.length == 2 ) {
            console.log(`users ${players[1]} join ${players[0]}`);
            
            io.to(`room by ${players[0]}`).emit('start');
            io.to(`room by ${players[0]}`).emit('change_turn', players[turn]);
        }
    });

    socket.on("my_login", (login) =>{
        console.log(login);
        // socket.broadcast.emit("opp_login", login);
        socket.to(`room by ${players[0]}`).emit("opp_login", login);

    });

    socket.on("change_turn", () =>{
        if (turn == 1) {
            turn = 0;
        } else turn = 1;
        io.to(`room by ${players[0]}`).emit('change_turn', players[turn]);

    });

    socket.on("place_card", (obj) =>{

        io.to(`room by ${players[0]}`).emit('card_placed', obj);

    });

    socket.on("attack_opponent", (newHP) =>{

        io.to(`room by ${players[0]}`).emit('got_attacked', newHP);

    });

    socket.on("attack_card", ({ attackerId, targetId, attackerDamage }) =>{

        io.to(`room by ${players[0]}`).emit('opponent_attacked_card', { attackerId, targetId, attackerDamage });

    });

});




server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
