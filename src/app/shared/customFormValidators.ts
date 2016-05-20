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
        if(emailRegex.test(value)){
            return {
                invalidEmail : true
            }
        }
        
        return null;
    };
    
}