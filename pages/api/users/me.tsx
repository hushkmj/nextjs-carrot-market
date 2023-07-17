// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute} from "iron-session/next"
import withHandler, { ResponseType } from '@/libs/server/withHandler';
import client from "@/libs/server/client";

declare module "iron-session" {
    interface IronSessionData {
        user?: {
            id:number;
        }
    }
}
async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    console.log(req.session.user);
    const profile = await client.user.findUnique({
        where: {id: req.session.user?.id},
    });
    res.status(200).json({
        ok: true,
        profile,
    });
}
export default withIronSessionApiRoute(withHandler("GET", handler), {
    cookieName: "carrotsession",
    password: "12345678901234567890123456789012",
});