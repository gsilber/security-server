const testController=require('./controllers/test-controller'),
    express = require('express');


module.exports = function(app) {  
    // Initializing route groups
    const apiRoutes = express.Router();
    apiRoutes.get('/test', testController.testUnsecure);
    app.use('/api', apiRoutes);
};