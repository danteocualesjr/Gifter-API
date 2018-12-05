import nodemailer from 'nodemailer';

// Change email address.
const from = '"Gifter" <info@gifter.com>';

function setup() {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
}

export function sendConfirmationEmail(user) {
    const transport = setup();
    const email = {
        from,
        to: user.email,
        subject: "Welcome to Gifter!",
        text: `
        Welcome to Gifter! Please confirm your email below.

        ${user.generateConfirmationUrl()}
        `
    }

    transport.sendMail(email);
}

export function sendResetPasswordEmail (user) {
    const transport = setup();
    const email = {
        from,
        to: user.email,
        subject: "Reset password!",
        text: `
        To reset password, please follow this link.

        ${user.generateResetPasswordLink()}
        `
    }

    transport.sendMail(email);
}