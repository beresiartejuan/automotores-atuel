CREATE TABLE `cars`(
    `id` TEXT NOT NULL,  -- SQLite usa TEXT para UUID
    `name` VARCHAR(255) NOT NULL,  -- Manteniendo como VARCHAR
    `model` VARCHAR(255) NOT NULL,  
    `price` REAL NOT NULL,  -- SQLite usa REAL para valores decimales
    `description` TEXT NOT NULL,  
    `year` INTEGER NOT NULL,  -- SQLite usa INTEGER para enteros
    `is_used` INTEGER NOT NULL,  -- SQLite usa INTEGER para BOOLEAN (0 o 1)
    `update_at` TEXT NOT NULL,  -- SQLite usa TEXT para fechas
    `create_at` TEXT NOT NULL,  
    PRIMARY KEY(`id`)
);

CREATE TABLE `car_photos`(
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,  -- SQLite usa INTEGER para auto incremento
    `car_id` TEXT NOT NULL,  -- Relación con la tabla cars
    `photo_url` VARCHAR(255) NOT NULL,  -- Manteniendo como VARCHAR
    `is_main` INTEGER NOT NULL  -- SQLite usa INTEGER para BOOLEAN
);

CREATE TABLE `car_info`(
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,  -- SQLite usa INTEGER para auto incremento
    `car_id` INTEGER NOT NULL,  -- Relación con la tabla cars
    `mileage` VARCHAR(255) NOT NULL,  -- Kilometraje del auto
    `traction` VARCHAR(255) NOT NULL,  -- Tipo de tracción del auto (delantera, trasera, 4x4, etc.)
    `fuel_type` VARCHAR(255) NOT NULL,  -- Tipo de combustible (gasolina, diésel, eléctrico, híbrido, etc.)
    `transmission_type` VARCHAR(255) NOT NULL,  -- Tipo de transmisión (manual, automática, CVT, etc.)
    `fuel_tank_capacity_liters` INTEGER NOT NULL,  -- Capacidad del tanque de combustible en litros
    `engine_type` VARCHAR(255) NOT NULL,  -- Tipo de motor (por ejemplo, 4 cilindros, V6, V8, etc.)
    `parking_assist` INTEGER NOT NULL,  -- Asistente de estacionamiento (0 o 1)
    `push_button_start` INTEGER NOT NULL,  -- Botón de arranque (0 o 1)
    `remote_locking` INTEGER NOT NULL,  -- Cierre a distancia (0 o 1)
    `connectivity` INTEGER NOT NULL,  -- Conectividad (0 o 1)
    `satellite_navigation` INTEGER NOT NULL,  -- Navegador satelital (0 o 1)
    `screens` INTEGER NOT NULL,  -- Pantallas (0 o 1)
    `panoramic_roof` INTEGER NOT NULL,  -- Techo panorámico (0 o 1)
    `air_conditioning` INTEGER NOT NULL,  -- Aire acondicionado (0 o 1)
    `fog_lights` INTEGER NOT NULL,  -- Faros antiniebla (0 o 1)
    `bluetooth` INTEGER NOT NULL  -- Bluetooth (0 o 1)
);