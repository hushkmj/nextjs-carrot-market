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
  const user = phone ? { phone: Number(phone) } : { email }
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
  console.log(token);
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