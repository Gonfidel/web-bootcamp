const tasksController = require('../controllers/tasksController');
const router = require('express').Router();

router.get('/',tasksController.index);
router.post('/',tasksController.create);

module.exports = router;