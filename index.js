/* Your Code Here */
function createEmployeeRecord(employeeData){
    let employees = {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2], 
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employees;
}

function createEmployeeRecords(employeeData){
    let employees = employeeData.map(employees => createEmployeeRecord(employees))
    return employees;
}

function createTimeInEvent(clockIn){
    let [date, time] = clockIn.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time),
        date: date
    })
    return this;
}

function createTimeOutEvent(clockOut){
    let [date, time] = clockOut.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time),
        date: date
    })
    return this;
}

function hoursWorkedOnDate(day){
    let timeIn = this.timeInEvents.find(event => event.date === day)
    let timeOut = this.timeOutEvents.find(event => event.date === day)
    return ((timeOut.hour - timeIn.hour)/100);
}

function wagesEarnedOnDate(day){
    let hours = hoursWorkedOnDate.call(this, day)
    return (hours * this.payPerHour);
}

function findEmployeeByFirstName(employeeDb, firstName){
    return (employeeDb.find(employees => employees.firstName === firstName));
}

function calculatePayroll(employeeData){
    let total = employeeData.reduce((total, employees) => total + allWagesFor.call(employees), 0)
    return total;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

