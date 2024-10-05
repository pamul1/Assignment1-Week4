import { Employeemployee, employeeFullTime, employeePartTime } from "./employee.js";

let employeeForm

function hideForm() {

    
    let selector = document.querySelector("select")
    

    console.log(selector.value)
    if (selector.value === "fullTime") {
        salaryYear.style.display = "block"
        wagehourly.style.display = "none"
        console.log("Salary of Year")
    }

    if (selector.value === "partTime") {
        hourlyWageDiv.style.display = "block"
        yearlySalaryDiv.style.display = "none"
        console.log("Wage per Hour")
    }


}


function createEmployee() {

    event.preventDefault()

    let name = inputName.value
    let age = parseFloat(inputAge.value)
    let type = employeeType.value
    let p = document.querySelector("p")

    let salaryperYear = parseFloat(inputSalaryperYear.value)
    let wageperHourly = parseFloat(inputWageperHour.value)


    if (type === "fullTime") {
        employeeForm = new fullTimeEmployee(name, age, yearlySalary)
        p.textContent = employeeForm.getDetails()
        fullTimeForm.style.display = 'block'
    }

    if (type === "partTime") {
        employeeForm = new partTimeEmployee(name, age, hourlyWage)
        p.textContent = employeeForm.getDetails()
        partTimeForm.style.display = 'block'
    }


}

function infoFulltime() {

    event.preventDefault()

    let p = document.querySelector("p")
    let vacationDays = parseFloat(inputVacationDays.value)
    let getVacationsInfo=globalObject.accumulateVacationDays(vacationDays)

    p.textContent = `Your estimated monthly pay is ${globalObject.calculateMonthlyPay()} and you have ${getVacationsInfo} vacation days.`

}

function infoParttime() {

    event.preventDefault()

    let hours = parseFloat(inputWorkedHours.value)
    let pay = employeeForm.workHours(hours)

    let p = document.querySelector("p")
    p.textContent = `Your earned pay is ${pay}`



}


window.infoParttime = infoParttime

window.createEmployee = createEmployee

window.infoFulltime = infoFulltime

window.hideForm = hideForm