import Navbar from './navbar'
import Footer from './footer'
import { Box } from '@chakra-ui/react'
import style from '@/styles/layout.module.css'

export default function Layout({ children }: any) {
  return (
    <Box pos={'relative'} overflowX={'hidden'}>
      <Box className={style.gradient1}>
      </Box>
      <Box pos={'relative'} zIndex={'10000'}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Box>
      <Box className={style.gradient2}></Box>
    </Box>
  )
}