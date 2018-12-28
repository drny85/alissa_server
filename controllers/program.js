const Program = require('../models/program');
const Email = require('./email/email');

exports.addProgram = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    const fullDescription = req.body.fullDescription;

    const program = new Program({
        name: name,
        description: description,
        price: price,
        image: image,
        fullDescription: fullDescription
    });

    program.save()
        .then(program => {
            if (!program) return res.status(404).json({
                message: 'something went wrong'
            });
            res.json(program);

        })
        .catch(err => console.log(err));
}



exports.getPrograms = (req, res) => {
    Program.find()
        .sort('-addedOn')
        .exec()
        .then(programs => {
            res.json(programs);
        })
        .catch(err => console.log(err));
}

exports.updateProgram = (req, res) => {
    const id = req.body._id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;

    if (id) {
        Program.findByIdAndUpdate(id, {
                name: name,
                description: description,
                price: price,
                image: image
            }, {
                new: true
            })
            .then(program => {
                res.json(program);
            })
            .catch(err => console.log(err));
    }
}

exports.editProgram = (req, res) => {
    const id = req.params.id;
    Program.findOne({
            _id: id
        })
        .then(program => {
            if (!program) return res.status(404).json({
                message: 'No data found'
            });

            res.json(program);
        })
        .catch(err => console.log(err));
}

exports.deleteProgram = (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(404).json({
        message: 'Invalid request'
    });

    Program.findOneAndDelete({
            _id: id
        })
        .then(program => {
            res.json(program)
        })
        .catch(err => console.log(err));


}