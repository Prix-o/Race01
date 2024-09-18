const path = require('path');

exports.gamePage = (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'views', 'battlefield.html'));
};
