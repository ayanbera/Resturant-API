const User = require('../model/user');

//Register a user => /api/v1/registeredUser
exports.registerUser = (async (req, res, next) => {

    const {name, email, password} = req.body;

    const user =await User.create({
        name,
        email,
        password,
        
    })

    res.status(200).json({
        sucess:true,
        user
    });
})

