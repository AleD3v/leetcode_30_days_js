var createCounter = function conuter(n) {
    let list = [n]
    
        for(let start = n+1; start < 20; start++){
            list.push(start)
        }

    return function() {
        
        return list
    }
}
// var createCounter = function(n) {
//     return function() {
//         return n++
//     };
// };

// let conuter = createCounter(10)
// console.log(conuter())
// console.log(conuter())
// console.log(conuter())

let conuter = createCounter(10)
console.log(conuter())