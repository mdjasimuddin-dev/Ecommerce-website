const nodemailer = require("nodemailer");


const EmailSend = async (toMail, MailSubject, MailText) => {
    // Create a test account or replace with real credentials.
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER_NAME,
            pass: process.env.SMTP_PASS,
        },
    });


    const mailOptions = {
        from: "MJ SOFT BD <no-reply@mjsoftbd.com>",
        to: toMail,
        subject: MailSubject,
        text: MailText,
    }

    return await transporter.sendMail(mailOptions)
}


module.exports = {
    EmailSend
}