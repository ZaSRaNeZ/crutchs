

LOCK TABLES `h_comments` WRITE, `h_catalog` READ;
DROP TEMPORARY TABLE IF EXISTS `comment_ids`;
CREATE TEMPORARY TABLE IF NOT EXISTS `comment_ids` (
  `pk` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id` INT(11) NOT NULL,
  `realId` INT(11) NOT NULL

);

# START
# ------------------------------------

SET @record = (SELECT `item_id` FROM `h_catalog` WHERE `article` = 'none' LIMIT 1);
SET @handler = (SELECT `handler_id` FROM `h_catalog` WHERE `article` = 'none' LIMIT 1);

SET @parent = CASE WHEN 0 > 0 THEN (SELECT `realId` FROM `comment_ids` WHERE `id` = 0 LIMIT 1)

              ELSE 0
  END;


SET @insertCase = CASE  WHEN @record <> ''

					THEN "INSERT INTO `h_comments` (`i18n_language`, `title`, `text`, `record`, `date`, `parent`, `handler`, `rate`, `moderated`)
							VALUES (0, 'Алина Ж', 'Коммент Алина Ж',
							            @record,
							            '2020-01-15' ,
							            @parent,
							            @handler,
							            5,
							            1
							        );"

					ELSE "SET @t=@t"
END;

PREPARE stmt from @insertCase;
EXECUTE stmt;

SET @currentId = (SELECT MAX(`id`) FROM `h_comments`);


SET @insertCase = CASE WHEN @record <> ''
					
					THEN "INSERT INTO `comment_ids` (`id`, `realId`)
VALUES (1, @currentId );"
ELSE "SET @t=@t"
END;

PREPARE stmt from @insertCase;
EXECUTE stmt;



# START
# ------------------------------------

SET @record = (SELECT `item_id` FROM `h_catalog` WHERE `article` = 'MD827' LIMIT 1);
SET @handler = (SELECT `handler_id` FROM `h_catalog` WHERE `article` = 'MD827' LIMIT 1);

SET @parent = CASE WHEN 0 > 0 THEN (SELECT `realId` FROM `comment_ids` WHERE `id` = 0 LIMIT 1)

              ELSE 0
  END;


SET @insertCase = CASE  WHEN @record <> ''

					THEN "INSERT INTO `h_comments` (`i18n_language`, `title`, `text`, `record`, `date`, `parent`, `handler`, `rate`, `moderated`)
							VALUES (0, 'Алина Ж', 'Коммент Алина Ж',
							            @record,
							            '2020-01-15' ,
							            @parent,
							            @handler,
							            5,
							            1
							        );"

					ELSE "SET @t=@t"
END;

PREPARE stmt from @insertCase;
EXECUTE stmt;

SET @currentId = (SELECT MAX(`id`) FROM `h_comments`);


SET @insertCase = CASE WHEN @record <> ''
					
					THEN "INSERT INTO `comment_ids` (`id`, `realId`)
VALUES (1, @currentId );"
ELSE "SET @t=@t"
END;

PREPARE stmt from @insertCase;
EXECUTE stmt;


UNLOCK TABLES;