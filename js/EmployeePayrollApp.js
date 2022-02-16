/* UC8:- Ability to Set Event Listener on Salary Range to display appropriate value */
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary—output');
output.textContent = salary.value;
salary.addEventListener('input', function() 
{
    output.textContent = salary.value; 
});

/* UC10:- Perform Validation Employee Payroll Data setter methods.
          - Name must starts with Cap and has minimum 3 characters.
          - Start Date - Must not be future date. As well as should be within 30 days of joining. 
*/
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value))
        textError.textContent = "";
    else
        textError.textContent = "Name is incorrect";
});

const date = document.querySelector("#date");
const dateError = document.querySelector(".date-error");
dateError.textContent = "";
date.addEventListener('input', function () {
    let now = new Date();
    if (startDate > now)
        dateError.textContent = "Start Date is a Future Date!";
    var diff = Math.abs(now.getTime() - startDate.getTime());
    if (diff / (1000 * 60 * 60 * 24) > 30)
        dateError.textContent = "Start Date is beyond 30 Days!";
});