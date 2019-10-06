/* By using an Object Constructor*/


function employee(id, name, salary, year) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.year = year;
}


new_employee = new employee(103, "PhuocNguyen", 1500, 2019);
console.log(new_employee.id + " " + new_employee.name + " " + new_employee.salary);