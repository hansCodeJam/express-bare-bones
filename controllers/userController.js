const user = require('../Model/Users');
const uuid = require('uuid/v4');

module.exports = {
    getAllUsers: (req, res) => {
        res.json(user)
    }, 

    getSingleUser: (req, res) => {
        const userExists = user.filter(user => user.id === req.params.id);
        const user = userExists[0];

        if(userExists.length !== 0) {
           console.log('hello')
            return res.status(200).json(user);
        } else {
            return res.status(400).json({message: `User with id: ${req.params.id} does not exist` })
        }
    }
}