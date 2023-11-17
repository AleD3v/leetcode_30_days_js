var addTwoPromises = async function(promise1, promise2) {
    let [r1, r2] = await Promise.all([promise1, promise2])
    let soma = r1 + r2
    console.log(soma)
};

p1 = new Promise(resolve => setTimeout(() => resolve(2), 2000))
p2 = new Promise(resolve => setTimeout(()=> resolve(5), 6000))

addTwoPromises(p1, p2)

/*Outra solução
var addTwoPromises = async function(promise1, promise2) {
    
    let r1 = await promise1
    let r2 = await promise2
    return res1 + res2; 
}
*/