const User = require('./models/user.js');
const bcrypt = require('bcrypt');

exports.registerPage = (req, res) => {
    res.sendFile(__dirname + '/views/registration.html');
};

exports.register = async (req, res) => {
    const { login, password,confirmPassword, email, full_name } = req.body;
    if (password !== confirmPassword) {
        res.sendFile(__dirname + '/views/fail.html');
      }
    else {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            await User.create({ login, password: hashedPassword, email, full_name });
            res.sendFile(__dirname + '/views/success.html');
        } catch (error) {
            console.error(error);
            res.sendFile(__dirname + '/views/fail.html');
        }
    }
    
};
