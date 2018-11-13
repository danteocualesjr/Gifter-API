import nodemailer from 'nodemailer';

const from = '"Gifter" <info@gifter.com>';

function setup() {
    return nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "39fcf5e281ea33",
            pass: "843dffc3bcc7d9"
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
        `
    }
}