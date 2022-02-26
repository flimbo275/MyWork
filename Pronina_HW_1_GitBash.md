# Linux terminal (GitBash) commands

1) Посмотреть где я  

```
pwd
```  

2) Создать папку
```
mkdir aa_1
```
3) Зайти в папку 
```
cd aa_1
```
4) Создать 3 папки
```
mkdir {bb_1,bb_2,bb_3} 
или 
mkdir bb_1 bb_2 bb_3
```
5) Зайти в любую папку 
```
cd bb_1
```
6) Создать 5 файлов (3 txt, 2 json) 
``` 
touch {file1.txt,file2.txt,file3.txt,file4.json,file5.json} 
или 
touch file1.txt file2.txt file3.txt file4.json file5.json
```
7) Создать 3 папки
```
mkdir {cc_1,cc_2,cc_3}
или
mkdir cc_1 cc_2 cc_3
```
8) Вывести список содержимого папки
```
ls -la
```
9) Открыть любой txt файл
```
vim file1.txt
```
10) написать туда что-нибудь, любой текст.
```
i
The first homework
```							
11)  сохранить и выйти. 
```
Esc + :wq
```
12) Выйти из папки на уровень выше 
```
cd ..
```
—
13) переместить любые 2 файла, которые вы создали, в любую другую папку.
```
mv  ./bb_1/{file1.txt,file2.txt} ./bb_2
```
14) скопировать любые 2 файла, которые вы создали, в любую другую папку.
```
cp  ./aa_1/bb_1/{file3.txt,file4.json} ./aa_1/bb_3
```
15) Найти файл по имени 
```
find -name file3.txt
```
16) просмотреть содержимое в реальном времени (команда grep) изучите как она работает.
```
cd bb_1
tail -f file3.txt
```
17) вывести несколько первых строк из текстового файла 
```
head -n4 file3.txt
```
18) вывести несколько последних строк из текстового файла 
```
tail -n4 file3.txt
```
19) просмотреть содержимое длинного файла (команда less) изучите как она работает.
```
less file2.txt
```
20) вывести дату и время
```
date
```

Задание *

1) Отправить http запрос на сервер.
http://162.55.220.72:5005/terminal-hw-request

```
curl "http://162.55.220.72:5005/get_method?name=(Elena)&age=(31)"
```
2) Написать скрипт который выполнит автоматически пункты 3, 4, 5, 6, 7, 8, 13
``` bash
nano script1.sh

#!/bin/bash
cd aa_1
mkdir bb_1 bb_2 bb_3
cd bb_1
touch file1.txt file2.txt file3.txt file4.json file5.json
mkdir cc_1 cc_2 cc_3
ls -la
mv C:/users/chaos/Course/Terminal/aa_1/bb_1/{file1.txt,file2.txt} C:/users/chaos/Course/Terminal/aa_1/bb_2/

^X + Y

Запускаем скрипт:
./script1.sh
```