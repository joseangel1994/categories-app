// hacer que todo este en un nivel y filtrar por parent category
const data3 = [
    {
        name: 'COCINA',
        picture: 'cocina.png',
        parentCategory: 'HABITACIONES'
    },
    {
        name: 'SALÓN',
        picture: 'salon.png',
        parentCategory: 'HABITACIONES'
    },
    {
        name: 'BAÑO',
        picture: 'bano.png',
        parentCategory: 'HABITACIONES'
    },
    {
        name: 'DORMITORIO',
        picture: 'dormitorio.png',
        parentCategory: 'HABITACIONES'
    },
    {
        name: 'FRUTA',
        picture: 'fruit.png',
        parentCategory: 'COCINA'
    },
    {
        name: 'BEBIDA',
        picture: 'bebidda.png',
        parentCategory: 'COCINA'
    },
    {
        name: 'Agua',
        picture: 'agua.png',
        parentCategory: 'BEBIDA'
    },
    {
        name: 'FRUTA',
        picture: 'fruta.png',
        parentCategory: 'COMIDA'
    },
    {
        parentCategory: 'FRUTA',
        name: 'Manzana',
        picture: 'manzana.png'
    },
    {
        parentCategory: 'FRUTA',
        name: 'Platano',
        picture: 'platano.png'
    },
    {
        parentCategory: 'FRUTA',
        name: 'Pera',
        picture: 'pera.png'
    },
    {
        parentCategory: 'FRUTA',
        name: 'Naranja',
        picture: 'naranja.png'
    }
]


const data2 = [
    {
        name: 'COCINA',
        picture: 'cocina.png',
        parentCategory: 'GENERAL',
        subcategories: [
            {
                name: 'COMIDA',
                picture: 'comida.png',
                parentCategory: 'COCINA',
                subcategories: [
                    {
                        name: 'FRUTA',
                        picture: 'fruta.png',
                        parentCategory: 'COMIDA',
                        subcategories: [
                            {
                                parentCategory: 'FRUTA',
                                name: 'Manzana',
                                picture: 'manzana.png'
                            },
                            {
                                parentCategory: 'FRUTA',
                                name: 'Platano',
                                picture: 'platano.png'
                            },
                            {
                                parentCategory: 'FRUTA',
                                name: 'Pera',
                                picture: 'pera.png'
                            },
                            {
                                parentCategory: 'FRUTA',
                                name: 'Naranja',
                                picture: 'naranja.png'
                            }
                        ]
                    }
                ]
            },
            {
                parentCategory: 'COCINA',
                name: 'BEBIDA',
                picture: 'bebida.png'
            }
        ]
    }
]

const data = [
    {
        category: 'COMIDA',
        name: 'Manzana',
        picture: 'manzana.png'
    },
    {
        category: 'COMIDA',
        name: 'Platano',
        picture: 'platano.png'
    },
    {
        category: 'COMIDA',
        name: 'Pera',
        picture: 'pera.png'
    },
    {
        category: 'COMIDA',
        name: 'Naranja',
        picture: 'naranja.png'
    }
]

export default data3