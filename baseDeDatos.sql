create schema BaseDeDatos;
use baseDeDatos;

create table usuarios(
id int unsigned primary key auto_increment,
email varchar(100) unique not null,
contrasenia varchar(100) unique not null,
foto_de_perfil text,
fecha date,
dni int unsigned unique not null
);