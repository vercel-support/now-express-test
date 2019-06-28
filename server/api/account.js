const router = require('express').Router();
const path = require('path');

export const isLoggedIn = (req, res, next) => {
    // if user is authenticated in the session, carry on 
    console.log('*** ACCOUNT *** check user logged in auth', req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next();
    }
    // if they aren't redirect them to the home page
    res.redirect('/');
}

router.get('/account', isLoggedIn, (req, res) => {
    
    if (process.env.NODE_ENV === 'production') {
        console.log('is production and will send index file');
        res.sendFile(path.join(__dirname,'../../index.html'))
        // res.render('index');
    }
    else {
        // res.redirect('http://localhost:3000/account');
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    }
    // res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    // res.sendStatus(200)
});

export default router