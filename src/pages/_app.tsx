import React from 'react'
import {AppProps} from "next/app"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from '~/redux/store'
import { ChakraProvider } from '@chakra-ui/react'

const queryClient = new QueryClient()
const App = ({Component, pageProps}: AppProps) => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>

      <Component {...pageProps} />
      </QueryClientProvider>

    </ChakraProvider>
  )
}

export default App