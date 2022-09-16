const User = require('../model/user');
const sendToken = require('../util/jwtToken');
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

exports.loginUser = (async (req, res, next) => {
    const {email, password} = req.body;

    if (!email || !password) {
        res.status(400).json({
            success: false,
            message: 'Invalid email or password'
        })
    }

    const user = await User.findOne({email}).select('+password')

    if(!user) {
        res.status(400).json({
            message: 'User not found'
        })
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched) {
        res.status(400).json({
            message: 'Password mismatch'
        })
    }

    sendToken(user, 200, res)
})

