/*
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
*/

// var map = function(arr, fn) {
//     let resultado = arr.map(fn)
//     return resultado
// };

let map = function(arr, fn){
    let resultado = []

    for(let i = 0; i < arr.length; i++){
        resultado.push(fn(arr[i]))
    }
    return resultado
}

let a = [1, 2, 3]
// let b = map(a, function(i){
//     return i + 1
// })
console.log(map(a, function(i){
    return i + 1
}))