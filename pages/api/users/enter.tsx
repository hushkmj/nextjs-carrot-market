// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import withHandler, { ResponseType } from '@/libs/server/withHandler';
import client from "@/libs/server/client";
import twilio from "twilio";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user
          },
          create: {
            name: "Anonymous",
            ...user
          },
        }
      }
    }
  });
  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   to: process.env.MY_PHONE!,
    //   body: `Your login token is ${payload}`,
    // });
    // console.log(message);
  } else if (email) {
    // const email = await mail.send({
    //   from: "hushkmj@naver.com",
    //   to: "hushkmj@naver.com",
    //   subject: "Your carrot Market Verification Email",
    //   text : `Your token is ${payload}`,
    //   html: `<strong>Your token is ${payload}</strong>`
    // });
    // console.log(email);
  }
  return res.status(200).json({ ok: true, });
}

export default withHandler({
  method:"POST",
  handler,
  isPrivate:false
})