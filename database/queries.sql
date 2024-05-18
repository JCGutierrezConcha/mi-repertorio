CREATE DATABASE REPERTORIO;

DROP TABLE IF EXISTS CANCIONES;

CREATE TABLE CANCIONES(
    id SERIAL PRIMARY KEY, 
    titulo VARCHAR(50) NOT NULL,
    artista VARCHAR(50) NOT NULL,
    tono VARCHAR(10) NOT NULL
    );

INSERT INTO CANCIONES (titulo, artista, tono) VALUES
('El amor despues del amor', 'Fito Paez', 'Em'),
('El baile de los que sobran','Los Prisioneros','Gm');

SELECT * FROM CANCIONES;