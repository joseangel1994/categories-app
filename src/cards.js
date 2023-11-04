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
        name: 'CÓMO ME SIENTO',
        picture: 'feelings.png',
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
       },
       {
          parentCategory: 'VÁTER',
          name: 'PIPÍ',
          picture: 'orinar.png'
      },
      {
         parentCategory: 'VÁTER',
         name: 'CACA',
         picture: 'caca.png'
     },
       {
           parentCategory: 'SALÓN',
           name: 'TELEVISIÓN',
           picture: 'TV.png'
       },
       {
             parentCategory: 'SALÓN',
             name: 'MANDO DE LA TELE',
             picture: 'remoteControl.png'
         },
       {
           parentCategory: 'SALÓN',
           name: 'RADIO',
           picture: 'radio.png'
       },
       {
          parentCategory: 'SALÓN',
          name: 'MANTITA',
          picture: 'blanket.png'
      },
       {
           parentCategory: 'SALÓN',
           name: 'LÁMPARA',
           picture: 'lamp.png'
       },
       {
          parentCategory: 'SALÓN',
          name: 'PERSIANA',
          picture: 'persiana.png'
      },
       {
           parentCategory: 'DORMITORIO',
           name: 'CAMA',
           picture: 'bed.png'
       },
       {
           parentCategory: 'DORMITORIO',
           name: 'CARGADOR',
           picture: 'charger1.png'
       },
       {
           parentCategory: 'DORMITORIO',
           name: 'RELOJ',
           picture: 'watch.png'
       },
       {
           parentCategory: 'DORMITORIO',
           name: 'SOMBRERO',
           picture: 'hat.png'
       },
       {
           parentCategory: 'DORMITORIO',
           name: 'PIJAMA',
           picture: 'pyjama.png'
       },
       {
           parentCategory: 'MI DÍA',
           name: 'DESAYUNO',
           picture: 'breakfast.png'
       },
       {
           parentCategory: 'MI DÍA',
           name: 'PASEO',
           picture: 'walk1.png'
       },
       {
           parentCategory: 'MI DÍA',
           name: 'SIESTA',
           picture: 'nap.png'
       },
       {
           parentCategory: 'MI DÍA',
           name: 'VISITA',
           picture: 'visit.png'
       },
       {
           parentCategory: 'MI DÍA',
           name: 'LLAMADAS',
           picture: 'phone.png'
       },
       {
           parentCategory: 'MI DÍA',
           name: 'MÉDICO',
           picture: 'doctor.png'
       },
       {
           parentCategory: 'MI DÍA',
           name: 'PINTURA',
           picture: 'pintura1.png'
       },
       {
           parentCategory: 'MI DÍA',
           name: 'SUDOKU',
           picture: 'sudoku.png'
       },
       {
           parentCategory: 'MI DÍA',
           name: 'LEER',
           picture: 'leer.png'
       },
       {
           parentCategory: 'CÓMO ME SIENTO',
           name: 'ÁNIMO',
           picture: 'animo.png'
       },
       {
           parentCategory: 'CÓMO ME SIENTO',
           name: 'CUERPO',
           picture: 'cuerpo.png'
       },
       {
           parentCategory: 'ÁNIMO',
           name: 'FELIZ',
           picture: 'happy.png'
       },
      {
          parentCategory: 'ÁNIMO',
          name: 'QUERIDO',
          picture: 'loved.png'
      },
      {
          parentCategory: 'ÁNIMO',
          name: 'TRISTE',
          picture: 'sad.png'
      },
      {
          parentCategory: 'ÁNIMO',
          name: 'CANSADO',
          picture: 'tired.png'
      },
      {
          parentCategory: 'ÁNIMO',
          name: 'ENFADADO',
          picture: 'angry.png'
      },
      {
          parentCategory: 'ÁNIMO',
          name: 'CONFUNDIDO',
          picture: 'confused.png'
      },
      {
          parentCategory: 'ÁNIMO',
          name: 'DESANIMADO',
          picture: 'desanimado.png'
      },
      {
          parentCategory: 'CUERPO',
          name: 'ESTOY BIEN',
          picture: 'bien.png'
      },
      {
          parentCategory: 'CUERPO',
          name: 'ME DUELE LA CABEZA',
          picture: 'cabeza.png'
      },
      {
          parentCategory: 'CUERPO',
          name: 'ME DUELE EL ESTÓMAGO',
          picture: 'estomago.png'
      },
     {
         parentCategory: 'CUERPO',
         name: 'ME DUELE LA GARGANTA',
         picture: 'garganta.png'
     },
     {
         parentCategory: 'CUERPO',
         name: 'ME DUELE EL BRAZO',
         picture: 'brazo.png'
     },
     {
         parentCategory: 'CUERPO',
         name: 'ME DUELE LA PIERNA',
         picture: 'pierna.png'
     },
       {
           parentCategory: 'CUERPO',
           name: 'ME DUELE LA ESPALDA',
           picture: 'espalda.png'
       },
       {
           parentCategory: 'CUERPO',
           name: 'ME DUELE EL PECHO',
           picture: 'pecho.png'
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