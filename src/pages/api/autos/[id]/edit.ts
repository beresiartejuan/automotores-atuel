import type { APIRoute } from 'astro';
import { turso } from '../../../../db';
import { response, unauthorized } from "../../../helper/response";

export const prerender = false;

export const POST: APIRoute = async ({ request, params, cookies }) => {
    if (!cookies.has('authenticated')) return unauthorized();

    const car_id = params.id as string;
    const formData = await request.formData();

    // Información del auto
    const name = formData.get("name")!.toString();
    const model = formData.get("model")!.toString();
    const price = parseFloat(formData.get("price")!.toString());
    const description = formData.get("description")!.toString();
    const year = parseInt(formData.get("year")!.toString());
    const is_used = formData.has("is_used") ? 1 : 0;
    const published = formData.has("published") ? 1 : 0;

    // Información técnica
    const carInfo = {
        mileage: formData.get("mileage")!.toString(),
        traction: formData.get("traction")!.toString(),
        fuel_type: formData.get("fuel_type")!.toString(),
        transmission_type: formData.get("transmission_type")!.toString(),
        fuel_tank_capacity_liters: formData.get("fuel_tank_capacity_liters")!.toString(),
        engine_type: formData.get("engine_type")!.toString(),
        parking_assist: formData.has("parking_assist") ? 1 : 0,
        push_button_start: formData.has("push_button_start") ? 1 : 0,
        remote_locking: formData.has("remote_locking") ? 1 : 0,
        connectivity: formData.has("connectivity") ? 1 : 0,
        satellite_navigation: formData.has("satellite_navigation") ? 1 : 0,
        screens: formData.has("screens") ? 1 : 0,
        panoramic_roof: formData.has("panoramic_roof") ? 1 : 0,
        air_conditioning: formData.has("air_conditioning") ? 1 : 0,
        fog_lights: formData.has("fog_lights") ? 1 : 0,
        bluetooth: formData.has("bluetooth") ? 1 : 0,
    };

    // Fotos
    const photoUrls = formData.getAll("photo_url[]").filter(url => typeof url === "string" && url.length > 0);

    console.log([name, model, price, description, year, is_used, published, car_id]);

    try {
        // Actualiza el auto
        await turso.execute({
            sql: `
        UPDATE cars 
        SET name = ?, model = ?, price = ?, description = ?, year = ?, is_used = ?, published = ?
        WHERE id = ?`,
            args: [name, model, price, description, year, is_used, published, car_id],
        });

        // Actualiza la información técnica
        await turso.execute({
            sql: `
        UPDATE car_info 
        SET mileage = ?, traction = ?, fuel_type = ?, transmission_type = ?, 
            fuel_tank_capacity_liters = ?, engine_type = ?, 
            parking_assist = ?, push_button_start = ?, remote_locking = ?, 
            connectivity = ?, satellite_navigation = ?, screens = ?, 
            panoramic_roof = ?, air_conditioning = ?, fog_lights = ?, bluetooth = ? 
        WHERE car_id = ?`,
            args: [...Object.values(carInfo), car_id],
        });

        // Actualiza las fotos
        await turso.execute({
            sql: "DELETE FROM car_photos WHERE car_id = ?",
            args: [car_id],
        });

        for (const photoUrl of photoUrls) {
            await turso.execute({
                sql: `
          INSERT INTO car_photos (car_id, photo_url, is_main) 
          VALUES (?, ?, ?)`,
                args: [car_id, photoUrl.toString(), 0],
            });
        }

        return response("Auto actualizado correctamente", 200);
    } catch (error) {
        console.error("Error al actualizar el auto:", error);
        return response("Error interno del servidor", 500);
    }
};
