const taskListController = require('../controllers/taskListController');
const router = require('express').Router();

router.get('/', (req,res)=> res.redirect('/lists'));

router.get('/lists', taskListController.index);
router.post('/list/create', taskListController.create);

router.post('/list/:listId/delete', taskListController.delete);
router.post('/list/:listId/task/:taskId/delete', taskListController.deleteTask);
router.post('/list/:listId/task/create', taskListController.createTask);
router.get('/list/:listId', taskListController.show);


module.exports = router;