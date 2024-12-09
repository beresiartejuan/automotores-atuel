import { createClient } from "@libsql/client";

export const turso = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const getCarsWithFilters = async (filter: string) => {
    return (await turso.execute("SELECT * FROM cars WHERE published = 1" + ` AND ${filter}`)).rows;
}

export const getAllPublishedCars = async () => {
    return (await turso.execute("SELECT * FROM cars WHERE published = 1")).rows;
}

export const getAllCars = async () => {
    return (await turso.execute("SELECT * FROM cars")).rows;
}

export const getAdmins = async () => {
    return (await turso.execute("SELECT * FROM admins")).rows;
}

export const createNewCarTemplate = async () => {
    const carId = crypto.randomUUID();  // Genera un UUID único

    const carData = {
        id: carId,
        name: 'Nombre del Auto',
        model: 'Modelo del Auto',
        price: 25000.00,
        description: 'Descripción del auto',
        year: 2022,
        is_used: 0,  // 0 para no usado, 1 para usado
        update_at: new Date().toISOString(),
        create_at: new Date().toISOString(),
        published: 0  // 0 para no publicado, 1 para publicado
    };

    const carInfoData = {
        car_id: carId,
        mileage: '50000 km',
        traction: 'Delantera',
        fuel_type: 'Gasolina',
        transmission_type: 'Automática',
        fuel_tank_capacity_liters: 50,
        engine_type: '4 Cilindros',
        parking_assist: 1,
        push_button_start: 1,
        remote_locking: 1,
        connectivity: 1,
        satellite_navigation: 1,
        screens: 1,
        panoramic_roof: 1,
        air_conditioning: 1,
        fog_lights: 1,
        bluetooth: 1
    };

    const IMAGE_PREFER = "https://i.ibb.co/HP8vgMc/car-logo-design-599480-434.png";

    try {
        // Inserta el auto
        await turso.execute({
            sql: `
                INSERT INTO cars 
                (id, name, model, price, description, year, is_used, update_at, create_at, published) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `,
            args: Object.values(carData)
        });

        // Inserta la información del auto
        await turso.execute({
            sql: `
                INSERT INTO car_info 
                (car_id, mileage, traction, fuel_type, transmission_type, fuel_tank_capacity_liters, 
                engine_type, parking_assist, push_button_start, remote_locking, connectivity, 
                satellite_navigation, screens, panoramic_roof, air_conditioning, fog_lights, bluetooth) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `,
            args: Object.values(carInfoData)
        });

        await turso.execute({
            sql: "INSERT INTO car_photos (car_id, photo_url, is_main) VALUES (?, ?, ?)",
            args: [carData.id, IMAGE_PREFER, true]
        });

        console.log('Auto y detalles creados con éxito');
        return { carData, carInfoData };
    } catch (error) {
        console.error('Error al crear el auto y sus detalles:', error);
        throw error;
    }
};

export function generateMockCars(count: number) {
    const makes = ["Toyota", "Ford", "Honda", "Chevrolet", "BMW"];
    const models = ["Corolla", "Mustang", "Civic", "Camaro", "X5"];
    const years = [2020, 2021, 2022, 2023, 2024];
    const mileages = ["10,000 km", "20,000 km", "30,000 km", "40,000 km", "50,000 km"];

    const cars = Array.from({ length: count }, (_, index) => {
        const isUsed = Math.random() > 0.5; // 50% chance of being used
        return {
            id: crypto.randomUUID(), // Generates a unique ID
            name: `${makes[index % makes.length]} ${models[index % models.length]}`,
            model: models[index % models.length],
            year: years[index % years.length],
            isUsed: isUsed,
            mileage: isUsed ? mileages[index % mileages.length] : "0km",
        };
    });

    return cars;
}