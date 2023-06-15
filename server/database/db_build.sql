BEGIN;

DROP TABLE IF EXISTS answers CASCADE;


CREATE TABLE answers (
  answer_id SERIAL PRIMARY KEY,
  image1 VARCHAR(500),
  image2 VARCHAR(500),
  image3 VARCHAR(500),
  bcs VARCHAR(50),
  date VARCHAR(50)





);







 COMMIT;
