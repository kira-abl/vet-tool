BEGIN;

DROP TABLE IF EXISTS answers CASCADE;


CREATE TABLE answers (
  answer_id SERIAL PRIMARY KEY,
  image1 VARCHAR(500),
  image2 VARCHAR(500),
  image3 VARCHAR(500),
  age VARCHAR(50),
  weight VARCHAR(50),
  sex VARCHAR(50),
  spayed VARCHAR(50),
  breed VARCHAR(50),
  email VARCHAR(50),
  date VARCHAR(50)


);







 COMMIT;
