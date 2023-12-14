const nodemailer = require('nodemailer')
require('dotenv').config()

const transport = nodemailer.createTransport({
    service : "gmail",
    host : "smtp.forwardemail.net",
    port : 465,
    secure : true,
    auth : {
        user : process.env.EMAIL,
        pass : process.env.PASSWORD
    }
})

const main = async () => {
    const info = await transport.sendMail({
        from : process.env.EMAIL,
        to : "shiyasshiyyu9961@gmail.com",
        subject : 'Test mail',
        text : 'Testing node mailer how its working...'
    })
    console.log("message send : %s", info.messageId)
}

main().catch(err => console.log(err))
