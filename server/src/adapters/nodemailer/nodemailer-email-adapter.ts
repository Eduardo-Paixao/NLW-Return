import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ce2e7d6b392681",
      pass: "5ddcd77081f6ec"
    }
  });
export class NodemailerMailAdapter implements MailAdapter{


    async sendMail ({subject, body}: SendMailData){
        await transport.sendMail({
            from:'Equipe Feedget <paixao@feedget.com>',
              to: 'Paixão <eduardo.mmpj@gmail.com>',
              subject,
              html:body
        })
    }
        
    
}