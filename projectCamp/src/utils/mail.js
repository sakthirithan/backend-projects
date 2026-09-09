import mailgen from "mailgen";

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

export { emailVerificationMailgenContent, forgotPasswordMailgenContent };