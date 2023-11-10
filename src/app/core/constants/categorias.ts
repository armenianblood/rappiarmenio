import { Categoria } from '../interfaces/categorias';

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Burgers',
    id: 250,
    imgUrl: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg',
    productos: [
      {
        id: 1,
        nombre: 'Burger mansion',
        precio: 3090,
        ingredientes: ['Cheddar', 'Bacon', 'Cebolla caramelizada'],
        imagen:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShou8vvn8GIsPWTcNaFKDlTCRuoeEPE9oJXQ&usqp=CAU',
      },
      {
        id: 2,
        nombre: 'Burger apartment',
        precio: 3599,
        ingredientes: ['Tomate', 'Lechuga', 'Cebolla' ],
        imagen:
          'https://previews.123rf.com/images/bhofack2/bhofack21211/bhofack2121100135/16385416-hamburguesa-casera-org%C3%A1nica-con-lechuga-y-tomate.jpg',
      },
      {
        id: 3,
        nombre: 'Burger spiderman',
        precio: 4999,
        ingredientes: ['Tomate', 'Lechuga', 'Bacon', 'Huevo a la plancha'],
        imagen:
          'https://eci.contebio.com/material/aptc/images/aptc/2316406/hamburguesa-torres_0.jpg',
      },
    ],
  },
  {
    nombre: 'Pizzas',
    id: 1,
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZ1iyPUDZrmZfd99rRistt6oOXSTws2vNUw&usqp=CAU',
    productos: [
      {
        id: 4,
        nombre: 'Classic Pizza',
        precio: 1290,
        ingredientes: ['Muzza', 'Aceitunas', 'Orégano'],
        imagen:
          'https://www.cucinare.tv/wp-content/uploads/2021/07/Queso-en-exceso.jpg',
      },
      {
        id: 5,
        nombre: 'spezziale pizza',
        precio: 1415,
        ingredientes: ['Muzza', 'Aceitunas', 'Morrones', 'Tomates', 'Huevos'],
        imagen:
          'https://images-gmi-pmc.edge-generalmills.com/fce31bdd-1931-4f30-adef-a5bac0864676.jpg',
      },
      {
        id: 6,
        nombre: 'All chesses pizza',
        precio: 1550,
        ingredientes: ['Muzza', 'Roquefort', 'Provolone', 'Parmesano'],
        imagen:
          'https://images.hola.com/imagenes/cocina/recetas/20230904238241/pizza-cuatro-quesos/1-299-522/pizzacuatroquesos-adob-t.jpg',
      },
    ],
  },
  {
    nombre: 'Postres',
    id: 2,
    imgUrl:
      'https://okdiario.com/img/2021/03/05/recetas-chocolate-655x368.jpg',
    productos: [
      {
        id: 7,
        nombre: 'Tiramisú',
        precio: 1000,
        ingredientes: [],
        imagen: 'https://acdn.mitiendanube.com/stores/528/608/products/559c3821-b284-49f4-97c0-df37eb0c2405_nube-a0f050b33836c3efde15877793342417-640-0.jpg',
      },
      {
        id: 8,
        nombre: 'Chocotorta',
        precio: 1000,
        ingredientes: [],
        imagen:
          'https://www.clarin.com/img/2020/07/15/qH4UH5dLO_1200x0__1.jpg',
      },
      {
        id: 9,
        nombre: 'Brownie',
        precio: 1000,
        ingredientes: [],
        imagen:
          'https://joyfoodsunshine.com/wp-content/uploads/2019/06/fudgy-homemade-brownies-recipe-from-scratch-7.jpg',
      },
    ],
  },
  {
    nombre: 'Bebidas',
    id: 3,
    imgUrl:
      'https://th.bing.com/th/id/OIP.49D0apwcqHRANxORNZOfVwHaEK?pid=ImgDet&rs=1',
    productos: [
      {
        id: 10,
        nombre: 'Agua',
        precio: 500,
        ingredientes: [],
        imagen:
          'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg',
      },
      {
        id: 11,
        nombre: 'Levite naranja',
        precio: 550,
        ingredientes: [],
        imagen:
          'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040726_f.jpg',
      },
      {
        id: 12,
        nombre: 'Levite pomelo',
        precio: 550,
        ingredientes: [],
        imagen:'https://jumboargentina.vtexassets.com/arquivos/ids/620163/Agua-Saborizada-Villa-Del-Sur-Levite-Pomelo-Cero-Sin-Gas-500-Ml-2-469132.jpg?v=637466226204500000'
       },
    ],
  },
];
