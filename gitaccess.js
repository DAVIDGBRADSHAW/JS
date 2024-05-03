class Person{
    constructor (surname, firstname){
        this.surname =surname;
        this.firstname = firstname;
    }

//public method
greet() {
    console.log('english in here ${this.surname} english ${this.firstName}  more english.`);
}

//Private method
#calculateBirthdayYear(){
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
}

// Public method that uses the privare methos
getBirthYear(){
    return this.#calculateBirthdayYear();
    }
}

//
const john = new Person('dylan', 30);
dylan.greet();
//output  ...
console.log(john.getBirthYear());
// output is yearx
console.log(dylan.calculateBirthYear());
//not a function



public private, protected properties


#calculateBirthYear(){
    const calculateBirthYear =