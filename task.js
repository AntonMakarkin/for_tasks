(function () {
  'use strict';
})();

var money = prompt("Ваш бюджет на месяц?","");
var time = prompt("Введите дату в формате YYYY-MM-DD","");

var appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};

var expense_point_1 = prompt("Введите обязательную статью расходов в этом месяце", "");
var expense_cost_1 = prompt("Во сколько это обойдется?", "");
var expense_point_2 = prompt("Введите обязательную статью расходов в этом месяце", "");
var expense_cost_2 = prompt("Во сколько это обойдется?", "");

appData.expenses.expense_point_1 = expense_cost_1;
appData.expenses.expense_point_2 = expense_cost_2;

alert(appData.budget/30);





