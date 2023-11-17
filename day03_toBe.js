var expect = function(val) {
    return {
        toBe: (otherVal) => {
            if(val !== otherVal){
                throw new Error("Not Equal")
            }
            return true
        },
        notToBe: (otherVal) => {
            if(val === otherVal){
                throw new Error(`Equal`)
            }
            return true
        }
    }
}
let f = expect(5).toBe(6)
let gf = expect(6).notToBe(5)
console.log(f)
console.log(gf)