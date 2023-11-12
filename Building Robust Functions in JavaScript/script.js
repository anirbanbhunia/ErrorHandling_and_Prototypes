function getPerson(obj){
    try{
        if(typeof(obj)!== "object" || !obj.name || !obj.age){
            throw new Error("Invalid parameter type")
        }
        return `Name: ${obj.name}, Age: ${obj.age}`
    }catch(e){
        return e.message
    }
}
console.log(getPerson({ name: "Anirban", age: 22 })) 
console.log(getPerson({ name: "Anirban" })) 
console.log(getPerson(["name", "Anirban"])) 

