import { Box, Button, FormControl, FormLabel} from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import FormInput from '~/componets/FormInput'
import { IUserCreate } from '~/typed'

const Register = () => {
  const user = async(input: IUserCreate) => {
      await axios.post("/api/create", {
        name: input.name,
        email: input.email,
        password: input.password
      })
  }
  const router = useRouter()
  const queryClient = useQueryClient()
  const {mutate, isLoading} = useMutation({
    mutationFn: user,
    onSuccess: ()=> {
      router.push("/login")
    }
  })
  const {handleSubmit, register} = useForm<IUserCreate>()
  const onSubmit = async(input: IUserCreate) => {
    mutate(input);
  }
  return (
    <Box bg="whiteAlpha.100" boxSize="lg" mx="auto" p="3">
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
            <FormLabel>name</FormLabel>
            <input 
            type={"text"}
            {...register("name")}/>
        </FormControl>
        <FormControl>
            <FormLabel>email</FormLabel>
            <input 
            type={"email"}
            {...register("email")}/>
        </FormControl>
        <FormControl>
            <FormLabel>password</FormLabel>
            <input 
            type="password"
            {...register("password")}/>
        </FormControl>
        <Button isLoading={isLoading} type="submit">
          Sign Up
        </Button>
        </form>
    </Box>
  )
}

export default Register