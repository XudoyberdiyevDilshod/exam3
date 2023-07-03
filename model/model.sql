CREATE DATABASE CarDb;

CREATE TABLE admin (
  id SERIAL PRIMARY KEY,
  username VARCHAR(32) NOT NULL,
  password VARCHAR(32) NOT NULL
);

CREATE TABLE Cars (
  id SERIAL PRIMARY KEY,
  car_model VARCHAR(32) NOT NULL
);

CREATE TABLE Chevrolet (
  id SERIAL PRIMARY KEY,
  CH_car_name VARCHAR(32) NOT NULL,
  Tanirovkasi VARCHAR(32),
  Motor INTEGER NOT NULL,
  Year INTEGER NOT NULL,
  Color VARCHAR(32) NOT NULL,
  Distance VARCHAR(32) NOT NULL,
  Gearbook VARCHAR(32) NOT NULL,
  Deseription VARCHAR(200) NOT NULL,
  Narxi INTEGER NOT NULL,
  ModelImage VARCHAR(32) NOT NULL
);

CREATE TABLE Lada (
  id SERIAL PRIMARY KEY,
  L_car_name VARCHAR(32) NOT NULL,
  Tanirovkasi VARCHAR(32),
  Motor INTEGER NOT NULL,
  Year INTEGER NOT NULL,
  Color VARCHAR(32) NOT NULL,
  Distance VARCHAR(32) NOT NULL,
  Gearbook VARCHAR(32) NOT NULL,
  Deseription VARCHAR(200) NOT NULL,
  Narxi INTEGER NOT NULL,
  ModelImage VARCHAR(32) NOT NULL
);

CREATE TABLE Lamborghini (
  id SERIAL PRIMARY KEY,
  LG_car_name VARCHAR(32) NOT NULL,
  Tanirovkasi VARCHAR(32),
  Motor INTEGER NOT NULL,
  Year INTEGER NOT NULL,
  Color VARCHAR(32) NOT NULL,
  Distance VARCHAR(32) NOT NULL,
  Gearbook VARCHAR(32) NOT NULL,
  Deseription VARCHAR(200) NOT NULL,
  Narxi INTEGER NOT NULL,
  ModelImage VARCHAR(32) NOT NULL
);

CREATE TABLE Ferari (
  id SERIAL PRIMARY KEY,
  F_car_name VARCHAR(32) NOT NULL,
  Tanirovkasi VARCHAR(32),
  Motor INTEGER NOT NULL,
  Year INTEGER NOT NULL,
  Color VARCHAR(32) NOT NULL,
  Distance VARCHAR(32) NOT NULL,
  Gearbook VARCHAR(32) NOT NULL,
  Deseription VARCHAR(200) NOT NULL,
  Narxi INTEGER NOT NULL,
  ModelImage VARCHAR(32) NOT NULL
);

INSERT INTO
  Lada(
    L_car_name,
    Tanirovkasi,
    Motor,
    Year,
    Color,
    Distance,
    Gearbook,
    Deseription,
    Narxi,
    ModelImage
  )
VALUES
  (
    'LADA',
    'Yoq',
    1.6,
    2020,
    'Qora',
    4000,
    'Avtomat karobka',
    'Mashina ideal holatda krasska top toza 100tali. Ayol kishiniki judayam akuratno haydalgan',
    259900000,
    'Lada Vesta Cross'
  );

INSERT INTO
  Chevrolet(
    CH_car_name,
    Tanirovkasi,
    Motor,
    Year,
    Color,
    Distance,
    Gearbook,
    Deseription,
    Narxi,
    ModelImage
  )
VALUES
  (
    'CHEVROLET',
    'Bor',
    1.5,
    2016,
    'Oq',
    3000,
    'Mexanika',
    'Mashina ideal holatda krasska top toza 100tali. Ayol kishiniki judayam akuratno haydalgan',
    129900000,
    'Chevrolet Neksiya'
  );

INSERT INTO
  Lamborghini(
    LG_car_name,
    Tanirovkasi,
    Motor,
    Year,
    Color,
    Distance,
    Gearbook,
    Deseription,
    Narxi,
    ModelImage
  )
VALUES
  (
    'LAMBORGHINI',
    'Bor',
    4,
    2020,
    'Qizil',
    10000,
    'Avtomat karobka',
    'Mashina ideal holatda krasska top toza 100tali. Ayol kishiniki judayam akuratno haydalgan',
    1229900000,
    'LAMBORGHINI'
  );

INSERT INTO
  Ferari(
    F_car_name,
    Tanirovkasi,
    Motor,
    Year,
    Color,
    Distance,
    Gearbook,
    Deseription,
    Narxi,
    ModelImage
  )
VALUES
  (
    'FERARI',
    'Bor',
    4,
    2022,
    'Qizil',
    10000,
    'Avtomat karobka',
    'Mashina ideal holatda krasska top toza 100tali. Ayol kishiniki judayam akuratno haydalgan',
    1029900000,
    'Ferari'
  );

INSERT INTO
  admin(username, password)
VALUES
  ('Dilshod', '123456789');


INSERT INTO Cars(car_model) VALUES ('Chevrolet'), ('LADA'), ('LAMBORGHINI'),('FERARI');