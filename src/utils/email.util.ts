// In email_service.ts
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import environmentConfig from "../constants/environment.constant";

import { SMTPError } from "./error.handler";
export class Email {
  async sendEmail(
    to: string,
    subject: string,
    template: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any,
  ) {
    const transporter = nodemailer.createTransport({
      host: environmentConfig.EMAIL_HOST,
      port: +environmentConfig.EMAIL_PORT,
      secure: false,
      requireTLS: true,
      auth: {
        user: environmentConfig.EMAIL_USERNAME,
        pass: environmentConfig.EMAIL_PASSWORD,
      },
      logger: true,
    });

    try {
      const templatePath = path.join(
        __dirname,
        "../templates",
        template + ".ejs",
      ); // Adjust path as needed
      const templatePath2 = path.join(
        __dirname,
        "../../public/images/pizzashop_logo.png",
      ); // Adjust path as needed
      console.log(templatePath2);
      const html = await ejs.renderFile(templatePath, data);
      const from = '"Pizza Shop" <test.dotnet@etatvasoft.com>';
      const info = await transporter.sendMail({
        // message.From.Add(new MailboxAddress("Pizza Shop", "test.dotnet@etatvasoft.com"));
        from: from,
        //from: '"test.dotnet@etatvasoft.com"',
        to: to,
        subject: subject,
        html: html,
        // attachments: [
        //   {
        //     filename: "pizzashop_logo.png",
        //     path: templatePath2,
        //     cid: "logo", //same cid value as in the html img src
        //   },
        // ], //for the backup purpose
        headers: { "x-myheader": "test header" },
      });

      console.log("Message sent: %s", info.response);
    } catch (error) {
      console.error("Error sending email:", error);

      throw new SMTPError(
        550,
        "Can't send mail - all recipients were rejected: 550-The mail server could not deliver mail to" +
          to +
          "The account 550-or domain may not exist, they may be blacklisted, or missing the proper dns 550 entries.",
      );
    }
  }
}
