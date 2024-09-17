const path = require('path');

exports.mainPage = (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'views', 'main.html'));
};
