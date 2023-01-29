import Link from 'next/link'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ActionLog } from '~/redux/Reducer'
import {Box, Flex, Heading, Stack, useColorModeValue, Button} from '@chakra-ui/react'
const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", 'gray.900')} px="4">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading fontSize={{base : 18}}>
          Nuverin
        </Heading>
        <Stack
        flex={{base : 1, md: 0}}
        justify={"flex-end"}
        direction={"row"}
        spacing={6}>
          <Button
           
            >
              <Link href="/login">
                Sign In
              </Link>
          </Button>
          <Button
            >
            <Link href="/register">
              Sign Up
            </Link>
          </Button>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Navbar