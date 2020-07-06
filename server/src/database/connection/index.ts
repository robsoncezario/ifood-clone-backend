import { Sequelize } from 'sequelize-typescript';

import settings from '../settings/database';

import Customer from '../models/Customer/model';
import Address from '../models/Address/model';
import Restaurant from '../models/Restaurant/model';
import Order from '../models/Order/model';
import Category from '../models/Category/model';
import Rating from '../models/Rating/model';
import OrderHistory from '../models/LastOrders/model';

const Connection = new Sequelize({
  host: settings.host,
  port: settings.port,
  database: settings.database,
  username: settings.username,
  password: settings.password,
  dialect: settings.dialect,
  models: [ 
    Category,
    Customer,
    Address,
    Restaurant,
    Order,
    OrderHistory,
    Rating
  ]
});

Connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err : any) => {
    console.error('Unable to connect to the database:', err);
  });

/*(async () => {
  await Address.sync({
    alter: true
  });

  await Category.sync({
    alter: true
  });

  await Order.sync({
    alter: true
  });

  await Customer.sync({
    alter: true
  });

  await Rating.sync({
    alter: true
  });

  await Category.create({
    name: 'Mercado',
    imageSrc: 'https://i.imgur.com/dy0FkdH.png' 
  });

  await Category.create({
    name: 'Promoções',
    imageSrc: 'https://i.imgur.com/0C0Iaim.png'
  });

  await Category.create({
    name: 'Lanches',
    imageSrc: 'https://i.imgur.com/9JDdJo0.png'
  });

  await Category.create({
    name: 'Pizza',
    imageSrc: 'https://i.imgur.com/Hyq0DC9.png'
  });

  await Category.create({
    name: 'Vegetariana',
    imageSrc: 'https://i.imgur.com/lBImBd9.png'
  });

  await Category.create({
    name: 'Brasileira',
    imageSrc: 'https://i.imgur.com/dwPnj9m.png'
  });

  await Category.create({
    name: 'Bebidas',
    imageSrc: 'https://i.imgur.com/B8TNrYa.png'
  });

  await Category.create({
    name: 'Açai',
    imageSrc: 'https://i.imgur.com/5pAqhAw.png'
  });

  await Category.create({
    name: 'Doces & Bolos',
    imageSrc: 'https://i.imgur.com/EPjQa0k.png'
  });
})();  */

(async () => {
  await Address.sync({
    alter: true
  }); 

  await Restaurant.sync({
    alter: true
  }); 

  await OrderHistory.sync({
    alter: true
  });

  await Order.sync({
    alter: true
  }); 

  /*await Address.create({
    "latitude":-27.0125865,
    "longitude":-48.6164036,
    "postalCode":"88330-065",
    "street":"Rua Pascoal Moreira Cabral Leme",
    "neighborhood":"Nova Esperança",
    "city":"Balneário Camboriú",
    "state":"Santa Catarina",
    "country":"Brasil",
    "countryCode":"br"
  }); */

  /*await Restaurant.create({
    name: 'Jack Dog',
    categoryId: 3,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/4cfcd395-7a72-4f5b-b611-2db58a79391e/201909301127_T5Kr_i.png'
  });

  await Restaurant.create({
    name: 'Outback',
    categoryId: 3,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/202003272155_fabc524c-0c94-4bf4-b885-4c08ae771358.png'
  });

  await Restaurant.create({
    name: '4 Friends Burger',
    categoryId: 3,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/41cdf559-e406-4adc-8966-9fc02cd635cf/201909301102_HFT6_i.png'
  });

  await Restaurant.create({
    name: 'Moana Poke',
    categoryId: 5,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/6ce89cf6-6a2d-4dc1-bf5b-6982cd87d5bd/201909301132_xFqV_i.png'
  });

  await Restaurant.create({
    name: 'Pono Poke Hawaiian Food',
    categoryId: 5,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/1527f87b-6ad0-4bfd-813d-1d215fdf7cf9/202001161127_epHI_i.png'
  });

  await Restaurant.create({
    name: 'Yor Burger',
    categoryId: 3,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/8105be78-ced6-4672-872e-707578f49a59/201905301941_2acs_i.jpg'
  });

  await Restaurant.create({
    name: 'Açai',
    categoryId: 8,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/c4f2d1bd-210b-4e5d-a9f5-80b930ce2702/202004031259_vAl2_.jpeg'
  });

  await Restaurant.create({
    name: 'Oakberry Açai',
    categoryId: 8,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/c4f2d1bd-210b-4e5d-a9f5-80b930ce2702/202004031259_vAl2_.jpeg'
  });

  await Restaurant.create({
    name: 'Parada do Açai',
    categoryId: 8,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/60204575-d3a4-477b-b720-48001ee7f7d8/201810241421_logo_.png'
  });

  await Restaurant.create({
    name: 'Açailand',
    categoryId: 8,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/25db0375-e6ce-40cc-b242-0451f896fc5c/201902281704_acail.jpg'
  });

  await Restaurant.create({
    name: "Domino's Pizza",
    categoryId: 4,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201909102101_a0a53f4c-f3d1-4353-a6ce-c4c2043447ff.png'
  });

  await Restaurant.create({
    name: "Pizza hut",
    categoryId: 4,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/2add8a4b-b1e5-490b-90bd-585fe39932e9/201910292120_giMM_i.png'
  });

  await Restaurant.create({
    name: "Pizza Bis",
    categoryId: 4,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/6fce57a6-9018-4da2-b759-c6579914697a/201912041000_Duww_i.jpg'
  });

  await Restaurant.create({
    name: "Pizza Gourmet Delivery",
    categoryId: 4,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201705151156_c7a9c024-fafc-4e98-96a8-899e3c23cf3d.png'
  });

  await Restaurant.create({
    name: "Pizza Bier",
    categoryId: 4,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/1c4d7e03-bf77-47f5-99d9-a939e87eb1ff/201912142217_guIN_i.jpg'
  });

  await Restaurant.create({
    name: "Pizza Deck",
    categoryId: 4,
    addressId: 1,
    imageSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201705241257_45ddceeb-8287-4fd3-b5bc-242c741ce0fa.png'
  }); */
})(); 

export default Connection;