import {
  Container, Button, Flex, Heading, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  IconButton,
  Box,
  Stack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js"
import style from '@/styles/navbar.module.css'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export default function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container maxW={'1500px'} className={style.navContainer}>
      <Flex className={style.navbar} justifyContent={'space-between'}>
        <Heading as={'h1'} size={{
          base: 'md',
          md: 'lg',
        }}>THINKNODES</Heading>

        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          onClick={isOpen ? onClose : onOpen}
          className={style.hamburgerIcon}
        />

        <DesktopNav />
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }} p={0} className={style.dropNav}>
          <Stack as={'nav'} spacing={4} className={style.navbarLinks} mb={'1rem'}>
            <Link href="/#services">Services</Link>
            <Link href="/about">About Us</Link>
            <Link href="#contact-us">Contact Us</Link>
          </Stack>
          <Link href="#contact-us" textDecor={'none !important'}>
            <Button className={style.getStarted}>Stay Ahead</Button>
          </Link>
        </Box>
      ) : null}
    </Container>
  )
}

function DesktopNav() {
  return (
    <Flex className={style.navbarRight}>
      <Flex className={style.navbarLinks}>
        <Link href="/#services">Services</Link>
        <Link href="/about">About Us</Link>
        <Link href="#contact-us">Contact Us</Link>
      </Flex>
      <Link href="#contact-us" textDecor={'none !important'}>
        <Button className={style.getStarted}>Stay Ahead</Button>
      </Link>
    </Flex>
  )
}