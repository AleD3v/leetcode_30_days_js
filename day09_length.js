let argumentsLength = function(...args) {
    let count = 0
    for(let v in args){
        count++
    }
    return count
};

let bolo = ['ovo', 'leite', 'manteiga', 'farinha']

console.log(argumentsLength(...bolo))