const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname.toLowerCase());
    }
})

const imageFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(new Error('Please select a valid img'), false);
    }
}
// UPLOAD THE IMAGE TO server
const upload = multer({
    storage: storage,
    fileFilter: imageFilter,
    limits: 1024 * 1024 * 7
})

const router = express.Router();

const {
    check
} = require('express-validator/check');



const programController = require('../controllers/program');

router.get('/programs', programController.getPrograms);

router.post('/add-program', upload.single('image'), [
    check('name').isLength({
        min: 5
    }).withMessage('Name must be at least 5 characters'),
    check('fullDescription').isLength({
        min: 20
    }).withMessage('Full Description required at least 20 characters'),
    check('description').isLength({
        min: 10
    }).withMessage('Description must be at least 10 characters long.')

], programController.addProgram);

router.get('/program/:id', programController.editProgram);

router.put('/program/:id', upload.single('image'), programController.updateProgram);


router.delete('/program/:id', programController.deleteProgram);



module.exports = router;