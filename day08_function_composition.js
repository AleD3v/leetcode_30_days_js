var compose = function(...funcoes) {
	return function(x) {
        return funcoes.reduce((acc, fn)=>{
            return fn(acc)
        }, x)
    }
}

let soma = x => x + 1
let quadrado = x => x*x
let dobro = x => x*2

console.log(compose(dobro, quadrado, soma)(4))