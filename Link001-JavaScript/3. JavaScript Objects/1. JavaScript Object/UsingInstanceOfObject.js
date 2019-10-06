function creatNewObject() {
    var employee = new Object(); // using new keyword : Object
    employee.id = 102;
    employee.name = "John";
    employee.year = 2019;

    console.log(employee.id + " " + employee.name + " " + employee.year);
}

creatNewObject()