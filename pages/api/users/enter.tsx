// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from "../../../libs/server/client"
import withHandler from '@/libs/server/withHandler';

type Data = {
  name: string
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);
  res.status(200).end();
}

export default withHandler("POST", handler);