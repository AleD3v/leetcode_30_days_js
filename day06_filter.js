/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
*/

// var filter = function(arr, fn) {
//     let resultado = arr.filter(fn)
//     return resultado
// }

let filter = function(arr, fn){
    let resultado = []
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i])){
            resultado.push(arr[i])
        }
    }
    return resultado
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let b = filter(a, function(i){
    if(i % 2 == 0){
        return i
    }
})
console.log(b)