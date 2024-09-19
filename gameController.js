const path = require('path');
const fs = require('fs');


exports.gamePage = (req, res) => {
    // res.sendFile(path.join(__dirname, '.', 'views', 'battlefield.html'));
    fs.readFile(path.join(__dirname, '.', 'views', 'battlefield.html'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            const { login } = req.session.user;
            res.type('text/html').send(data.replace('name 1', login));
        }
    });


};
