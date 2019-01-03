const {
  validationResult
} = require('express-validator/check');

const Email = require("./email/email");
exports.sendEmail = (req, res) => {
  const to = "alissajfitness@gmail.com";
  const body = req.body.body;
  const name = req.body.name;
  const subject = req.body.subject;
  //const message = req.body.message;
  const from = req.body.email;
  const program = req.body.program;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  return Email.sendMail({
      to: to,
      from: name,
      from,
      subject: subject,
      text: `This email is about ${program}`,
      html: `<!doctype html>
      <html lang="en">
        <head>
          <!-- Required meta tags -->
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      
          <!-- Bootstrap CSS -->
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
      
          <title></title>
        </head>
        <body>
        <div class="container">
        <h3>Hi Alissa, here is a email from <span class="text-capitalize">${name}</span> </h3>
        <div class="card">
        <div class="card-body">
        This email is about this program. ${program}
        <p> ${body} </p>
        </div>
        </div>
        </div>
        
      
          <!-- Optional JavaScript -->
          <!-- jQuery first, then Popper.js, then Bootstrap JS -->
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
        </body>
      </html>`
    },
    (err, result) => {
      if (err)
        return res.status(404).json({
          message: "Something went wrong"
        });
      console.log('Email sent');
      res.json({
        message: "Email sent"
      });
    }
  );
};