const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "tn.sarthak039@gmail.com",
        subject: "Thanks for joining in",
        text: `Welcome to the app, ${name}. Hope you enjoy your time. RYu8rZRfH6`
    })
}

const cancelEmail = (email, name)=> {
    sgMail.send({
        to: email,
        from: "tn.sarthak039@gmail.com",
        subject: "Account Deletion",
        text: `Mr.${name} Why delete your account huh? You want a piece of me? 1234a`
    })
}

module.exports = {
    sendWelcomeEmail,
    cancelEmail
}