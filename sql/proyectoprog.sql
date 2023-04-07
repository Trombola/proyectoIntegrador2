use script;

create table usuarios(
id int unsigned primary key auto_increment,
email varchar(200) unique not null,
contrasenia varchar(200) unique not null,
foto_de_perfil text,
fecha date,
dni int unsigned unique not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt timestamp null
);
insert into usuarios values(default,"anto@gmail.com","antonio123","fotoo",'2004-05-12',22222321,null,null,null);
insert into usuarios values(default,"tomas@gmail.com","chiculato67","fotoo",'2004-04-13',82402321,null,null,null);
insert into usuarios values(default,"eze@gmail.com","bocalove","fotoo",'2003-07-20',91202321,null,null,null);
insert into usuarios values(default,"garnacho@gmail.com","garn49","fotoo",'2004-05-24',444082321,null,null,null);
insert into usuarios values(default,"pipa@gmail.com","pipa100","fotoo",'1975-10-15',156322519,null,null,null);

SELECT * FROM script.usuarios;


create table productos(
id int unsigned primary key auto_increment,
producto text not null,
descripcionProd text not null,
usuario_id INT UNSIGNED NOT NULL,
FOREIGN KEY(usuario_id) REFERENCES usuarios(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt timestamp null
);

insert into productos values(default,"camiseta Man United","Camiseta del Manchester United 07/08",null,null,null);
insert into productos values(default,"camiseta Barcelona","Camiseta del Barcelona 11/12",null,null,null);
insert into productos values(default,"camiseta River","Camiseta del River 86/87",null,null,null);
insert into productos values(default,"camiseta Boca","Camiseta del Boca Juniors 18/19",null,null,null);
insert into productos values(default,"camiseta Real Madrid","Camiseta del Real Madrid 01/02",null,null,null);
insert into productos values(default,"camiseta Milan","Camiseta del Milan 01/02",null,null,null);
insert into productos values(default,"camiseta Betis","Camiseta del Betis 21/22",null,null,null);
insert into productos values(default,"camiseta Brasil","Camiseta de Brasil 01/02",null,null,null);
insert into productos values(default,"camiseta Villarreal","Camiseta del Villarreal 22/23",null,null,null);
insert into productos values(default,"camiseta Valladolid","Camiseta del Valladolid 22/23",null,null,null);
