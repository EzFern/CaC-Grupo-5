// database.js

export const productos = {
    hamburguesas: [
        { 
            id: '1',      
            titulo: 'Hamburguesa con queso',
            img: new URL('https://www.toque.com.ar/sistema/uploads/571/articulos/693526547812.jpeg'),
            descripcion: 'Una hamburguesa clásica.',
            combo: 'papas fritas',
            ingredientes: 'Paty, cheddar, tomate, lechuga, cebolla',
            precio: 3500,
            descuento: 10, 
            stock: 8,
            imperdible: true
        },
        {
            id: '2',
            titulo: 'Hamburguesa de Pollo',
            img: new URL('https://www.toque.com.ar/sistema/uploads/571/articulos/693526547812.jpeg'),
            descripcion: 'Una deliciosa hamburguesa de pollo.',
            combo: 'ensalada',
            ingredientes: 'Pechuga de pollo, queso, lechuga, tomate',
            precio: 4000,
            descuento: 15,
            stock: 10,
            imperdible: false
        },
        {
            id: '3',
            titulo: 'Hamburguesa Vegana',
            img: new URL('https://www.toque.com.ar/sistema/uploads/571/articulos/693526547812.jpeg'),
            descripcion: 'Una opción vegana y saludable.',
            combo: 'batatas fritas',
            ingredientes: 'Patty vegana, queso vegano, aguacate, tomate',
            precio: 3800,
            descuento: 12,
            stock: 6,
            imperdible: true
        },
        {
            id: '4',
            titulo: 'Hamburguesa Tex-Mex',
            img: new URL('https://www.toque.com.ar/sistema/uploads/571/articulos/693526547812.jpeg'),
            descripcion: 'Una explosión de sabores inspirada en la cocina tex-mex.',
            combo: 'Nachos',
            ingredientes: 'Carne sazonada, queso cheddar, guacamole, jalapeños',
            precio: 4200,
            descuento: 8,
            stock: 12,
            imperdible: false
        },
        {
            id: '5',
            titulo: 'Hamburguesa BBQ Bacon',
            img: new URL('https://www.toque.com.ar/sistema/uploads/571/articulos/693526547812.jpeg'),
            descripcion: 'Perfecta para los amantes del sabor ahumado y el bacon crujiente.',
            combo: 'Aros de cebolla',
            ingredientes: 'Carne, queso, bacon, salsa BBQ',
            precio: 4600,
            descuento: 10,
            stock: 9,
            imperdible: true
        },
        {
            id: '6',
            titulo: 'Hamburguesa Hawaiana',
            img: new URL('https://www.toque.com.ar/sistema/uploads/571/articulos/693526547812.jpeg'),
            descripcion: 'Una opción tropical con piña y salsa agridulce.',
            combo: 'Papas a la francesa',
            ingredientes: 'Carne, queso suave, piña, lechuga',
            precio: 4000,
            descuento: 12,
            stock: 7,
            imperdible: false
        },
        {
            id: '7',
            titulo: 'Hamburguesa Deluxe',
            img: new URL('https://www.toque.com.ar/sistema/uploads/571/articulos/693526547812.jpeg'),
            descripcion: 'Una hamburguesa gourmet con ingredientes premium.',
            combo: 'Ensalada de rúcula',
            ingredientes: 'Carne Wagyu, queso brie, cebolla caramelizada',
            precio: 5500,
            descuento: 15,
            stock: 5,
            imperdible: true
        },
        {
            id: '8',
            titulo: 'Hamburguesa de Salmón',
            img: new URL('https://www.toque.com.ar/sistema/uploads/571/articulos/693526547812.jpeg'),
            descripcion: 'Una opción saludable con salmón fresco.',
            combo: 'Ensalada de aguacate',
            ingredientes: 'Salmón, queso crema, alcaparras, pepinillos',
            precio: 4800,
            descuento: 10,
            stock: 10,
            imperdible: false
        }

    ],
    pizzas: [
            {
                id: '1',
                titulo: 'Pizza Margarita',
                img: new URL('https://example.com/pizza1.jpeg'),
                descripcion: 'Una clásica pizza italiana con tomate, mozzarella y albahaca.',
                combo: 'Refresco',
                ingredientes: 'Mozzarella, tomate, albahaca',
                precio: 3200,
                descuento: 8,
                stock: 10,
                imperdible: true
            },
            {
                id: '2',
                titulo: 'Pizza Pepperoni',
                img: new URL('https://example.com/pizza2.jpeg'),
                descripcion: 'Una deliciosa pizza con abundante pepperoni.',
                combo: 'Papas fritas',
                ingredientes: 'Mozzarella, pepperoni, tomate',
                precio: 3600,
                descuento: 10,
                stock: 8,
                imperdible: true
            },
            {
                id: '3',
                titulo: 'Pizza Vegetariana',
                img: new URL('https://example.com/pizza3.jpeg'),
                descripcion: 'Una opción saludable con variedad de vegetales frescos.',
                combo: 'Ensalada verde',
                ingredientes: 'Mozzarella, champiñones, pimientos, aceitunas',
                precio: 3400,
                descuento: 12,
                stock: 12,
                imperdible: true
            },
            {
                id: '4',
                titulo: 'Pizza BBQ Chicken',
                img: new URL('https://example.com/pizza4.jpeg'),
                descripcion: 'Una pizza con pollo a la barbacoa y salsa ranch.',
                combo: 'Palitos de queso',
                ingredientes: 'Mozzarella, pollo BBQ, cebolla, salsa ranch',
                precio: 3800,
                descuento: 10,
                stock: 9,
                imperdible: false
            },
            {
                id: '5',
                titulo: 'Pizza Hawaiana',
                img: new URL('https://example.com/pizza5.jpeg'),
                descripcion: 'Una combinación tropical con piña y jamón.',
                combo: 'Refresco',
                ingredientes: 'Mozzarella, piña, jamón',
                precio: 3500,
                descuento: 15,
                stock: 11,
                imperdible: false
            },
            {
                id: '6',
                titulo: 'Pizza Cuatro Quesos',
                img: new URL('https://example.com/pizza6.jpeg'),
                descripcion: 'Una pizza gourmet con una mezcla de cuatro quesos.',
                combo: 'Ensalada de rúcula',
                ingredientes: 'Mozzarella, queso azul, queso de cabra, parmesano',
                precio: 4200,
                descuento: 10,
                stock: 8,
                imperdible: true
            },
            {
                id: '7',
                titulo: 'Pizza BBQ Vegana',
                img: new URL('https://example.com/pizza7.jpeg'),
                descripcion: 'Una opción vegana con pollo vegetal y salsa BBQ.',
                combo: 'Palitos de apio',
                ingredientes: 'Queso vegano, pollo vegetal, cebolla, salsa BBQ',
                precio: 3800,
                descuento: 12,
                stock: 10,
                imperdible: false
            },
            {
                id: '8',
                titulo: 'Pizza Capricciosa',
                img: new URL('https://example.com/pizza8.jpeg'),
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