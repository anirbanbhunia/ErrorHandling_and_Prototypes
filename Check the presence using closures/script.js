function numberChecker(arr){
    return function (a){
        let num = false
        for(let i = 0;i<arr.length;i++){
            if(arr[i] == a){
                num = true
            }
        }
        if(num == true){
            return true
        }
        return false
    }
}

const arr = [1,2,3,4,5]
const checkNum = numberChecker(arr)
console.log(checkNum(5))
console.log(checkNum(9))
console.log(checkNum(2))
