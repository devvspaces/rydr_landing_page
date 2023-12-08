import { Box, Flex, Heading, Avatar, Text, HStack } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import style from '@/styles/testimonial.module.css'

export function Testimonial({
  name, description, nameLink, companyLink, image, message
}: {
  name: string,
  description: string,
  nameLink: string,
  companyLink: string,
  image: string,
  message: string
}) {
  return (
    <Box className={style.testimonial} px={8} py={'4rem'} minW={'350px'}>
      <Flex gap={5} mb={'1.5rem'} align={'center'}>

        <Avatar size={'lg'} name={name} src={image} />

        <Flex flexDir={'column'}>
          <Heading
            onClick={() => {
              window.open(nameLink, '_blank')
            }}
            size='md'
            mb={3}
            style={{
              color: '#FFF',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 'normal',
              cursor: 'pointer',
              transition: '.3s',
            }}
            _hover={{
              color: 'blue.200 !important',
            }}
          >
            {name}
          </Heading>
          <Text
            onClick={() => {
              window.open(companyLink, '_blank')
            }}
            style={{
              color: '#91AFE5',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
              cursor: 'pointer',
              transition: '.3s',
            }}
            _hover={{
              color: 'gold !important',
            }}
          >{description}</Text>
        </Flex>

      </Flex>

      <Box mb={'2.5rem'}>
        <HStack>
          <StarIcon color={'#ECB119'} />
          <StarIcon color={'#ECB119'} />
          <StarIcon color={'#ECB119'} />
          <StarIcon color={'#ECB119'} />
          <StarIcon color={'#ECB119'} />
        </HStack>
      </Box>

      <Text style={{
        borderRadius: '8px',
        background: '#29333A',
        padding: '20px',
        color: '#7899DB',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '1.7'
      }}>
        “{message}”
      </Text>
    </Box>
  )
}