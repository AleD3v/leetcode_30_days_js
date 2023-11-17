
/* @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
*/

var createCounter = function(init) {
    const fix = init
    return {
        increment: function(){
            init++
            return init
        },
        reset: function(){
            return init = fix
        },
        decrement: function(){
            init--
            return init
        }
    }
};

const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.reset())