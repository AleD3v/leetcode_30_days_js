var once = function(fn) {
    let called = false
    return function(...args){
        if(!called){
            called = true
            return fn(...args)
        }
        return undefined
    }
};

let fn = (a, b, c) => a+b+c
let oncefn = once(fn)
console.log(oncefn(1,2,3))
console.log(oncefn(1,4,3))