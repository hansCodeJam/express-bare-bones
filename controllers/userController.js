const user = require('../Model/Users');
// const uuid = require('uuid/v4');

module.exports = {
    getAllUsers: (req, res) => {
        res.json(user)
    }, 

    
}