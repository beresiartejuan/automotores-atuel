function generateRandomCarName() {
    const brands = ["Toyota", "Ford", "Chevrolet", "Volkswagen", "Fiat", "Peugeot", "Nissan", "Honda", "Renault", "Kia"];
    const models = ["Corolla", "Ranger", "Onix", "Amarok", "Cronos", "208", "Altima", "Civic", "Duster", "Sportage"];
    const randomBrand = brands[Math.floor(Math.random() * brands.length)];
    const randomModel = models[Math.floor(Math.random() * models.length)];
    return `${randomBrand} ${randomModel}`;
}

export function getAllProducts() {
    const cars = [];
    for (let i = 1; i <= 100; i++) {
        cars.push({
            id: i.toString(),
            name: generateRandomCarName(),
            model: (2020 + Math.floor(Math.random() * 5)).toString(), // Model between 2020 and 2024
            image: `/auto.jpg`, // Ensures image between 1 and 10
            used: Math.random() > 0.5, // Randomly used or new
        });
    }
    return cars;
}
