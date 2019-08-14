
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


INSERT INTO h_catalog_avtomobili (`title`, parent) VALUES('Toyota',0);
SET @parentModel = (SELECT id FROM h_catalog_avtomobili WHERE `title` = 'Toyota');
INSERT INTO h_catalog_avtomobili (`title`, parent) VALUES('Auris (E180) ''2012–18', @parentModel);




/*-------------- Изменение № заказа -----------------*/

SET @maxOrderId = (SELECT MAX(order_id) FROM h_cart);

UPDATE h_cart
SET order_id = 250
WHERE order_id = @maxOrderId;