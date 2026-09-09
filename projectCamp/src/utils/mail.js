import mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
    const mailGenerator = new mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link: "https://taskmanagerlink.com",
        }
    })

    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
    const emailHtml = mailGenerator.generate(options.mailgenContent);

    const transpoter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        }
    })


    const mail = {
        from: "mail.taskmanager@example.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml
    }


    try {
        await transpoter.sendEmail(mail);
    } catch (err){
        console.error("Email service failed silently! Make sure that you have provided your MAILTRAP credentials in the .env file");
        console.error("ERROR: ", err);
    }
}



const emailVerificationMailgenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            Intro: "Welcome to our App! we're excited to have you on board!",
            action: {
                instructions: "To verify your email please click on the following button",
                button: {
                    color: "#22BC66",
                    text: "verify your email",
                    link: verificationUrl
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help."
        },
    };
};


const forgotPasswordMailgenContent = (username, passwordResultUrl) => {
    return {
        body: {
            name: username,
            Intro: "We got a request to rest the password of your account",
            action: {
                instructions: "To reset your password click on the following button or link",
                button: {
                    color: "#168245",
                    text: "Reset password",
                    link: verificationUrl
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help."
        },
    }
};

export { emailVerificationMailgenContent, forgotPasswordMailgenContent, sendEmail };