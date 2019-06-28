import passport from 'passport'
import { isLoggedIn } from './account'
const router = require('express').Router();
import axios from 'axios';
require('dotenv').config();
import User from '../models/user';

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/account', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/account', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.get('/logout', function(req, res) {
    
    req.logout();
    res.redirect('/');
});

export default router