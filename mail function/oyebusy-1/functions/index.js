const functions = require('firebase-functions');
const nodemailer = require('nodemailer');


// Function for updating partners  during a order is created
exports.ordersDocumentCreate = functions.firestore.document('/scores/{documentID}')
    .onCreate( async (snap, context) => {

        const data = snap.data();
        const email=data.email;
        const score=data.score;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'oyebusyupdate@gmail.com',
              pass: 'Oyebusy@321'
            }
          });
    
          var mailOptions = {
            from: 'oyebusyupdate@gmail.com',
            to: email,
            subject: 'Thank you for participating in the contest',
            html: 
            `<h1>Dear user, ${email} your score is : ${score}/30</h1><br/><h2>You may check the leaderboard here-</h2><a href="https://oyebusy-1b50a.web.app/"><h3>https://oyebusy.com/leader-board</h3></a>`  

          };
    
          transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  console.log(error);
                } 
              else {
                  console.log('Email sent: ' + info.response);
                } 
          });
       return 1;
})



    