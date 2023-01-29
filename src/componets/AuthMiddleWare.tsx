import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { getUser } from '../lib/helper'

interface Auth {
    children: React.ReactNode
    enableAuth? : boolean
}
const AuthMiddleWare: React.FC<Auth> = ({children, enableAuth}) => {
  
  return (
    <>
        {children}
    </>
  )
}

export default AuthMiddleWare