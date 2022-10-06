```JavaScript

// 1. Вставить параметр salary из окружения в request
// 2. Вставить параметр age из окружения в age
// 3. Вставить параметр name из окружения в name
// 4. Отправить запрос.
// 5. Статус код 200

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
// 6. Спарсить response body в json.
// 7. Спарсить request.
var respData = pm.response.json ();
var reqData = request.data;
var reqSalary = reqData.salary;
var person = respData.person;

// 8. Проверить, что json response имеет параметр start_qa_salary
pm.test("json response has start_qa_salary", function () {
    pm.expect(respData).to.have.property("start_qa_salary");
});

// 9. Проверить, что json response имеет параметр qa_salary_after_6_months
pm.test("json response has qa_salary_after_6_months", function () {
    pm.expect(respData).to.have.property("qa_salary_after_6_months");
});

// 10. Проверить, что json response имеет параметр qa_salary_after_12_months
pm.test("json response has qa_salary_after_12_months", function () {
    pm.expect(respData).to.have.property("qa_salary_after_12_months");
});
// 11. Проверить, что json response имеет параметр qa_salary_after_1.5_year
pm.test("json response has qa_salary_after_1.5_year", function () {
    pm.expect(respData).to.have.property("qa_salary_after_1.5_year");
});
// 12. Проверить, что json response имеет параметр qa_salary_after_3.5_years
pm.test("json response has qa_salary_after_3.5_years", function () {
    pm.expect(respData).to.have.property("qa_salary_after_3.5_years");
});
// 13. Проверить, что json response имеет параметр person
pm.test("json response has person", function () {
    pm.expect(respData).to.have.property("person");
});
// 14. Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)
pm.test ("start_qa_salary = request salary", function () {
    pm.expect(respData.start_qa_salary).to.eql(+reqSalary)
});

// 15. Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)
pm.test ("qa_salary_after_6_months = request salary*2", function () {
    pm.expect(respData.qa_salary_after_6_months).to.eql(reqSalary*2)
});

// 16. Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)
pm.test ("qa_salary_after_12_months = request salary*2.7", function() {
    pm.expect(respData.qa_salary_after_12_months).to.eql(reqSalary*2.7)
});

// 17. Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)
pm.test ("qa_salary_after_1.5_year = request salary*3.3", function() {
    pm.expect(respData['qa_salary_after_1.5_year']).to.eql(reqSalary*3.3)
});

// 18. Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)
pm.test ("qa_salary_after_3.5_years = request salary*3.8", function() {
    pm.expect(respData['qa_salary_after_3.5_years']).to.eql(reqSalary*3.8)
});

// 19. Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)
pm.test ("1st element u_mane = request salary", function() {
    pm.expect(person.u_name[1]).to.eql(+reqSalary)
});

// 20. Проверить, что что параметр u_age равен age из request (age забрать из request.)
pm.test ("u_age = request age", function() {
    pm.expect(person.u_age).to.eql(+reqData.age)
});

// 21. Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)
pm.test ("u_salary_5_years = request salary*4.2", function() {
    pm.expect(person.u_salary_5_years).to.eql(reqData.salary*4.2)
});

//------------------------------------------------------------------------------------------------------------

//2. Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

//3. Спарсить response body в json.
//4. Спарсить request.
var respData = pm.response.json();
var reqData = pm.request.url.query.toObject ();
var respSalary = respData.salary

//5. Проверить, что name в ответе равно name s request (name забрать из request.)
pm.test("Test name", function () {
        pm.expect(respData.name).to.eql(reqData.name);
});

//6. Проверить, что age в ответе равно age из request (age забрать из request.)
pm.test("Test age", function () {
        pm.expect(respData.age).to.eql(+reqData.age);
});

//7. Вывести в консоль параметр salary из request.
console.log("reqData.salary = " + reqData.salary)

//8. Вывести в консоль параметр salary из response.
console.log(respSalary);

//9. Вывести в консоль 0-й элемент параметра salary из response.
console.log("respSalary 0 =",respSalary[0]);

//10. Вывести в консоль 1-й элемент параметра salary из response.
console.log("respSalary 1 =",respSalary[1]);

//11. Вывести в консоль 2-й элемент параметра salary из response.
console.log("respSalary 2 =",respSalary[2]);

//12. Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)
//console.log("reqSalary =" + typeof(reqData.salary));
pm.test ("Resp salary 0 = req salary", function() {
    pm.expect(respSalary[0]).to.eql(+reqData.salary)
});

//13. Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)
pm.test ("Resp salary 1 = req salary * 2", function() {
    pm.expect(+respSalary[1]).to.eql(reqData.salary*2)
});

//14. Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)
pm.test ("Resp salary 2 = req salary * 3", function() {
    pm.expect(+respSalary[2]).to.eql(reqData.salary*3)
});

//15. Создать в окружении переменную name
//18. Передать в окружение переменную name
pm.environment.set("name", "Elena");

// 16. Создать в окружении переменную age
// 19. Передать в окружение переменную age
pm.environment.set("age", 32);

//17. Создать в окружении переменную salary
//20. Передать в окружение переменную salary
pm.environment.set("salary", 4000);

//21. Написать цикл который выведет в консоль по порядку элементы списка из параметра salary.

respSalary.forEach(element=>
console.log (element));

