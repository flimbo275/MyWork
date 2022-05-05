GitHub. HW_2
1. На локальном репозитории сделать ветки для:
- Postman
- Jmeter
- CheckLists
- Bug Reports
- SQL
- Charles
- Mobile testing
```
git branch Postman
git branch Jmeter
git branch CheckLists
git branch Bug_Reports
git branch SQL
git branch Charles
git branch Mobile_testing
```
2. Запушить все ветки на внешний репозиторий
```
git push -u origin --all
```
3. В ветке Bug Reports сделать текстовый документ со структурой баг репорта
```
git checkout Bug_Reports
vim bug_report.txt

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
4. Запушить структуру багрепорта на внешний репозиторий
```
git add bug_report.txt
git commit -m "add 1 file"
git push
```
5. Вмержить ветку Bag Reports в Main
```
git checkout Main
git merge Bug_Reports
```
6. Запушить main на внешний репозиторий.
```
git add.
git commit -m "merge"
git push
```
7. В ветке CheckLists набросать структуру чек листа.
```
git checkout CheckLists

vim CheckList.txt

Author:
Environment:
#:
Title:
Expected result:
Actual Result:
Status:
BR_link:
```
8. Запушить структуру на внешний репозиторий
```
git add CheckList.txt
git commit -m "add checklist"
git push
```
9. На внешнем репозитории сделать Pull Request ветки CheckLists в main
```
"Pull requests"
"New pull request"
Base - main, compare - CheckLists
"Create Pull request"
"Merge pull request"
"Confirm merge"
```
10. Синхронизировать Внешнюю и Локальную ветки Main
```
git checkout main
git pull
```