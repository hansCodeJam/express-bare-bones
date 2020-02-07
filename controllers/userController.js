const users = require('../Model/Users');
const uuid = require('uuid/v4');

module.exports = {
    getAllUsers: (req, res) => {
        res.json(users)
    },

    getSingleUser: (req, res) => {
        const userExists = users.filter(user => user.id === req.params.id);
        const user = userExists[0];

        if(userExists.length !== 0) {
           console.log('hello')
            return res.status(200).json(user);
        } else {
            return res.status(400).json({message: `User with id: ${req.params.id} does not exist` })
        }
    }, 

    createUser: (req, res) => {
        if(!req.body.name || !req.body.email) {
            return res.status(400).json( {message: 'Please enter both a name and an email'})
        }
        const newUser = {};
        newUser.id = uuid();
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        users.push(newUser);
        console.log(newUser)
        return res.json(req.body);
    }
}