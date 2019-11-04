
SELECT * FROM INFORMATION_SCHEMA.TABLES

/*---------Добавить значение в справочник------*/

INSERT INTO book_366 (title) VALUES ('крем');



/*------------- Удалить все категории ---------------*/

DELETE FROM pages WHERE handler <> 17 AND handler IN (SELECT id FROM handlers WHERE type =2)

DELETE FROM h_catalog





/*---------------- перевести названия категорий  ------------------*/

UPDATE pages
SET title = ''
WHERE title = '' AND i18n_language = /*номер языка*/;



/*-------------  Удалить товары отовсюду  ------------------*/

DELETE FROM h_product_characteristics WHERE id IN ( SELECT item_id FROM h_catalog WHERE pometkaNaUdalenie = 1);
DELETE FROM h_catalog WHERE pometkaNaUdalenie = 1;

DELETE FROM (SELECT `table` FROM handlers WHERE parent = 17) WHERE id IN ( SELECT item_id FROM h_catalog WHERE pometkaNaUdalenie = 1);





DELETE FROM h_catalog WHERE handler_id = (SELECT id FROM handlers WHERE `table` = 'h_product_characteristics' LIMIT 1);
DELETE FROM h_product_characteristics;


/*------------------------  Отобрать все бренды с урлами  --------------------*/

SELECT  h_brands.title, p_url.uri
FROM p_url
INNER JOIN h_brands ON p_url.record = h_brands.id
WHERE h_brands.i18n_language = 1;










/*----------------------- перенести все бренды в раздел "бренды" и включить -----------------------------*/

UPDATE h_brands
SET `parent` = 993 , `enabled`=1
WHERE `parent` = 0;


/*--------------------- Доступы для справочников ----------------------------*/

INSERT INTO h_common_access (type, item, role, access_level)
VALUES(3, {$bookId}, 13, 1),(3, {$bookId}, 13, 2),(3, {$bookId}, 13, 3)









/*----------- Добавление параметра в двухуровневый фильтр -----------------*/


INSERT INTO h_catalog_avtomobili (`title`, parent) VALUES('Toyota',0);  # Добавление первого уровня фильтра. Вместо "Toyota" то что нужно
SET @parentModel = (SELECT id FROM h_catalog_avtomobili WHERE `title` = 'Toyota');
INSERT INTO h_catalog_avtomobili (`title`, parent) VALUES('Auris (E180) ''2012–18', @parentModel);  # Добавление второго уровня. Вместо "Auris (E180) ''2012–18" то что нужно




/*-------------- Изменение № заказа -----------------*/

SET @maxOrderId = (SELECT MAX(order_id) FROM h_cart);

UPDATE h_cart
SET order_id = 250
WHERE order_id = @maxOrderId;



/*------ Изменение шаблона товара для всех страниц каталога на указаный --------*/

UPDATE pages 
SET handler = (SELECT id FROM handlers WHERE `table` = '') #здесь ввести таблицу характеристик типа h_catalog_katalogTovar
WHERE handler <> 17 AND handler IN (SELECT id FROM handlers WHERE TYPE =2) OR handler NOT IN (SELECT id FROM handlers);



/*------------- Изменение шаблона товара для выбраной категории и всех вложеных -------------*/

LOCK TABLES `pages` WRITE, `h_catalog` WRITE, `handlers` READ;

SET @pageIdParam =  (SELECT id FROM `pages` WHERE `title` = 'Кабель' AND `i18n_language` = 1 LIMIT 1 );
SET @handlerIdParam =  (SELECT id FROM `handlers` WHERE `table` = 'h_catalog_123' LIMIT 1);


DROP TEMPORARY TABLE IF EXISTS `page_ids`;
CREATE TEMPORARY TABLE IF NOT EXISTS `page_ids` (
  `pk` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id` INT(11) NOT NULL
);

                                          # так как мне нужно найти все вложености, 2 таблици нужны для перебора значений 

DROP TEMPORARY TABLE IF EXISTS `buffer_page_ids`;
CREATE TEMPORARY TABLE IF NOT EXISTS `buffer_page_ids` (
  `pk` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id` INT(11) NOT NULL
);

INSERT INTO `page_ids` (id) (SELECT id FROM pages WHERE parent = @pageIdParam AND i18n_language = 1);   # 1115 - это ID начальной страницы
INSERT INTO `buffer_page_ids` (id) (SELECT id FROM `page_ids`);

/*этот блок нужен для увеличения вложености + 1 вложеность за 1 блок*/
INSERT INTO `page_ids` (id) (SELECT id FROM pages WHERE parent IN (SELECT id FROM `buffer_page_ids`) AND i18n_language = 1);
INSERT INTO `buffer_page_ids` (id) (SELECT id FROM `page_ids`);
/*Конец Блока*/

INSERT INTO `page_ids` (id) (SELECT id FROM pages WHERE parent IN (SELECT id FROM `buffer_page_ids`) AND i18n_language = 1);
INSERT INTO `buffer_page_ids` (id) (SELECT id FROM `page_ids`);

INSERT INTO `page_ids` (id) (SELECT id FROM pages WHERE parent IN (SELECT id FROM `buffer_page_ids`) AND i18n_language = 1);
INSERT INTO `buffer_page_ids` (id) (SELECT id FROM `page_ids`);

INSERT INTO `page_ids` (id) (SELECT id FROM pages WHERE parent IN (SELECT id FROM `buffer_page_ids`) AND i18n_language = 1);

INSERT INTO `buffer_page_ids` (id) (SELECT id FROM `page_ids`);
INSERT INTO `page_ids` (id) (SELECT id FROM pages WHERE parent IN (SELECT id FROM `buffer_page_ids`) AND i18n_language = 1);

UPDATE pages SET handler = @handlerIdParam WHERE parent IN (SELECT id FROM `page_ids`) OR parent = @pageIdParam OR id = @pageIdParam ;
UPDATE `h_catalog` SET handler_id = @handlerIdParam  WHERE parent IN (SELECT id FROM `page_ids`);  # 1115 - это ID начальной страницы


#Удалить мусор 
#---- DELETE FROM `h_product_characteristics` WHERE `id` IN (SELECT `id` FROM `h_catalog` WHERE `i18n_language` = 1 AND `parent` IN (SELECT id FROM pages WHERE handler != 381 AND i18n_language = 1));




UNLOCK TABLES;




/*-------- Удалить все модификации ----------*/


LOCK TABLES `h_catalog` WRITE, `h_product_characteristics` WRITE;


DROP TEMPORARY TABLE IF EXISTS `prod_modif_ids`;
CREATE TEMPORARY TABLE IF NOT EXISTS `prod_modif_ids` (
  `pk` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id` INT(11) NOT NULL
);

INSERT INTO `prod_ids` (id) (SELECT id FROM `h_catalog` WHERE  i18n_language = 1 AND  sortorder>0);

DELETE FROM `h_catalog` WHERE id IN (SELECT id FROM `prod_modif_ids` );
DELETE FROM `h_product_characteristics` WHERE id IN (SELECT id FROM `prod_modif_ids` );

UNLOCK TABLES;



/*------------ Проверка импорта на сбой --------------*/

SELECT * FROM pending_jobs WHERE name ='import-job' ORDER BY run_date DESC LIMIT 10;



/*----------- добавление клиента в базу -----------*/

INSERT INTO h_users (title,email,pass) VALUES ('client1','client1@ts.ts','ebc30613814e0ce61b468b00a27d54ad'); #------ Сначала нужно создать 1 клиента, присвоить ему пароль и потом взять этот пароль для всех остальных


/*---------- Вывести все товары которым не задан раздел ----------*/

SELECT * FROM h_catalog WHERE parent NOT IN (SELECT id FROM pages);