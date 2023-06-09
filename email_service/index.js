import express from "express";
import cors from "cors";
import amqp from 'amqplib/callback_api.js'
import nodemailer from 'nodemailer'
import dotenv from "dotenv"
const port = process.env.PORT || 3031;

const app = express();

dotenv.config()
app.use(cors());
app.use(express.json());

const rabbitUrl = process.env.RABBIT_HOST
amqp.connect(rabbitUrl, function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'emails';
        channel.assertQueue(queue, {
            durable: false
        });

        channel.consume(queue, function (payload) {
            if (payload != null) {
                let contents = JSON.parse(payload.content)
                console.log(contents);
                // sendEmail(contents)
            }
        }, {
            noAck: true
        })
    });
});

async function sendEmail(params) {
    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "b19c929abe0e43",
            pass: "674f29c2676df2"
        }
    });

    try {
        const mailOptions = {
            from: 'pikiha52@gmail.com',
            to: params.email,
            subject: params.subject,
            text: params.body
        };

        await transporter.sendMail(mailOptions);

        console.log('Email terkirim');
    } catch (error) {
        console.log('Gagal mengirim email');
    }
}

app.listen(port, () => console.log(`Server up and running ${port} `));
