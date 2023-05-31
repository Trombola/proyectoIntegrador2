create schema base_de_datos;
use base_de_datos;

create table usuarios(
id int unsigned primary key auto_increment,
username varchar(200) unique not null,
email varchar(200) unique not null,
contrasenia varchar(200) not null,
fecha_de_nacimiento date,
dni int unsigned not null,
foto_de_perfil text,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt timestamp null
);
insert into usuarios (id,username,email,contrasenia,fecha_de_nacimiento,dni,foto_de_perfil)values(default,"fish","anto@gmail.com","antonio123",'2004-05-12',22222321,"foto.jpg");
insert into usuarios (id,username,email,contrasenia,fecha_de_nacimiento,dni,foto_de_perfil)values(default,"corti","tomas@gmail.com","chiculato67",'2004-04-13',82402321,"foto.jpg");
insert into usuarios (id,username,email,contrasenia,fecha_de_nacimiento,dni,foto_de_perfil)values(default,"ezegames","eze@gmail.com","bocalove",'2003-07-20',91202321,"foto.jpg");
insert into usuarios (id,username,email,contrasenia,fecha_de_nacimiento,dni,foto_de_perfil)values(default,"garnachito","garnacho@gmail.com","garn49",'2004-05-24',444082321,"foto.jpg");
insert into usuarios (id,username,email,contrasenia,fecha_de_nacimiento,dni,foto_de_perfil)values(default,"pipita","pipa@gmail.com","pipa100",'1975-10-15',156322519,"foto.jpg");



create table productos(
id int unsigned primary key auto_increment,
usuario_id INT UNSIGNED NOT NULL,
foto varchar(500) not null,
producto text not null,
descripcionProd text not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt timestamp null,

FOREIGN KEY(usuario_id) references usuarios(id)
);

insert into productos (id,foto,usuario_id,producto,descripcionProd)values(default,'/images/products/ManU2008.jpg',2,"camiseta Man United","Camiseta del Manchester United 07/08");
insert into productos (id,foto,usuario_id,producto,descripcionProd)values(default,'/images/products/barca2012.jpg',3,"camiseta Barcelona","Camiseta del Barcelona 11/12");
insert into productos (id,foto,usuario_id,producto,descripcionProd)values(default,'/images/products/river1986.jpg',3,"camiseta River","Camiseta del River 86/87");
insert into productos (id,foto,usuario_id,producto,descripcionProd)values(default,'/images/products/boca2018.jpg',4,"camiseta Boca","Camiseta del Boca Juniors 18/19");
insert into productos (id,foto,usuario_id,producto,descripcionProd)values(default,'/images/products/madrid2001.jpg',1,"camiseta Real Madrid","Camiseta del Real Madrid 01/02");
insert into productos (id,foto,usuario_id,producto,descripcionProd)values(default,'/images/products/milan1998.jpg',1,"camiseta Milan","Camiseta del Milan 01/02");
insert into productos (id,foto,usuario_id,producto,descripcionProd)values(default,'/images/products/betis2022.jpg',5,"camiseta Betis","Camiseta del Betis 21/22");
insert into productos (id,foto,usuario_id,producto,descripcionProd)values(default,'/images/products/brasil2002.jpg',2,"camiseta Brasil","Camiseta de Brasil 01/02");
insert into productos (id,foto,usuario_id,producto,descripcionProd)values(default,'/images/products/villarreal.jpg',1,"camiseta Villarreal","Camiseta del Villarreal 22/23");
insert into productos (id,foto,usuario_id,producto,descripcionProd)values(default,'/images/products/valladolid.jpg',3,"camiseta Valladolid","Camiseta del Valladolid 22/23");

create table comentarios(
id int unsigned primary key auto_increment,
post_id int unsigned not null,
usuario_id INT UNSIGNED NOT NULL,
comentario text not null,


FOREIGN KEY(post_id) references productos(id),
FOREIGN KEY(usuario_id) references usuarios(id),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt timestamp null
);

insert into comentarios (id,post_id,usuario_id,comentario) values(default,"1","1","RIBBBBER DE LA B");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"1","1","EL MAS GRANDE");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"1","2","Me encanta!!!!");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"1","3","Aupa aleti jeee");

insert into comentarios (id,post_id,usuario_id,comentario) values(default,"2","1","RIBBBBER DE LA B");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"2","1","EL MAS GRANDE");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"2","2","Me encanta!!!!");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"2","3","Aupa aleti jeee");


insert into comentarios (id,post_id,usuario_id,comentario) values(default,"3","1","RIBBBBER DE LA B");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"3","1","EL MAS GRANDE");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"3","2","Me encanta!!!!");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"3","3","Aupa aleti jeee");

insert into comentarios (id,post_id,usuario_id,comentario) values(default,"4","1","RIBBBBER DE LA B");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"4","1","EL MAS GRANDE");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"4","2","Me encanta!!!!");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"4","3","Aupa aleti jeee");

insert into comentarios (id,post_id,usuario_id,comentario) values(default,"5","1","RIBBBBER DE LA B");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"5","1","EL MAS GRANDE");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"5","2","Me encanta!!!!");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"5","3","Aupa aleti jeee");

insert into comentarios (id,post_id,usuario_id,comentario) values(default,"6","1","RIBBBBER DE LA B");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"6","1","EL MAS GRANDE");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"6","2","Me encanta!!!!");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"6","3","Aupa aleti jeee");

insert into comentarios (id,post_id,usuario_id,comentario) values(default,"7","1","RIBBBBER DE LA B");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"7","1","EL MAS GRANDE");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"7","2","Me encanta!!!!");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"7","3","Aupa aleti jeee");

insert into comentarios (id,post_id,usuario_id,comentario) values(default,"8","1","RIBBBBER DE LA B");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"8","1","EL MAS GRANDE");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"8","2","Me encanta!!!!");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"8","3","Aupa aleti jeee");

insert into comentarios (id,post_id,usuario_id,comentario) values(default,"9","1","RIBBBBER DE LA B");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"9","1","EL MAS GRANDE");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"9","2","Me encanta!!!!");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"9","3","Aupa aleti jeee");

insert into comentarios (id,post_id,usuario_id,comentario) values(default,"10","1","RIBBBBER DE LA B");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"10","1","EL MAS GRANDE");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"10","2","Me encanta!!!!");
insert into comentarios (id,post_id,usuario_id,comentario) values(default,"10","3","Aupa aleti jeee");
