// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from "../../libs/client"

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  client.user.create({
    data: {
      email: "hushkmj@naver.com",
      name: "zeroscrap",
    }
  })

  res.status(200).json({ name: 'John Doe' })
}
