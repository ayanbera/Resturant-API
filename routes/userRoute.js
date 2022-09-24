const express = require('express')
const router = express.Router();

const { registerUser, loginUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.route('/login').post(loginUser);

// router.route('/admin/users').get(isAuthenticateUser, authorizedRoles('admin'), allUsers);
// router.route('/admin/user/:id').put(isAuthenticateUser, authorizedRoles('admin'), updateUser)

module.exports = router;