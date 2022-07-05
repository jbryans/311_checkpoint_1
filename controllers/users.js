

const users = require('../data/index');

//listUsers = retrieve entire array from data/index
const getAllUsers = (req, res) => {
 
    res.json(users)
}
//showUsers = retrieve just the user that matches the passed in id
const getUserById = (req,res) => {
    console.log(req.params)

    const found = users.some(user => user.id == req.params.id)
    if (found){
      res.send(users.filter(user => user.id == req.params.id) )
    } else {
      res.status(400).json({msg: `User id ${req.params.id}not found.`})
    }
    
}
// createUser = add user to array
const createUser = (req, res) => {
    console.log('Inside the POST /users')
    console.log(req.body)
    const newId = users.length + 1;
    const newUser = {
        id: newId,
        ...req.body
    }

//     const newUser = { 
//      id: newId,
//      name: req.body.name,
//      username: req.body.username,
//      email: req.body.email,
//      address: {
//        street: req.body.address.street,
//        suite: req.body.address.suite,
//        city: req.body.address.city,
//        zipcode: req.body.address.zipcode,
//        geo: {
//          lat: req.body.address.geo.lat,
//          lng: req.body.address.geo.lng
//        }
//      },
//      phone: req.body.phone,
//      website: req.body.website,
//      company: {
//        name: req.body.company.name,
//        catchPhrase: req.body.company.catchPhrase,
//        bs: req.body.company.bs
//      }
//  }
     //pushing the new user into the array
     users.push(newUser)
     res.json(users)
 }
// updateUser = update one user in the array based on id

const updateUserById = (req, res) => {
    console.log('Inside the POST /users')
    console.log(req.body)
    const updateUser = {
        id: req.body.id,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: {
            street: req.body.street,
            suite: req.body.suite,
            city: req.body.city,
            zipcode: req.body.zipcode,
            geo: {
                lat: req.body.lat,
                lng: req.body.lng
            }
        },
        phone: req.body.phone,
        website: req.body.website,
        company: {
            name: req.body.name,
            catchPhrase: req.body.catchPhrase,
            bs: req.b
        }
    }
    //first add updated field to users then push the entire update user object to the array 
    users.push(updateUser)
    res.json(updateUser)
}
// deleteUser = should delete one user from the array based on id
const deletUserById = (req, res) => {
    const found = users.some(user => user._id == req.params.id)
  if (found){
    res.json({ 
      msg: `User deleted`, 
      users: users.filter(user => user._id == req.params.id)
    })
  } else {
    res.status(404).json({msg: `User id ${req.params.id} not found.`})
  }
}
  // exports each of the functions/methods we build as an object
  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deletUserById
  }