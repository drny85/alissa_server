const express = require('express');

const router = express.Router();

const {
    check
} = require('express-validator/check');



const programController = require('../controllers/program');

router.get('/programs', programController.getPrograms);

router.post('/add-program', [
    check('name').isLength({
        min: 5
    }).withMessage('Name must be at least 5 characters'),
    check('description').isLength({
        min: 10
    }).withMessage('Description must be at least 10 characters long.'),
    check('image').isURL().withMessage('Please make sure to enter a valid url')
], programController.addProgram);

router.get('/program/:id', programController.editProgram);

router.put('/program/:id', programController.updateProgram);


router.delete('/program/:id', programController.deleteProgram);



module.exports = router;