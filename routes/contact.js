let express = require('express');
let router = express.Router();
let contactController = require('../controllers/contact');

// Router for lists movies function
router.get('/list', contactController.contactList);

// Routers for edit functions
router.get('/edit/:id', contactController.displayEditPage);
router.post('/edit/:id', contactController.processEditPage);

// Router for Delete function
router.get('/delete/:id', contactController.performDelete);

// Routers for Add functions
router.get('/add', contactController.displayAddPage);
router.post('/add', contactController.processAddPage);


module.exports = router;