const User = require('./models/user.js');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const config = require('./config.json');

const transporter = nodemailer.createTransport({
    host: config.emailHost,
    port: config.emailPort,
    secure: config.emailSecure,
    auth: {
        user: config.emailUser,
        pass: config.emailPass,
    }
});

exports.loginPage = (req, res) => {
    console.log('Login page requested');
    res.sendFile(__dirname + '/views/login.html');
};


exports.login = async (req, res) => {
    const { login, password } = req.body;
    try {
        const user = await User.findByLogin(login);
        if (user && await bcrypt.compare(password, user.password)) {
            req.session.user = user;
            res.redirect('/main');
        } else {
            res.sendFile(__dirname + '/views/fail.html');
        }
    } catch (error) {
        console.error(error);
        res.sendFile(__dirname + '/views/fail.html');
    }
};

exports.reminderPage = (req, res) => {
    res.sendFile(__dirname + '/views/reminder.html');
};

exports.sendReminder = async (req, res) => {
    const { login } = req.body;
    try {
        const user = await User.findByLogin(login);
        if (user) {
            const mailOptions = {
                from: `"App Name" <${config.emailUser}>`,
                to: user.email,
                subject: 'Password Reminder',
                text: `Your password is: ${user.password}`,
                html: `<p>Your password is: <strong>${user.password}</strong></p>`,
            };
            await transporter.sendMail(mailOptions);
            //res.send('Password reminder sent to your email.');
            //res.redirect('/success');
            res.sendFile(__dirname + '/views/success.html');
        } else {
            res.sendFile(__dirname + '/views/fail.html');
        }
    } catch (error) {
        console.error(error);
        res.redirect('/views/fail.html');
    }
};
exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.redirect('/main'); 
        }
        console.log('Session destroyed successfully');
        res.clearCookie('connect.sid'); 
        res.redirect('/login'); 
    });
};

