
import { NextPage } from 'next/types'
import React from 'react'
import AuthMiddleWare from '~/componets/AuthMiddleWare'
import Navbar from '~/componets/navbar'

const Home: NextPage = () => {
  return (
    <>
    <AuthMiddleWare>
        <Navbar />
      </AuthMiddleWare>
    </>
  )
}

export default Home