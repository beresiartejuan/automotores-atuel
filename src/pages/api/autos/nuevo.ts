import type { APIRoute } from 'astro';
import { unauthorized } from "../../helper/response";
import { createNewCarTemplate } from "../../../db";

export const prerender = false;

export const POST: APIRoute = async ({ cookies }) => {

    if (!cookies.has('authenticated')) return unauthorized();

    const { carData } = await createNewCarTemplate();

    return new Response(JSON.stringify({
        link: `/autos/${carData.id}`
    }), { status: 200 });
}