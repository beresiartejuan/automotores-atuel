import type { APIRoute } from 'astro';
import { getAdmins } from '../../db';
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { has } from "../helper/validate";
import { response } from "../helper/response";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {

    const body = await request.json();

    if (!has(body, "username")) {
        return response("Por favor, ingrese un nombre de usuario.", 404);
    }

    if (!has(body, "password")) {
        return response("Por favor, ingrese una contraseña.", 404);
    };

    const admins = await getAdmins();

    const user = admins.find(admin => admin.name === body.username);

    const isCorrectPassword = await compare(body.password, user ? user.password as string : "");

    if (!user || !isCorrectPassword) {
        return response("Usuario o contraseña incorrectas.", 401);
    }

    const sing = jwt.sign(user, process.env.PRIVATE_KEY as string);

    cookies.set('authenticated', sing, {
        httpOnly: true,
        path: "/"
    });

    return response("Inicio de sessión exitoso.", 200);
}