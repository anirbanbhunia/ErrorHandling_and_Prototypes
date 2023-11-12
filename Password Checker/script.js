class User{
    #password
    constructor(n,p){
        this.username = n
        this.#password = p
    }
    passwordGetter(){
        return this.#password.replace(/./gi,"*")
    }
    passwordSetter(str){
        let number = false
        let upperCase = false
        
        for(let i = 0;i<str.length;i++){
            if(!isNaN(str.charAt(i))){
                number = true
            }else if(str.charAt(i) === str.charAt(i).toUpperCase()){
                upperCase = true
            }
        }
        if(number == true && upperCase == true && str.length>=8){
            return this.#password = str
        }else{
            console.log("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.")
        }
    }
}

const user = new User("Anirban","Password123")
console.log(user.passwordGetter())
user.passwordSetter(12345678)
user.passwordSetter("Anirban007")
console.log(user.passwordGetter())
user.passwordSetter("AnirbanBhunia")


 

