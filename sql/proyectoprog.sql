USE script;

create table usuarios(
id int unsigned primary key auto_increment,
email varchar(200) unique not null,
contrasenia varchar(200) unique not null,
fecha_de_nacimiento date,
dni int unsigned unique not null,
foto_de_perfil text,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt timestamp null
);
insert into usuarios values(default,"anto@gmail.com","antonio123",'2004-05-12',22222321,"foto.jpg",null,null,null);
insert into usuarios values(default,"tomas@gmail.com","chiculato67",'2004-04-13',82402321,"foto.jpg",null,null,null);
insert into usuarios values(default,"eze@gmail.com","bocalove",'2003-07-20',91202321,"foto.jpg",null,null,null);
insert into usuarios values(default,"garnacho@gmail.com","garn49",'2004-05-24',444082321,"foto.jpg",null,null,null);
insert into usuarios values(default,"pipa@gmail.com","pipa100",'1975-10-15',156322519,"foto.jpg",null,null,null);



create table productos(
id int unsigned primary key auto_increment,
usuario_id INT UNSIGNED NOT NULL,
producto text not null,
descripcionProd text not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt timestamp null,

FOREIGN KEY(usuario_id) references usuarios(id)
);

insert into productos values(default,2,"camiseta Man United","Camiseta del Manchester United 07/08",null,null,null);
insert into productos values(default,3,"camiseta Barcelona","Camiseta del Barcelona 11/12",null,null,null);
insert into productos values(default,3,"camiseta River","Camiseta del River 86/87",null,null,null);
insert into productos values(default,4,"camiseta Boca","Camiseta del Boca Juniors 18/19",null,null,null);
insert into productos values(default,1,"camiseta Real Madrid","Camiseta del Real Madrid 01/02",null,null,null);
insert into productos values(default,1,"camiseta Milan","Camiseta del Milan 01/02",null,null,null);
insert into productos values(default,5,"camiseta Betis","Camiseta del Betis 21/22",null,null,null);
insert into productos values(default,2,"camiseta Brasil","Camiseta de Brasil 01/02",null,null,null);
insert into productos values(default,1,"camiseta Villarreal","Camiseta del Villarreal 22/23",null,null,null);
insert into productos values(default,3,"camiseta Valladolid","Camiseta del Valladolid 22/23",null,null,null);

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

insert into comentarios values(default,"3","1","RIBBBBER",null,null,null);
insert into comentarios values(default,"2","1","EL MAS GRANDE",null,null,null);
insert into comentarios values(default,"4","2","me encanta",null,null,null);
insert into comentarios values(default,"2","3","aupa aleti jeee",null,null,null);


