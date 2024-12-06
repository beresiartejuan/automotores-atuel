import type { APIRoute } from 'astro';
import { turso } from '../../db';
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
    const body = await request.json();

    if (!Object.keys(body).includes("username")) {
        return new Response(JSON.stringify({
            message: "Por favor, ingrese un nombre de usuario."
        }), { status: 404 });
    }

    if (!Object.keys(body).includes("password")) {
        return new Response(JSON.stringify({
            message: "Por favor, ingrese una contraseña."
        }), { status: 404 });
    }

    const admins = await turso.execute("SELECT * FROM admins");

    let isCorrectPassword = false;


    for (const admin of admins.rows) {
        isCorrectPassword = await compare(body.password, admin.password as string);

        if (isCorrectPassword) {
            const sing = jwt.sign(admin, process.env.PRIVATE_KEY as string);

            cookies.set('authenticated', sing, {
                httpOnly: true,
                path: "/"
            });
        }
    }

    if (!isCorrectPassword) {
        return new Response(JSON.stringify({
            message: "Usuario o contraseña incorrectas."
        }), { status: 401 });
    }

    return new Response(JSON.stringify({
        message: "Inicio de sessión exitoso."
    }), { status: 200 });
}