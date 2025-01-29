# 4A00EZ62 Backend-kehitys

## Backend Development - Final Project

## Backend server address

Get all
http://localhost:5000/api/expenses

Get id
http://localhost:5000/api/expenses/{id}

Get month
http://localhost:5000/api/expenses/month/6

Get date
http://localhost:5000/api/expenses/date/2022-01-15

Get shop
http://localhost:5000/api/expenses/shop/zalando

Get category
http://localhost:5000/api/expenses/category/records

Get amount
http://localhost:5000/api/expenses/amount/100

Post expense
http://localhost:5000/api/expenses/

{
"date": "2022-06-25",
"category": "smokes",
"shop": "rkioksi",
"amount": 666
}
Update expense
http://localhost:5000/api/expenses/{id}

{
"id": 8,
"date": "2022-06-25",
"category": "carpart",
"shop": "motonet",
"amount": 500
}

Delete expense
http://localhost:5000/api/expenses/{id}

### Render address

https://expense-express-api.onrender.com/api/expenses

### Create Sql database

CREATE TABLE expenselist
(
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
date DATE DEFAULT NULL,
category VARCHAR(150) NOT NULL,
shop VARCHAR(150) NOT NULL,
amount DECIMAL(8,2) DEFAULT NULL,
created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO `expenselist` (`date`,`category`,`shop`,`amount`) VALUES ('2022-01-15', 'Groceries', 'Prisma' ,88.55);
INSERT INTO `expenselist` (`date`,`category`,`shop`,`amount`) VALUES ('2022-02-15','Shoes', 'Dressman' ,120.00);
INSERT INTO `expenselist` (`date`,`category`,`shop`,`amount`) VALUES ('2022-01-15', 'Records', 'Swampmusic' ,100.00);
INSERT INTO `expenselist` (`date`,`category`,`shop`,`amount`) VALUES ('2022-01-15', 'Beer', 'Alko' ,55.60);

### Clone repository

git clone https://github.com/Jussri/BackendProject.git

### Install dependencies

npm install

### Create env

host=mydb.tamk.fi
user=
password=
database=
port=5000

### Run the system

npm run dev

### Self evaluation

I think this project was pretty well done and I was able to do most of the mandatory parts and some extra aswell
It might not by be perfect, but I think the code is pretty easy to read and it works like it should.
All in all I believe that the grade of this project is somewhere between 3 and 4.
