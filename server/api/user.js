import User from '../models/user';
const router = require('express').Router();

router.get('/details', function(req, res) {

    console.log('** user details req is authenticated **', req.isAuthenticated());
    console.log('** request session userid **', req.user);
    if (req.isAuthenticated() && req.user){
    const { _id } = req.user;
        User.findById(_id).then(user => {
            return res.json(user);
        });
    }
    // res.sendStatus(401)
});

export default router