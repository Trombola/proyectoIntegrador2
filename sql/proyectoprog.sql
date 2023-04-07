use script;

create table usuarios(
id int unsigned primary key auto_increment,
email varchar(200) unique not null,
contrasenia varchar(200) unique not null,
foto_de_perfil text,
fecha date,
dni int unsigned unique not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
insert into usuarios values(default,"anto@gmail.com","antonio123","fotoo",'2004-05-12',22222321,null,null);
insert into usuarios values(default,"tomas@gmail.com","chiculato67","fotoo",'2004-04-13',82402321,null,null);
insert into usuarios values(default,"eze@gmail.com","bocalove","fotoo",'2003-07-20',91202321,null,null);
insert into usuarios values(default,"garnacho@gmail.com","garn49","fotoo",'2004-05-24',444082321,null,null);
insert into usuarios values(default,"pipa@gmail.com","pipa100","fotoo",'1975-10-15',156322519,null,null);

SELECT * FROM script.usuarios

