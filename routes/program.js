const express = require('express');

const router = express.Router();

const {
    check
} = require('express-validator/check');



const programController = require('../controllers/program');

router.get('/programs', programController.getPrograms);

router.post('/add-program', programController.addProgram);

router.get('/program/:id', programController.editProgram);

router.put('/program/:id', programController.updateProgram);


router.delete('/program/:id', programController.deleteProgram);



module.exports = router;