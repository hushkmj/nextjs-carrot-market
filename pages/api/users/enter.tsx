// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from "@/libs/server/client"
import withHandler from '@/libs/server/withHandler';

type Data = {
  name: string
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: Number(phone) } : { email }
  const user = await client.user.upsert({
    where: {
      ...payload
    },
    create: {
      name: "Anonymous",
      ...payload
    },
    update: {},
  });
  console.log(user)
  /*   if (email) {
      console.log("found it")
      user = await client.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        console.log("Did not find. Will create")
        user = await client.user.create({
          data: {
            name: "Anonymous",
            email,
          }
        })
      }
      console.log(user);
    }
    if (phone) {
      console.log("found it")
      user = await client.user.findUnique({
        where: {
          phone: +phone,
        },
      });
      if (!user) {
        console.log("Did not find. Will create")
        user = await client.user.create({
          data: {
            name: "Anonymous",
            phone: +phone,
          }
        })
      }
      console.log(user);
    } */
  res.status(200).end();
}

export default withHandler("POST", handler);