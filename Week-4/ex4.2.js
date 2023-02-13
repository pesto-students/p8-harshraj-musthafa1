var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// TODO: create the class Teacher and a method teach
function Teacher(){
    this.teach = function(subject){
        console.log(this.name + " is now teaching " + subject)
    }
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype)

var teacher1 = new Teacher();
teacher1.initialize("Adam", 45);
teacher1.teach("Inheritance");

var teacher2 = new Teacher();
teacher2.initialize("john", 35);
teacher2.teach("prototypes");