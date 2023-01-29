
import React from 'react'
import { useFormContext } from 'react-hook-form';
import {FormControl, FormLabel, Input} from '@chakra-ui/react'
type FormInputProps = {
    label: string;
    name: string;
    type? : string;
}
const FormInput: React.FC<FormInputProps> = ({
    label,
    name,
    type = "text"
}) => {
    const {
        register,
        formState: {errors}
    } = useFormContext()
  return (
    <FormControl>
        <FormLabel>{label}</FormLabel>
        <input 
        type={type}
        {...register(name)}/>
    </FormControl>
  )
}

export default FormInput