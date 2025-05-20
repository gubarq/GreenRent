CREATE TABLE bikes (
  ID int NOT NULL AUTO_INCREMENT,
  Brand varchar(30) NOT NULL,
  Model varchar(30) NOT NULL,
  Price decimal(10,0) NOT NULL,
  IsRented boolean NOT NULL,
  Description varchar(100) NOT NULL,
  ImageUrl varchar(300) NOT NULL,
  PRIMARY KEY (ID)
); 

CREATE TABLE scooters (
  ID int NOT NULL AUTO_INCREMENT,
  Brand varchar(30) NOT NULL,
  Model varchar(30) NOT NULL,
  Price decimal(10,0) NOT NULL,
  IsRented boolean NOT NULL,
  Description varchar(100) NOT NULL,
  ImageUrl varchar(300) NOT NULL,
  PRIMARY KEY (ID)
); 


INSERT INTO bikes (ID, Brand, Model, Price, IsRented, Description, ImageUrl) VALUES
(1, 'Specialized', 'Turbo Vado SL 4.0', 20, false, 'Лек градски е-байк с добро ускорение.', 'https://newwheel.net/cdn/shop/products/VadoSL5STEQSilver.png?v=1676076578'),
(2, 'Trek', 'Allant+ 7', 30, false, 'Комфортен електрически велосипед за града.', 'https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,c_pad,w_1200,h_900/Allant_Plus_5_Men_23_36970_A_Primary'),
(3, 'Cube', 'Kathmandu Hybrid Pro 625', 20, false, 'Туринг е-байк с голяма батерия.', 'https://archiv.cube.eu/media/2022/531202/531202_light_zoom.jpg'),
(4, 'Cannondale', 'Tesoro Neo X 3 Remixte', 15, false, 'Мощен и универсален електрически велосипед.', 'https://www.sefiles.net/images/library/large/cannondale-tesoro-neo-x-3-remixte-366186-1.png'),
(5, 'Giant', 'Explore E+ 2 GTS', 10, false, 'Идеален за пътуване и градски маршрути.', 'https://www.ekolelo.bg/image/cache/webp/catalog/bikes/giant/my21exploree+2gts-colorametallicnavy-510x383h.webp');

INSERT INTO scooters (ID, Brand, Model, Price, IsRented, Description, ImageUrl) VALUES
(1, 'Xiaomi', 'Mi Electric Scooter Pro 2', 10, false, 'Популярна тротинетка с голям обхват.', 'https://s13emagst.akamaized.net/products/31708/31707837/images/res_8675c9f96963c19c2f03a9bb7f1afc9c.jpg'),
(2, 'Segway-Ninebot', 'KickScooter MAX G30', 15, false, 'Здрав модел с голяма батерия.', 'https://s13emagst.akamaized.net/products/56810/56809085/images/res_3cf6f192b13138d56d654653a3797bd7.jpg?width=300&height=300&hash=64064B8062A21A6F899AE556F144972C'),
(3, 'Dualtron', 'Thunder 2', 20, false, 'Изключително мощна за напреднали.', 'https://scooter.guide/wp-content/uploads/2021/05/dualtron-thunder-2-img-nosnapforums.jpg'),
(4, 'Kaabo', 'Mantis 10 Pro', 15, false, 'Баланс между мощност и комфорт.', 'https://s13emagst.akamaized.net/products/60830/60829577/images/res_5ea96170687092858b0423db43928325.jpg'),
(5, 'Smartkick', 'N1 1200W', 15, false, 'Идеален за пресечни терени.', 'https://cdn11.bigcommerce.com/s-r5k51kqrix/images/stencil/728x728/products/1267/7216/smartkick-n1-1200w-dual-motor-off-road-electric-scooter__18361.1724957643.jpg?c=1')