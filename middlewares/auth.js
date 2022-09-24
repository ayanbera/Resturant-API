const User = require('../model/user');
const jwt = require('jwtToken');
const ErrorHandler = require('../util/errorHandler');

exports.isAuthentication = (async (req, res, next) => {

    const { token } = req.cookies;

    if(!token) {
        return next(new ErrorHandler ('Login first then use resource', 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id);

    //console.log("user", req.user);

    next();
})

exports.authorizedRoles = ( ...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            return next(
                new ErrorHandler(`Role (${req.user.role}) is not allow to access`, 
                403))
        }
        next();
    }
}