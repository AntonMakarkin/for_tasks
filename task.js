(function () {
  'use strict';
})();

var money = +prompt("Ваш бюджет на месяц?","");
var time = prompt("Введите дату в формате YYYY-MM-DD","");

var appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};

//appData.expenses.expense_point_1 = expense_cost_1;
//appData.expenses.expense_point_2 = expense_cost_2;

for(let i = 0; i < 2; i++)
{
  let expense_point_1 = prompt("Введите обязательную статью расходов в этом месяце", "");
      expense_cost_1 = prompt("Во сколько это обойдется?", "");
      /*let expense_point_2 = prompt("Введите обязательную статью расходов в этом месяце", "");
      let expense_cost_2 = prompt("Во сколько это обойдется?", "");*/
      if(typeof(expense_point_1) === "string" && (typeof(expense_point_1)) != null && (typeof(expense_cost_1)) != null
        && expense_point_1 != '' && expense_cost_1 != '' && expense_point_1.length < 50)
      {
        console.log("done");
        appData.expenses[expense_point_1] = expense_cost_1;
      }
      else
      {
        console.log("bad result");
        i--;
      }
};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100)
{
  console.log("Минимальный уровень достатка");
}
else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 1000)
{
  console.log("Средний уровень достатка");
}
else if(appData.moneyPerDay > 1000)
{
  console.log("Высокий уровень достатка")
}
else
{
  console.log("Произошла ошибка");
}






