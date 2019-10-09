function employee(id, name, salary) {

    this.id = id;
    this.name = name;
    this.salary = salary;


    /*before defining method, we need to add property in the function with same name as method.*/
    this.changeSalary = changeSalary;

    function changeSalary(otherSalary) {

        this.salary = otherSalary;
    }

}

/*create new employee object*/
e_employee = new employee(101, "PhuocNguyen", 15500);
document.writeln(e_employee.id + " " + e_employee.name + " " + e_employee.salary);

/*change your salary*/

e_employee.changeSalary(1600);

document.writeln("<br>" + e_employee.id + " " + e_employee.name + " " + e_employee.salary);