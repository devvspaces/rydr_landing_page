import { Heading, Box, Text, Button } from '@chakra-ui/react'
import style from '@/styles/service.module.css'
import React from 'react'
import { Link } from '@chakra-ui/next-js'

export default function Service({
  icon, title, description, action, link, ...rest
}: {
  icon: React.ReactNode,
  title: string,
  description: string,
  action: string,
  link: string,
  rest?: any
}) {
  return (
    <Box className={style.service} {...rest}>
      <Box>
        {icon}
      </Box>

      <Heading size='md'>
        {title}
      </Heading>

      <Text>{description}</Text>

      <Link target={'_blank'} href={link} colorScheme='blue'>{action}</Link>
    </Box>
  )
}