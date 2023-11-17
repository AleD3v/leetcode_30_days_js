function memoize(fn) {
    const cache = {}
    return function(...args) {
        const key = args.join("_")
        if (key in cache){
            console.log(`Cache hit for key "${key}"! Returning from cache...`)
            return cache[key]
        }else{
            console.log(`Cache miss for key "${key}"! Calculating...`);
            const result = fn(...args);
            cache[key] = result;
            console.log(`Stored result ${result} in cache for key "${key}"`);
            return result
        }
    }
}

let count = 0
let memorizado = memoize(function (a, b){
    count ++
    return a + b
})

console.log(memorizado(1, 2))
console.log(memorizado(4, 1))
console.log(memorizado(1, 2))
console.log(`O número de vezes que uma conta foi feita é: ${count}`)

