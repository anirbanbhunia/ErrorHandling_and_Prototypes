class Person{

    constructor(n = "Unknown",a = 0){
        this.name = n
        this.age = a
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

const person1 = new Person()
console.log(person1.getDetails())

const person2 = new Person("Anirban",22)
console.log(person2.getDetails())