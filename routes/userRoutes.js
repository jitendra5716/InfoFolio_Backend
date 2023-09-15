const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/api/v1/users',userController.getAll);
router.post('/api/v1/user/create',userController.create);
router.delete('/api/v1/user/delete/:id',userController.delete);
router.put('/api/v1/user/update/:id',userController.update);



module.exports = router;