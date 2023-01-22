// Class
class Person {
    constructor(firsName, lastName, dob) {
        this.firsName = firsName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firsName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.firsName);
console.log(person2.dob);

console.log(person1.getBirthYear());
console.log(person1.getFullName());


