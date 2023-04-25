import nodemailer from 'nodemailer';
export default async function handler(req, res) {
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'cs20b057@iittp.ac.in',
                pass: process.env.EMAIL_PASSWORD
            }
    });
    console.log("came here for OTP")
    transporter.sendMail({
        from: 'cs20b057@iittp.ac.in', // sender address
        to: req.body.email, // list of receivers
        subject: "Kindly Verify OTP", // Subject line
        text: req.body.OTP, // plain text body
      },function(err,data){
        if(err){
            res.send("error",500);
        }
        else{
            res.send("success",200);
        }
        });
        res.send("success");
}   