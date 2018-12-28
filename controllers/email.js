const Email = require('./email/email')
exports.sendEmail = (req, res) => {
    const email = req.body.email;
    const body = req.body.body;
    const subject = req.body.subject;
    const message = req.body.message;
    const from = 'alissajfitness@gmail.com'

    return Email.sendMail({
        to: email,
        from: from,
        subject: subject,
        text: message,
        html: body
    }, (err, result) => {
        if (err) return res.status(404).json({
            message: 'Something went wrong'
        });


        res.json({
            message: 'Email sent'
        });
    });
}