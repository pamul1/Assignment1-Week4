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


    constructor(name, age, yearlySalary){
        super(name, age)
        this.yearlySalary= yearlySalary
        this.vacationDays= 0
        
    }
    calculateMonthlyPay(){
         this.salary = (this.yearlySalary / 12)
         return this.salary
    }


    accumulateVacationDays(vacationDays){
        this.vacationDays= this.vacationDays + vacationDays;
        return this.vacationDays
    }
}

export class employeePartTime extends Employee{

    constructor(name, age, hourlyWage){
        super(name, age)
        this.hourlyWage= hourlyWage
    }
    workHours(hours){
        this.salary= (this.hourlyWage * hours);
        return this.salary
    }
}