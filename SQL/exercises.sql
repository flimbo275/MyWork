Задачи по SQL 
https://sql-ex.ru/learn_exercises.php


Краткая информация о базе данных "Компьютерная фирма":

Схема БД состоит из четырех таблиц:
Product(maker, model, type)
PC(code, model, speed, ram, hd, cd, price)
Laptop(code, model, speed, ram, hd, price, screen)
Printer(code, model, color, type, price)
Таблица Product представляет производителя (maker), номер модели (model) и тип ('PC' - ПК, 'Laptop' - ПК-блокнот или 'Printer' - принтер). Предполагается, что номера моделей в таблице Product уникальны для всех производителей и типов продуктов. В таблице PC для каждого ПК, однозначно определяемого уникальным кодом – code, указаны модель – model (внешний ключ к таблице Product), скорость - speed (процессора в мегагерцах), объем памяти - ram (в мегабайтах), размер диска - hd (в гигабайтах), скорость считывающего устройства - cd (например, '4x') и цена - price (в долларах). Таблица Laptop аналогична таблице РС за исключением того, что вместо скорости CD содержит размер экрана -screen (в дюймах). В таблице Printer для каждой модели принтера указывается, является ли он цветным - color ('y', если цветной), тип принтера - type (лазерный – 'Laser', струйный – 'Jet' или матричный – 'Matrix') и цена - price.

Задание: 1
Найдите номер модели, скорость и размер жесткого диска для всех ПК стоимостью менее 500 дол. Вывести: model, speed и hd

Select model, speed, hd from PC where price<500


Задание: 2 
Найдите производителей принтеров. Вывести: maker

Select distinct maker from product where type='printer'


Задание: 3 
Найдите номер модели, объем памяти и размеры экранов ПК-блокнотов, цена которых превышает 1000 дол.

Select model, ram, screen from Laptop where price>1000


Задание: 4 
Найдите все записи таблицы Printer для цветных принтеров

Select * from Printer where color='y'


Задание: 5 
Найдите номер модели, скорость и размер жесткого диска ПК, имеющих 12x или 24x CD и цену менее 600 дол.

Select model, speed, hd from PC where cd in ('12x','24x') and price<600


Задание: 6 
Для каждого производителя, выпускающего ПК-блокноты c объёмом жесткого диска не менее 10 Гбайт, найти скорости таких ПК-блокнотов. Вывод: производитель, скорость.

select distinct Product.maker, Laptop.speed
from Product
join Laptop on Product.model=Laptop.model
where laptop.hd>=10


Задание: 7
Найдите номера моделей и цены всех имеющихся в продаже продуктов (любого типа) производителя B (латинская буква).

Select PC.model, PC.price 
from PC
join Product on Product.model=PC.model
where maker='B'
union 
Select Laptop.model, Laptop.price 
from Laptop
join Product on Product.model=Laptop.model
where maker='B'
union
Select Printer.model, Printer.price 
from Printer
join Product on Product.model=Printer.model
where maker='B'


