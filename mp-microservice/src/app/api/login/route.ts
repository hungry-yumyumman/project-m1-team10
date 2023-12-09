import prisma from "@/app/lib/prisma";
import { hashPassword } from "../createuser/[...params]/route";

export async function GET(request: Request, context: { params: any }) {

}

export async function POST(request: Request, context: { params: any }) {
    try {
        const { email, password } = await request.json();

        const user = await prisma.user.findFirst({
            where: { email: email },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
                image: true,
            },
        });
        if (user && user.password === hashPassword(password)) {
            return Response.json({
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.image
            });
        } else {
            return Response.json({ error: "Invalid credentials" });
        }
    } catch (error) {
        return Response.json({ error: error });
    }
}