import React, { useEffect, useState } from 'react';
import Input from './Input';
import AppButton from '../shared/components/AppButton/AppButton';
import useForm, { FormState, Validators } from '../hooks/useForm';
import styles from './Input.module.css';
import { setConstantValue } from 'typescript';
import { uploadImage } from '../shared/firebase';

const initState: FormState = {
    fullName: ["", [Validators.minLength(3)]],
    // image: [null, []],
    dob: [null, []],
    profession: ["", []],
    address: ["", []],
    phone: [null, []],
    email: ["", [Validators.email()]],
    wage: ["", []]
}

export default function BackEnd() {
    const {register, ...formObj} = useForm(initState);
    const [image, setImage] = useState<any>(null);

    async function handleSubmit(e: any) {
        try {
            e.preventDefault();

            const path = await uploadImage(image);

            const formData = new FormData();
            Object.keys(formObj.values).forEach(key => {
                formData.append(key, formObj.values[key]);
            })
            formData.append('image', path);
            console.log(formData);

            // Send the request here...
            // But was getting error in deploying the functions, Some weird error, still looking for it

        } catch(e: any) {
            console.log(e.message);
        }
    }

    function onFileChange(e: any) {
        setImage(e.target.files[0]);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <Input {...formObj} type="text" {...register('fullName')} />
                <div className={styles.inputContainer}>
                    <label htmlFor="">Image</label>
                    <input style={{color: 'white'}} type="file" onChange={onFileChange} required/>
                </div>
                <Input {...formObj} type="date" {...register('dob')} />
                <Input {...formObj} type="text" {...register('profession')} />
                <Input {...formObj} type="text" {...register('address')} />
                <Input {...formObj} type="tel" {...register('phone')}/>
                <Input {...formObj} type="email" {...register('email')}/>
                <Input {...formObj} type="number" {...register('wage')}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}