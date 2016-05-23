import { Control } from '@angular/common';


interface ValidationResult {
    [key:string]:boolean
}

export /**
 * FormValidators
 */
class FormValidators {

    constructor() {
        
    }
    
    static validateEmail(c:Control):ValidationResult{
        let value = c.value,emailRegex = /\S+@\S+\.\S+/;
        console.log('input value ',value);
        if(!emailRegex.test(value)){
            return {
                invalidEmail : true
            }
        }
        
        return null;
    };
    
}