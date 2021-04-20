/* The _.once() method of Function in lodash is used to create a function which can call func parameter of this method only once. However, repeated calls to this function will return the value returned in the first call. 
*/

let once = (func) => {
    let call = true;
    return function(){
        if (call) {
            result =  func.apply(null, arguments);
            call = false;
        }
        return result
    };
};
 
let add = (a,b) => a + b ;
const onceAdd = once(add); 
console.log(onceAdd(1, 2)); // 3 
console.log(onceAdd(2, 2)); // 3 
