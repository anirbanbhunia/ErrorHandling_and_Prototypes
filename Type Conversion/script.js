function convertToNumber(s){
    try{
        if(isNaN(s)){
            throw new Error("Invalid number")
        }
        return Number(s)
    }catch(e){
        return e.message
    }
}

console.log(convertToNumber(123))
console.log(convertToNumber("580"))
console.log(convertToNumber("xyz"))
console.log(convertToNumber(undefined))
console.log(convertToNumber(" "))
