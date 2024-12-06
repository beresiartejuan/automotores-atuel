import { createClient } from "@libsql/client";

export const turso = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
});

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