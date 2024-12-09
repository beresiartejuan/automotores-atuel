import type { APIRoute } from 'astro';
import { unauthorized, response } from "../../../helper/response";
import { turso } from '../../../../db';

export const prerender = false;

export const POST: APIRoute = async ({ cookies, params }) => {

    if (!cookies.has('authenticated')) return unauthorized();

    const { id: car_id } = params;

    try {
        await turso.execute({
            sql: "INSERT INTO car_photos (car_id, photo_url, is_main) VALUES (?, ?, ?)",
            args: [car_id!, "https://i.ibb.co/HP8vgMc/car-logo-design-599480-434.png", 0]
        });
    } catch (error) {
        return response("Error", 500);
    }

    return response("Imagen añadida", 200);
}