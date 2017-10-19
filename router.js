const AuthenticationController = require('./controllers/authentication'),  
      express = require('express');
const REQUIRE_ADMIN = "Admin",  
      REQUIRE_OWNER = "Owner",
      REQUIRE_CLIENT = "Client",
      REQUIRE_MEMBER = "Member";

module.exports = function(app) {  
    // Initializing route groups
    const apiRoutes = express.Router(),
            authRoutes = express.Router();
    
    //=========================
    // Auth Routes
    //=========================
    
    // Set auth routes as subgroup/middleware to apiRoutes
    apiRoutes.use('/auth', authRoutes);
    
    // Registration route
    authRoutes.post('/register', AuthenticationController.register);
    
    // Login route
    authRoutes.post('/login', /*requireLogin,*/ AuthenticationController.login);
    
    // Set url for API group routes
    app.use('/api', apiRoutes);
    };