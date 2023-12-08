// database_deploy.js

export const productos = {
    hamburguesas: [
        { 
            id: 'H1',      
            titulo: 'Hamburguesa con queso',
            img: "/CaC-Grupo-5/assets/comidas/h1.jpg",
            descripcion: 'Una hamburguesa clásica.',
            combo: 'papas fritas',
            ingredientes: 'Paty, cheddar, tomate, lechuga, cebolla',
            precio: 3500,
            descuento: 10, 
            stock: 8,
            imperdible: true
        },
        {
            id: 'H2',
            titulo: 'Hamburguesa de Pollo',
            img: "/CaC-Grupo-5/assets/comidas/h2.jpg",
            descripcion: 'Una deliciosa hamburguesa de pollo.',
            combo: 'ensalada',
            ingredientes: 'Pechuga de pollo, queso, lechuga, tomate',
            precio: 4000,
            descuento: 15,
            stock: 10,
            imperdible: true
        },
        {
            id: 'H3',
            titulo: 'Hamburguesa Vegana',
            img: "/CaC-Grupo-5/assets/comidas/h3.jpg",
            descripcion: 'Una opción vegana y saludable.',
            combo: 'batatas fritas',
            ingredientes: 'Patty vegana, queso vegano, aguacate, tomate',
            precio: 3800,
            descuento: 12,
            stock: 6,
            imperdible: true
        },
        {
            id: 'H4',
            titulo: 'Hamburguesa Tex-Mex',
            img: "/CaC-Grupo-5/assets/comidas/h4.jpg",
            descripcion: 'Una explosión de sabores inspirada en la cocina tex-mex.',
            combo: 'Nachos',
            ingredientes: 'Carne sazonada, queso cheddar, guacamole, jalapeños',
            precio: 4200,
            descuento: 8,
            stock: 12,
            imperdible: true
        },
        {
            id: 'H5',
            titulo: 'Hamburguesa BBQ Bacon',
            img: "/CaC-Grupo-5/assets/comidas/h5.jpg",
            descripcion: 'Perfecta para los amantes del sabor ahumado y el bacon crujiente.',
            combo: 'Aros de cebolla',
            ingredientes: 'Carne, queso, bacon, salsa BBQ',
            precio: 4600,
            descuento: 10,
            stock: 9,
            imperdible: true
        },
        {
            id: 'H6',
            titulo: 'Hamburguesa Hawaiana',
            img: "/CaC-Grupo-5/assets/comidas/h6.jpg",
            descripcion: 'Una opción tropical con piña y salsa agridulce.',
            combo: 'Papas a la francesa',
            ingredientes: 'Carne, queso suave, piña, lechuga',
            precio: 4000,
            descuento: 12,
            stock: 7,
            imperdible: true
        },
        {
            id: 'H7',
            titulo: 'Hamburguesa Deluxe',
            img: "/CaC-Grupo-5/assets/comidas/h7.jpg",
            descripcion: 'Una hamburguesa gourmet con ingredientes premium.',
            combo: 'Ensalada de rúcula',
            ingredientes: 'Carne Wagyu, queso brie, cebolla caramelizada',
            precio: 5500,
            descuento: 15,
            stock: 5,
            imperdible: true
        },
        {
            id: 'H8',
            titulo: 'Hamburguesa de Salmón',
            img: "/CaC-Grupo-5/assets/comidas/h8.jpg",
            descripcion: 'Una opción saludable con salmón fresco.',
            combo: 'Ensalada de aguacate',
            ingredientes: 'Salmón, queso crema, alcaparras, pepinillos',
            precio: 4800,
            descuento: 10,
            stock: 10,
            imperdible: true
        }

    ],
    pizzas: [
            {
                id: 'P1',
                titulo: 'Pizza Margarita',
                img: "/CaC-Grupo-5/assets/comidas/p1.jpg",
                descripcion: 'Una clásica pizza italiana con tomate, mozzarella y albahaca.',
                combo: 'Refresco',
                ingredientes: 'Mozzarella, tomate, albahaca',
                precio: 3200,
                descuento: 8,
                stock: 10,
                imperdible: true
            },
            {
                id: 'P2',
                titulo: 'Pizza Pepperoni',
                img: "/CaC-Grupo-5/assets/comidas/p2.jpg",
                descripcion: 'Una deliciosa pizza con abundante pepperoni.',
                combo: 'Papas fritas',
                ingredientes: 'Mozzarella, pepperoni, tomate',
                precio: 3600,
                descuento: 10,
                stock: 8,
                imperdible: true
            },
            {
                id: 'P3',
                titulo: 'Pizza Vegetariana',
                img: "/CaC-Grupo-5/assets/comidas/p3.jpg",
                descripcion: 'Una opción saludable con variedad de vegetales frescos.',
                combo: 'Ensalada verde',
                ingredientes: 'Mozzarella, champiñones, pimientos, aceitunas',
                precio: 3400,
                descuento: 12,
                stock: 12,
                imperdible: true
            },
            {
                id: 'P4',
                titulo: 'Pizza BBQ Chicken',
                img: "/CaC-Grupo-5/assets/comidas/p4.jpg",
                descripcion: 'Una pizza con pollo a la barbacoa y salsa ranch.',
                combo: 'Palitos de queso',
                ingredientes: 'Mozzarella, pollo BBQ, cebolla, salsa ranch',
                precio: 3800,
                descuento: 10,
                stock: 9,
                imperdible: true
            },
            {
                id: 'P5',
                titulo: 'Pizza Hawaiana',
                img: "/CaC-Grupo-5/assets/comidas/p5.jpg",
                descripcion: 'Una combinación tropical con piña y jamón.',
                combo: 'Refresco',
                ingredientes: 'Mozzarella, piña, jamón',
                precio: 3500,
                descuento: 15,
                stock: 11,
                imperdible: true
            },
            {
                id: 'P6',
                titulo: 'Pizza Cuatro Quesos',
                img: "/CaC-Grupo-5/assets/comidas/p6.jpg",
                descripcion: 'Una pizza gourmet con una mezcla de cuatro quesos.',
                combo: 'Ensalada de rúcula',
                ingredientes: 'Mozzarella, queso azul, queso de cabra, parmesano',
                precio: 4200,
                descuento: 10,
                stock: 8,
                imperdible: true
            },
            {
                id: 'P7',
                titulo: 'Pizza BBQ Vegana',
                img: "/CaC-Grupo-5/assets/comidas/p7.jpg",
                descripcion: 'Una opción vegana con pollo vegetal y salsa BBQ.',
                combo: 'Palitos de apio',
                ingredientes: 'Queso vegano, pollo vegetal, cebolla, salsa BBQ',
                precio: 3800,
                descuento: 12,
                stock: 10,
                imperdible: true
            },
            {
                id: 'P8',
                titulo: 'Pizza Capricciosa',
                img: "/CaC-Grupo-5/assets/comidas/p8.jpg",
                descripcion: 'Una pizza clásica con alcachofas y jamón.',
                combo: 'Refresco',
                ingredientes: 'Mozzarella, tomate, jamón, alcachofas',
                precio: 4000,
                descuento: 15,
                stock: 9,
                imperdible: true
            }
    ],
  };