export const SITEWEB_TITLE = "Automoviles Atuel";
export const SITEWEB_DESCRIPTION = "Grandes oportunidades, cerca de casa.";

export type Car = {
    id: string; // CHAR(36)
    name: string; // VARCHAR(255)
    model: string; // VARCHAR(255)
    price: number; // DECIMAL(8, 2)
    description: string; // TEXT
    year: number; // INT
    isUsed: boolean; // BOOLEAN
    mileage: string; // VARCHAR(255)
    updatedAt: Date; // TIMESTAMP
    createdAt: Date; // TIMESTAMP
};

export type CarPhoto = {
    id: number; // BIGINT UNSIGNED AUTO_INCREMENT
    carId: string; // CHAR(36), foreign key to Car.id
    photoUrl: string; // VARCHAR(255)
    isMain: boolean; // BOOLEAN
};

export type CarInfo = {
    id: number; // BIGINT UNSIGNED AUTO_INCREMENT
    carId: number; // BIGINT, foreign key to Car.id
    traction: string; // VARCHAR(255)
    fuelType: string; // VARCHAR(255)
    transmissionType: string; // VARCHAR(255)
    fuelTankCapacityLiters: number; // INT
    engineType: string; // VARCHAR(255)
};

export type CarWithPhotosAndInfo = Car & {
    photos: CarPhoto[];
    info: CarInfo | null;
};
