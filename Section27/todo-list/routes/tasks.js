const tasksController = require('../controllers/tasksController');
const router = require('express').Router();

router.get('/', (req,res)=> res.redirect('/tasks'));

router.get('/tasks', tasksController.index);
router.post('/create', tasksController.create);
router.post('/delete', tasksController.delete)
module.exports = router;