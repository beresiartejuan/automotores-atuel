import type { APIRoute } from 'astro';
import { turso } from '../../../../db';
import { response, unauthorized } from "../../../helper/response";

export const prerender = false;

export const POST: APIRoute = async ({ params, cookies }) => {

    if (!cookies.has('authenticated')) return unauthorized();

    const car_id = params.id as string;

    try {
        // Eliminar fotos asociadas al auto
        await turso.execute({
            sql: "DELETE FROM car_photos WHERE car_id = ?",
            args: [car_id],
        });

        // Eliminar información técnica del auto
        await turso.execute({
            sql: "DELETE FROM car_info WHERE car_id = ?",
            args: [car_id],
        });

        // Eliminar el auto
        await turso.execute({
            sql: "DELETE FROM cars WHERE id = ?",
            args: [car_id],
        });

        return response("Auto eliminado correctamente", 200);
    } catch (error) {
        console.error("Error al eliminar el auto:", error);
        return response("Error interno del servidor", 500);
    }
};
