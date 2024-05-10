import { ERROR } from "./error"

class Compute{
    static add(a,b){
        if(typeof a != 'number'){
            throw new Error(ERROR.SUM.MUST_BE_NUMBER('First parameter'))
        }
        if(typeof b != 'number'){
            throw new Error(ERROR.SUM.MUST_BE_NUMBER('Second parameter'))
        }
        return a+b
    }
    static subtract(a,b){
        return a-b
    }
    static multiply(a,b){
        return a*b
    }
    static divide(a,b){
        return a/b
    }
}    
export {Compute};