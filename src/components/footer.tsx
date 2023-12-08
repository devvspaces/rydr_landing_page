import { Heading, VStack, Box, HStack, UnorderedList, ListItem, Text, Image, Button, Input, Divider, Flex, Container } from '@chakra-ui/react'
import { Link } from "@chakra-ui/next-js"
import style from '@/styles/footer.module.css'
import EmailIcon from './email-icon'

export default function Footer() {
  return (
    <Container maxW={'1500px'} py={'3rem'}>
      <Flex gap={{
        base: "4rem",
        md: 10
      }} justify={{
        base: 'left',
        md: 'space-around',
        sm: 'center'
      }} flexWrap={'wrap'}>

        <Box>
          <Heading size={'md'} fontWeight={'400'} mb={4}>
            Our Foot Print
          </Heading>

          <UnorderedList listStyleType={'square'}>
            <ListItem mb={2} fontSize={'14px'}>USA</ListItem>
            <ListItem mb={2} fontSize={'14px'}>Canada</ListItem>
            <ListItem fontSize={'14px'}>United Kingdom</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading size={'md'} fontWeight={'400'} mb={4}>
            Quick Links
          </Heading>

          <UnorderedList listStyleType={'square'}>
            <ListItem mb={2} fontSize={'14px'}><Link href={'/#services'}>Services</Link></ListItem>
            <ListItem fontSize={'14px'}><Link href={'/about'}>About Us</Link></ListItem>
          </UnorderedList>
        </Box>

        <Box id='contact-us'>
          <Heading size={'md'} fontWeight={'400'} mb={4}>
            Contact Us
          </Heading>

          <UnorderedList listStyleType={'none'} m={0} mb={6}>
            <ListItem fontSize={'14px'} display={'flex'} alignItems={'center'} gap={3} mb={2}>
              <EmailIcon /> <Link href={'mailto:akin@thinknodes.com'}>akin@thinknodes.com</Link>
            </ListItem>
            <ListItem fontSize={'14px'} display={'flex'} alignItems={'center'} gap={3}>
              <EmailIcon /> <Link href={'mailto:ayomide@thinknodes.com'}>ayomide@thinknodes.com</Link>
            </ListItem>
          </UnorderedList>

          <HStack>
            <Link href={'#'}>
              <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.3643 12.6573C25.7651 12.9431 25.1296 13.1306 24.4789 13.2138C25.1567 12.7764 25.6771 12.0838 25.9222 11.2585C25.2779 11.6702 24.5729 11.9602 23.8378 12.1161C23.2389 11.4293 22.3859 11 21.4417 11C19.6288 11 18.159 12.5825 18.159 14.5342C18.159 14.8113 18.1881 15.081 18.244 15.3397C15.5159 15.1923 13.0971 13.7852 11.4781 11.647C11.1956 12.1689 11.0337 12.7761 11.0337 13.4238C11.0337 14.65 11.6133 15.7317 12.494 16.3655C11.9727 16.3479 11.4629 16.1964 11.0071 15.9234C11.0069 15.9382 11.0069 15.953 11.0069 15.9679C11.0069 17.6803 12.1384 19.1088 13.6401 19.4335C13.1567 19.575 12.6497 19.5957 12.1577 19.494C12.5754 20.8982 13.7877 21.9199 15.2241 21.9485C14.1006 22.8964 12.6852 23.4615 11.1473 23.4615C10.8823 23.4615 10.6211 23.4447 10.3643 23.4121C11.8169 24.4149 13.5424 25 15.3961 25C21.4341 25 24.7358 19.6145 24.7358 14.9441C24.7358 14.7908 24.7326 14.6384 24.7263 14.4868C25.3689 13.9866 25.9236 13.3671 26.3643 12.6573Z" fill="#F5F5F5" />
                <circle cx="17.8643" cy="17.5" r="17" stroke="#F3F3F3" />
              </svg>
            </Link>
            <Link target={'_blank'} href={'https://www.instagram.com/thinknodes/'}>
              <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3154 23V14.9036H11.5287V23H14.3154ZM12.9224 13.7975C13.8941 13.7975 14.499 13.1758 14.499 12.3989C14.4809 11.6045 13.8942 11 12.9408 11C11.9876 11 11.3643 11.6045 11.3643 12.3989C11.3643 13.1759 11.969 13.7975 12.9042 13.7975H12.9223H12.9224ZM15.8578 23H18.6445V18.4786C18.6445 18.2366 18.6626 17.9949 18.7362 17.8219C18.9376 17.3384 19.3961 16.8377 20.1659 16.8377C21.1743 16.8377 21.5777 17.5802 21.5777 18.6686V22.9999H24.3643V18.3576C24.3643 15.8707 22.9895 14.7135 21.156 14.7135C19.6527 14.7135 18.9926 15.525 18.6259 16.0777H18.6445V14.9035H15.8578C15.8944 15.6632 15.8578 22.9998 15.8578 22.9998L15.8578 23Z" fill="white" />
                <circle cx="17.8643" cy="17.5" r="17" stroke="#F3F3F3" />
              </svg>

            </Link>
          </HStack>
        </Box>

      </Flex>
    </Container>
  )
}