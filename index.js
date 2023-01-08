#! /usr/bin/env node
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
} //this is the basic father person class
class Student extends Person {
    courses;
    id;
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
        this.courses = [];
    }
    Add_Course(course) {
        this.courses.push(course);
        return this.courses;
    }
} //this is the child class of person which we will use to create objects of different students
class Teacher extends Person {
    courses;
    salary;
    timing;
    constructor(name, age, salary, timing) {
        super(name, age);
        this.salary = salary;
        this.timing = timing;
        this.courses = [];
    }
    Add_Course(course) {
        this.courses.push(course);
        return this.courses;
    }
} //this is the child class of person which we will use to create objects of different teachers
class Course {
    name;
    class_Teacher;
    students;
    timing;
    constructor(name, class_Teacher, timing) {
        this.name = name;
        this.class_Teacher = class_Teacher;
        this.timing = timing;
        this.students = [];
    }
    Add_student(student) {
        this.students.push(student);
        return this.students;
    }
} //this is course class which we will use to create objects of different courses in which we can assign them different students and same teacher
class Departmnet {
    name;
    courses;
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    Add_Course(courses) {
        this.courses.push(courses);
        return this.courses;
    }
} //this is the department class which we will use to create objects of different departments in which we can assign different courses
const student1 = new Student(`Student1`, 19, 1234);
const student2 = new Student(`Student2`, 18, 12345);
const student3 = new Student(`Student3`, 20, 123456);
const teacher1 = new Teacher(`Teacher1`, 35, 100000, `8:30 to 11:30`);
const departmnet1 = new Departmnet(`department1`);
const course = new Course(`course1`, teacher1, `8:30 to 11:30`);
//In the above step I have made some students a department a teacher and a course
student1.Add_Course(course);
student2.Add_Course(course);
student3.Add_Course(course);
teacher1.Add_Course(course);
course.Add_student(student1);
course.Add_student(student2);
course.Add_student(student3);
departmnet1.Add_Course(course);
//In the above step I have assigned a property to students, teacher, course and department
console.log(student1);
console.log(student2);
console.log(student3);
console.log(teacher1);
console.log(course);
console.log(departmnet1);
export {};
//In the above step I have showed all the data which I have created in this student management system
