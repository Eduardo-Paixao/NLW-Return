import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ce2e7d6b392681",
    pass: "5ddcd77081f6ec"
  }
});

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedbacks = await prisma.feedback.create({
    data: {
      type: type,
      comment: comment,
      screenshot: screenshot,
    },
  });

  await transport.sendMail({
    from:'Equipe Feedget <paixao@feedget.com>',
    to: 'Paixão <eduardo.mmpj@gmail.com>',
    subject:'Novo feedback',
    html:[
      `<div style="font-family: sans-serif; font-size: 16px; color:#111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('\n')
  })
  return res.status(201).json({ data: feedbacks });
});

app.listen(3333, () => {
  console.log("HTTP server running");
});
