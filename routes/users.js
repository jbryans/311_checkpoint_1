
const express = require('express');
const router = express.Router();

const controller = require('../controllers/users');

//get users = return all users
router.get('/users', controller.getAllUsers);

//get/users/:id = return just the user that matches the path param(id)
router.get('/users/:id', controller.getUserById);


//post/ user = create new user (sampleUser), increment id to insert next available id on list, we have 1-10 next should be 11
router.post('/users', controller.createUser);

//put/user/:id = update one user matching id. use sampleUser as body
router.put('/users/:id', controller.updateUserById);



//delete/users/:id = delete on user by id
router.delete('/users/:id', controller.deletUserById);



module.exports = router;