import { Employee, employeeFullTime, employeePartTime } from "./employee.js";

let employeeForm

function hideForm() {

    
    let selector = document.querySelector("select")
    fullTimeForm.style.display = "none"
    partTimeForm.style.display = "none"

    console.log(selector.value)
    if (selector.value === "fullTime") {
        salaryperYear.style.display = "block"
        wageperHour.style.display = "none"
        console.log("Salary of Year")
    }

    if (selector.value === "partTime") {
        wageperHour.style.display = "block"
        salaryperYear.style.display = "none"
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
    let wageperHour = parseFloat(inputWageperHour.value)


    if (type === "fullTime") {
        employeeForm = new employeeFullTime(name, age, salaryperYear)
        p.textContent = employeeForm.getDetails()
        fullTimeForm.style.display = 'block'
    }

    if (type === "partTime") {
        employeeForm = new employeePartTime(name, age, wageperHour)
        p.textContent = employeeForm.getDetails()
        partTimeForm.style.display = 'block'
    }


}

function infoFulltime() {

    event.preventDefault()

    let p = document.querySelector("p")
    let vacationDays = parseFloat(inputVacationDays.value)
    let getVacationsInfo=employeeForm.accumulateVacationDays(vacationDays)

    p.textContent = `Your estimated monthly pay is ${employeeForm.calculateMonthlyPay()} and you have ${getVacationsInfo} vacation days.`

}

function infoParttime() {

    event.preventDefault()

    let hours = parseFloat(inputWorkedHours.value)
    let pay = employeeForm.workHours(hours)

    let p = document.querySelector("p")
    p.textContent = `The pay you earned is ${pay}`



}


window.infoParttime = infoParttime

window.createEmployee = createEmployee

window.infoFulltime = infoFulltime

window.hideForm = hideForm