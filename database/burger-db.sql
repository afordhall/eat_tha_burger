drop database if exists burgers_db;
create database burgers_db;
use burgers_db;
create table burgers (
	id integer auto_increment primary key not null,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN default false
);

insert into burgers (burger_name)
values ("Bacon Burger"), ("Southwest Burger"), ("BBQ Burger"), ("Veggie Burger"), ("Double Cheese Burger")
