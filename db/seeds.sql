use employee_db;

INSERT INTO departments (name) VALUES ('Human Resources');
INSERT INTO departments (name) VALUES ('Engineering');

INSERT INTO roles (title, salary, department_id) VALUES ('HR Manager', 75000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Engineering Manager', 80000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('HR Representative', 50000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Junior Engineer', 60000, 2);

INSERT INTO employees (first_name, last_name, role_id) VALUES ('Ivy', 'Hull', 1);
INSERT INTO employees (first_name, last_name, role_id) VALUES ('Otto', 'Schmitt', 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Jett', 'Bruce', 3, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Jaylan', 'Cottrell', 4, 2);