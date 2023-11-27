// database.js

export const productos = {
    hamburguesas: [
        { 
            id: 'H1',      
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
            id: 'H2',
            titulo: 'Hamburguesa de Pollo',
            img: new URL('http://recetario.lavillita.com.mx/assets/images/recetas/Hamburguesa-pollo.jpg'),
            descripcion: 'Una deliciosa hamburguesa de pollo.',
            combo: 'ensalada',
            ingredientes: 'Pechuga de pollo, queso, lechuga, tomate',
            precio: 4000,
            descuento: 15,
            stock: 10,
            imperdible: false
        },
        {
            id: 'H3',
            titulo: 'Hamburguesa Vegana',
            img: new URL('https://i0.wp.com/veganista.es/wp-content/uploads/2018/04/IMG_20180424_141630.jpg'),
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
            img: new URL('https://controlpublicidad.com/uploads/2016/09/burger-122319.jpg'),
            descripcion: 'Una explosión de sabores inspirada en la cocina tex-mex.',
            combo: 'Nachos',
            ingredientes: 'Carne sazonada, queso cheddar, guacamole, jalapeños',
            precio: 4200,
            descuento: 8,
            stock: 12,
            imperdible: false
        },
        {
            id: 'H5',
            titulo: 'Hamburguesa BBQ Bacon',
            img: new URL('https://elsolecito.com/wp-content/uploads/2019/04/burg-menu3.jpg'),
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
            img: new URL('https://okdiario.com/img/recetas/2016/12/11/hamburguesa-de-hawai.jpg'),
            descripcion: 'Una opción tropical con piña y salsa agridulce.',
            combo: 'Papas a la francesa',
            ingredientes: 'Carne, queso suave, piña, lechuga',
            precio: 4000,
            descuento: 12,
            stock: 7,
            imperdible: false
        },
        {
            id: 'H7',
            titulo: 'Hamburguesa Deluxe',
            img: new URL('https://www.publicdomainpictures.net/pictures/240000/nahled/cheeseburger-deluxe.jpg'),
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
            img: new URL('https://e00-xlk-cooking-elmundo.uecdn.es/files/gallery_image_mobile_cover/uploads/2023/02/28/63fe7d22d4698.jpeg'),
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
                id: 'P1',
                titulo: 'Pizza Margarita',
                img: new URL('https://www.paulinacocina.net/wp-content/uploads/2023/09/pizza-margherita-paulina-cocina-recetas.jpg'),
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
                img: new URL('https://2trendies.com/hero/2023/04/pizzapepperoni.jpg'),
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
                img: new URL('https://cdn.colombia.com/sdi/2023/02/09/celebre-el-dia-de-la-pizza-con-una-receta-deliciosa-y-vegetariana-1116994.jpg'),
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
                img: new URL('https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/28/1/FNM_040112-Copy-That-002_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541346030.jpeg'),
                descripcion: 'Una pizza con pollo a la barbacoa y salsa ranch.',
                combo: 'Palitos de queso',
                ingredientes: 'Mozzarella, pollo BBQ, cebolla, salsa ranch',
                precio: 3800,
                descuento: 10,
                stock: 9,
                imperdible: false
            },
            {
                id: 'P5',
                titulo: 'Pizza Hawaiana',
                img: new URL('https://i.pinimg.com/736x/2d/15/00/2d15009cab2b7b82d880d6831cb45523.jpg'),
                descripcion: 'Una combinación tropical con piña y jamón.',
                combo: 'Refresco',
                ingredientes: 'Mozzarella, piña, jamón',
                precio: 3500,
                descuento: 15,
                stock: 11,
                imperdible: false
            },
            {
                id: 'P6',
                titulo: 'Pizza Cuatro Quesos',
                img: new URL('https://assets.unileversolutions.com/recipes-v2/216503.jpg'),
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
                img: new URL('https://weloversize.com/wp-content/uploads/2020/07/shutterstock_409592185.jpg'),
                descripcion: 'Una opción vegana con pollo vegetal y salsa BBQ.',
                combo: 'Palitos de apio',
                ingredientes: 'Queso vegano, pollo vegetal, cebolla, salsa BBQ',
                precio: 3800,
                descuento: 12,
                stock: 10,
                imperdible: false
            },
            {
                id: 'P8',
                titulo: 'Pizza Capricciosa',
                img: new URL('https://spicygoulash.com/wp-content/uploads/pizza-capricciosa.jpg'),
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