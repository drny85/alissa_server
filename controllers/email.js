const Email = require("./email/email");
exports.sendEmail = (req, res) => {
  const to = "alissajfitness@gmail.com";
  const body = req.body.body;
  const name = req.body.name;
  const subject = req.body.subject;
  //const message = req.body.message;
  const from = req.body.email;
  const program = req.body.program;

  return Email.sendMail(
    {
      to: to,
      from: name,
      from,
      subject: subject,
      text: `This email is about ${program}`,
      html: body
    },
    (err, result) => {
      if (err)
        return res.status(404).json({
          message: "Something went wrong"
        });

      res.json({
        message: "Email sent"
      });
    }
  );
};
