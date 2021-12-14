import React, { useEffect, useState } from 'react';

export interface FormState {
    [key: string]: [string | null, Validators[]]
}

export class Validators {
    static minLength(number: number) {
        return function(value: string) {
            return value.length >= number;
        }
    }
    static maxLength(number: number) {
        return function(value: string) {
            return value.length <= number;
        }
    }
    static required() {
        return function(value: any) {
            return value !== undefined && value !== null && value.length > 0;
        }
    }
    static test(regexp: RegExp) {
        return function(value: string) {
            return value.match(regexp);
        }
    }
    static email() {
        return function(value: string) {
            return value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
        }
    }
    static sanitize() {
        return function(value: string) {
            return true;
            // return value.match("[^!<>?=+@{}_$%]");
        }
    }
}

{
    values: {} // controls as the keys
    errors: {} // --
}

/**
 * 
 * @param initialState 
 * @returns 
 */

export default function useForm(initialState: FormState) {
    const [values, setValues] = useState<any>({});
    const [validators, setValidators] = useState<any>({});
    const [errors, setErrors] = useState<any>({});

    function initState() {
        // Init the values here
        const valuesObj: any = {};
        const validatorObj: any = {};
        Object.keys(initialState).forEach((key) => {
            valuesObj[key] = initialState[key][0];
            validatorObj[key] = initialState[key][1];
        });
        setValues(valuesObj);
        setValidators(validatorObj);
    }

    useEffect(() => {
        initState();
    }, [initialState])

    function patchValue(key: string, value: string) {
        const dummyObj: any = {...values};
        dummyObj[key] = value;
        setValues(dummyObj);
    }

    function validate(key: string, value: string) {
        // For now, only validating the current field
        const validator = validators[key];
        let isValid = false;
        if(!Validators.sanitize()(value)) {
            setErrors({[key]: true});
            return;
        }
        for(let i = 0; i < validator.length; i++) {
            isValid = validator[i](value);
            if(!isValid) {
                setErrors({[key]: true})
                break;
            };
            setErrors({[key]: null})
        }
        // Coming soon..
        // We can validate all the interdependent fields here..
    }

    function handleChange({target: {name, value}}: any) {
        // Handle the change 
        patchValue(name, value);

        // Validate here
        validate(name, value);
    }

    function register(name: string) {
        return {name, onChange: handleChange}
    }

    function handleSubmit(e: any) {
        e.preventDefault();

    }

    return {values, errors, register, handleSubmit};
}