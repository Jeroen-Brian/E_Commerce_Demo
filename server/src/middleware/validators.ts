import * as validator from 'class-validator'


export function emailValidation(email: string){
    return validator.isEmail(email);
}


export function passwordValidation(password:string){
    return !validator.contains(password, ' ');
}

export function addressValidation(address:string){
    return !validator.contains(address, '$, @, %, !');
}