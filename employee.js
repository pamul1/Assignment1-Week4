export class Employee{

    constructor(name, age){
        this.name= name 
        this.age= age
        this.salary= 0
    }
    getDetails(){
        return `Your name is ${this.name}, your age is ${this.age}`
    }
}


export class employeeFullTime extends Employee{


    constructor(name, age, SalaryperYear){
        super(name, age)
        this.SalaryperYear= SalaryperYear
        this.vacationDays= 0
        
    }
    calculateMonthlyPay(){
         this.salary = (this.SalaryperYear / 12)
         return this.salary
    }


    accumulateVacationDays(vacationDays){
        this.vacationDays= this.vacationDays + vacationDays;
        return this.vacationDays
    }
}

export class employeePartTime extends Employee{

    constructor(name, age, wageperHour){
        super(name, age)
        this.wageperHour= wageperHour
    }
    workHours(hours){
        this.salary= (this.wageperHour * hours);
        return this.salary
    }
}