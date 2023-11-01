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
        name: 'MI DÍA',
        picture: 'myDay.png',
        parentCategory: 'HABITACIONES'
    },
   {
       parentCategory: 'COCINA',
       name: 'BEBIDA',
       picture: 'drinks.png'
   },
   {
      parentCategory: 'COCINA',
      name: 'COMIDA',
      picture: 'food.png'
  },
    {
        name: 'FRUTA',
        picture: 'fruit.png',
        parentCategory: 'COMIDA'
    },
    {
        name: 'AGUA',
        picture: 'water.png',
        parentCategory: 'BEBIDA'
    },
    {
        name: 'PASTILLAS',
        picture: 'pills.png',
        parentCategory: 'COCINA'
    },
    {
        name: 'PAN',
        picture: 'bread.png',
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
    },
     {
         parentCategory: 'BEBIDA',
         name: 'ACTIMEL',
         picture: 'actimel.png'
     },
       {
           parentCategory: 'BEBIDA',
           name: 'CAFÉ',
           picture: 'coffee.png'
       },
       {
           parentCategory: 'BEBIDA',
           name: 'INFUSIÓN',
           picture: 'tea.png'
       },
       {
           parentCategory: 'BEBIDA',
           name: 'CERVEZA',
           picture: 'beer.png'
       },
       {
           parentCategory: 'BAÑO',
           name: 'VÁTER',
           picture: 'toilet.png'
       },
       {
           parentCategory: 'BAÑO',
           name: 'DUCHA',
           picture: 'shower1.png'
       },
       {
           parentCategory: 'BAÑO',
           name: 'LAVABO',
           picture: 'sink.png'
       },
       {
           parentCategory: 'BAÑO',
           name: 'AFEITAR',
           picture: 'shaver.png'
       },
       {
           parentCategory: 'BAÑO',
           name: 'CEPILLO DE DIENTES',
           picture: 'toothBrush.png'
       },
       {
           parentCategory: 'BAÑO',
           name: 'CORTAR UÑAS',
           picture: 'cutFingernails.png'
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