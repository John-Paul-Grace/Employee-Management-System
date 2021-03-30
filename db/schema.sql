drop database if exists employee_db;

create database employee_db;
use employee_db;

create table departments
(
	id int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    PRIMARY KEY (id)
);

create table roles
(
	id int NOT NULL AUTO_INCREMENT,
    title varchar(30) NOT NULL,
    salary decimal NOT NULL,
    department_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
);

create table employees
(
	id int NOT NULL AUTO_INCREMENT,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id int NOT NULL,
    manager_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    FOREIGN KEY (manager_id) references employees(id) ON DELETE CASCADE
);