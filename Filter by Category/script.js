function products(arr){
    return function (c){
        return arr.filter((e)=>{
            return e.category === c
        })
    }
}

let arr = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
]

const clothingProducts = products(arr)("Clothing")

console.log(clothingProducts)