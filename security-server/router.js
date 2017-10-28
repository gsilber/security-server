const AuthenticationController = require('./controllers/authentication'),  
      express = require('express'),
      passportService = require('./security/passport');
     
module.exports = function(app) {  
    // Initializing route groups
    const apiRoutes = express.Router(),
            authRoutes = express.Router();

    apiRoutes.use('/auth', authRoutes);
    // /api/auth/register
    authRoutes.post('/register', AuthenticationController.register);
    // /api/auth/login
    authRoutes.post('/login', AuthenticationController.login);
    // /api/auth/authorize
    authRoutes.get('/authorize',passportService.requireAuth,AuthenticationController.authorize);
    app.use('/api', apiRoutes);
};