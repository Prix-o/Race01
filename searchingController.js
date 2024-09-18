const path = require('path');

exports.searchingPage = (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'views', 'searching.html'));
};
