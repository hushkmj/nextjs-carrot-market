// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute} from "iron-session/next"
import withHandler, { ResponseType } from '@/libs/server/withHandler';
import client from "@/libs/server/client";
import { withApiSession } from '@/libs/server/withSession';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    const profile = await client.user.findUnique({
        where: {id: req.session.user?.id},
    });
    res.status(200).json({
        ok: true,
        profile,
    });
}
export default withApiSession(
    withHandler({
        method:"GET",
        handler,
    })
);