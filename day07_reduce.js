/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init
    for(let i = 0; i < nums.length; i++){
        
        val = fn(val, nums[i])
    }
    return val
};

let a = [1, 2, 3, 4]
let start = 0
let b = reduce(a, function(acumulador, atual){
    return acumulador + atual
}, start)

console.log(b)