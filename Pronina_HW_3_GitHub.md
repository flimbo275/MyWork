# JSON

1. Создать внешний репозиторий c названием JSON
```
Recent Repositories - New
```
2. Клонировать репозиторий JSON на локальный компьютер
``` 
git clone - https://github.com/flimbo275/JSON.git
```
3. Внутри локального JSON создать файл “new.json”  
```
cd JSON
touch new.json
```
 4. Добавить файл под гит.
```
git add new.json
```
 5. Закоммитить файл.
```
git commit -m "add 1 file"
```
 6. Отправить файл на внешний GitHub репозиторий. 
```
git push
```
 7. Отредактировать содержание файла “new.json” - написать информацию о себе (ФИО, возраст, количество домашних животных, будущая желаемая зарплата). Всё написать в формате JSON.
```
vim new.json

{
        "name":"Elena",
        "age":31,
        "pets":1,
        "salary":"NZD 4000"
}
```
8. Отправить изменения на внешний репозиторий.
```
git commit -am "update 1 file"
git push
```
 9. Создать файл preferences.json
```
touch preferences.json
```
 10. В файл preferences.json добавить информацию о своих предпочтениях (Любимый фильм, любимый сериал, любимая еда, любимое время года, сторона которую хотели бы посетить) в формате JSON.
```
vim preferences.json

{
        "fav_movie":"The_Lord_of_the_Rings",
        "fav_series":"Simpsons",
        "fav_food":"meat",
        "fav_season":"summer",
        "want_to_visit":"New_Zealand"
}
```
 11. Создать файл sklls.json добавить информацию о скиллах которые будут изучены на курсе в формате JSON
```
vim sklls.json

{
        "skills":{
                "skill_1":"Client-server_model",
                "skill_2":"HTTP_server_requests",
                "skill_3":"JSON_XML_structure",
                "skill_4":"API_Testing_Postman",
                "skill_5":"logs_from_external_server",
                "skill_6":"Dev_Tools_of_web_browsers",
                "skill_7":"VPN",
                "skill_8":"mobile_testing",
                "skill_9":"XCode",
                "skill_10":"Android_Studio",
                "skill_11":"Linux_terminal",
                "skill_12":"SQL",
                "skill_13":"Postgres",
                "skill_14":"Redis",
                "skill_15":"Jmeter",
                "skill_16":"Scrum"
        	}
}
```
 12. Отправить сразу 2 файла на внешний репозиторий.
```bash
git add preferences.json sklls.json
git commit -m "add 2 files"
git push
```
 13. На веб интерфейсе создать файл bug_report.json.
```
"add file", "create a new file"
```
 14. Сделать Commit changes (сохранить) изменения на веб интерфейсе.
```
"commit new file"
```
 15. На веб интерфейсе модифицировать файл bug_report.json, добавить баг репорт в формате JSON.
```
bug_report.json - "Edit this file"

{
        "Summary":"Axe_doesn't_damage_the_orcs",
        "Category":"Gameplay",
        "Severity":"Critical",
        "Priority":"High",
        "Steps_to_Reproduce":
        {
                "Step_1":"Reach_the_second_act",
                "Step_2":"Go_to_the_Auberdine_lake",
                "Step_3":"Talk_to_Ricardo",
                "Step_4":"Take_up_an_axe-type_weapon",
                "Step_5":"Attack_and_try_to_damage_the_orc"
        },
        "Result":"Orc_has_no_damage",
        "Expected_result":"Orc_should_be_damaged",
        "Version":"3.2.4",
        "Platform":"PS5"
}
```
 16. Сделать Commit changes (сохранить) изменения на веб интерфейсе.
```
"Commit changes"
```
 17. Синхронизировать внешний и локальный репозиторий JSON
```
В GitBash пишем команду:
git pull  
```
# XML

 1. Создать внешний репозиторий c названием XML.
```
Recent Repositories - New
```
 2. Клонировать репозиторий XML на локальный компьютер.
```
git clone https://github.com/flimbo275/XML.git
```
 3. Внутри локального XML создать файл “new.xml”.
```
cd XML
touch new.xml
```
 4. Добавить файл под гит.
```
git add new.xml
```
 5. Закоммитить файл.
```
git commit -m "add 1 file"
```
 6. Отправить файл на внешний GitHub репозиторий.
```
git push
```
 7. Отредактировать содержание файла “new.xml” - написать информацию о себе (ФИО, возраст, количество домашних животных, будущая желаемая зарплата). Всё написать в формате XML.
```xml 
vim new.xml 


<?xml version="1.0" encoding="UTF-8"?>
<AboutMe>
        <Name>Elena</Name>
        <Age>31</Age>
        <Pets>1</Pets>
        <Salary>NZD 4000</Salary>
</AboutMe>
```
 8. Отправить изменения на внешний репозиторий.
```bash
git commit -am "update 1 file"
git push
```
 9. Создать файл preferences.xml
```
touch preferences.xml
```
 10. В файл preferences.xml добавить информацию о своих предпочтениях (Любимый фильм, любимый сериал, любимая еда, любимое время года, сторона которую хотели бы посетить) в формате XML.
```xml
vim preferences.xml

<?xml version="1.0" encoding="UTF-8"?>
<Preferences>
        <FavMovie>The Lord of the Rings</FavMovie>
        <FavSeries>Simpsons</FavSeries>
        <FavFood>meat</FavFood>
        <FavSeason>summer</FavSeason>
        <WantToVisit>New Zealand</WantToVisit>
</Preferences>
```
 11. Создать файл sklls.xml добавить информацию о скиллах которые будут изучены на курсе в формате XML
```xml
vim sklls.xml

<?xml version="1.0" encoding="UTF-8"?>
<Skills>
	<skill>Client-server model</skill>
        <skill>HTTP server requests</skill>
        <skill>JSON XML structure</skill>
        <skill>API Testing Postman</skill>
        <skill>logs from external server</skill>
        <skill>Dev Tools of web browsers</skill>
        <skill>VPN</skill>
        <skill>mobile testing</skill>
        <skill>XCode</skill>
        <skill>Android Studio</skill>
        <skill>Linux terminal</skill>
        <skill>SQL</skill>
        <skill>Postgres</skill>
        <skill>Redis</skill>
        <skill>Jmeter</skill>
        <skill>Scrum</skill>
</Skills>
```
 12. Сделать коммит в одну строку.
```bash
git add sklls.xml preferences.xml | git commit -m "add 2 files"
```
 13. Отправить сразу 2 файла на внешний репозиторий.
```
git push 
```
 14. На веб интерфейсе создать файл bug_report.xml.
```
"add file", "create a new file"
```
 15. Сделать Commit changes (сохранить) изменения на веб интерфейсе.
```
"commit new file"
```
 16. На веб интерфейсе модифицировать файл bug_report.xml, добавить баг репорт в формате XML.
```xml
bug_report.xml - "Edit this file"

<?xml version="1.0" encoding="UTF-8"?>
<BugReport>  
  <Summary>Axe doesn't damage the orcs</Summary>  
  <Category>Gameplay</Category>  
  <Severity>Critical</Severity>  
  <Priority>High</Priority>  
  <Steps>  
    <Step1>Reach the second act</Step1>  
    <Step2>Go to the_Auberdine lake</Step2>  
    <Step3>Talk to Ricardo</Step3>  
    <Step4>Take up an axe-type weapon</Step4>  
    <Step5>Attack and try to damage the orc</Step5>  
  </Steps>  
  <Result>Orc has no damage</Result>  
  <ExpectedResult>Orc should be damaged</ExpectedResult>  
  <Version>3.2.4</Version>  
  <Platform>PS5</Platform>
</BugReport>
```
 17. Сделать Commit changes (сохранить) изменения на веб интерфейсе.
```
"Commit changes"
```
 18. Синхронизировать внешний и локальный репозиторий XML
```
git pull
```


# TXT
 1. Создать внешний репозиторий c названием TXT.
```
Recent Repositories - New
```
 2. Клонировать репозиторий TXT на локальный компьютер.
```
git clone https://github.com/flimbo275/TXT.git
```
 3. Внутри локального TXT создать файл “new.txt”.
```
cd TXT
touch new.txt
```
 4. Добавить файл под гит.
```
git add new.txt
```
 5. Закоммитить файл.
```bash
git commit -m "add 1 file"
```
 6. Отправить файл на внешний GitHub репозиторий.
```
 git push
```
 7. Отредактировать содержание файла “new.txt” - написать информацию о себе (ФИО, возраст, количество домашних животных, будущая желаемая зарплата). Всё написать в формате TXT.
```
vim new.txt

Name: Elena
Age: 31
Pets: 1
Expected salary: NZD 4000
```
 8. Отправить изменения на внешний репозиторий.
```bash
git commit -am "update 1 file"
git push
```
 9. Создать файл preferences.txt
```
touch preferences.txt
```
 10. В файл preferences.txt” добавить информацию о своих предпочтениях (Любимый фильм, любимый сериал, любимая еда, любимое время года, сторона которую хотели бы посетить) в формате TXT.
```
vim preferences.txt

favourite movie: The Lord of the Rings
favourite series: Simpsons
favourite food: meat
favourite season: summer
want to visit: New Zealand
```
 11. Создать файл sklls.txt добавить информацию о скиллах которые будут изучены на курсе в формате TXT
```
vim sklls.txt

skill 1: Client-server model
skill 2: HTTP server requests
skill 3: JSON_XML structure
skill 4: API Testing Postman
skill 5: logs from external server
skill 6: Dev Tools of web browsers
skill 7: VPN
skill 8: mobile testing
skill 9: XCode
skill 10: Android Studio
skill 11: Linux terminal
skill 12: SQL
skill 13: Postgres
skill 14: Redis
skill 15: Jmeter
skill 16: Scrum
```
 12. Сделать коммит в одну строку.
```bash 
git add sklls.txt preferences.txt | git commit -m "add 2 files"
```
 13. Отправить сразу 2 файла на внешний репозиторий
```
git push
```
 14. На веб интерфейсе создать файл bug_report.txt.
```
"add file", "create a new file"
```
 15. Сделать Commit changes (сохранить) изменения на веб интерфейсе.
```
"commit new file"
```
 16. На веб интерфейсе модифицировать файл bug_report.txt, добавить баг репорт в формате TXT.
```
bug_report.txt - "Edit this file"

Summary: Axe doesn't damage the orcs
Category: Gameplay
Severity: Critical
Priority: High
Steps to reproduce:
                1. Reach the second act
                2. Go to the_Auberdine lake
                3. Talk to Ricardo
                4. Take up an axe-type weapon
                5. Attack and try to damage the orc
Result: Orc has no damage
Expected result: Orc should be damaged
Version: 3.2.4
Platform: PS5
```
 17. Сделать Commit changes (сохранить) изменения на веб интерфейсе.
```
"Commit changes"
```
 18. Синхронизировать внешний и локальный репозиторий TXT
```
git pull
```
