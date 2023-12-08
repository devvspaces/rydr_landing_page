import Head from 'next/head'
import { Heading, VStack, Box, Text, Image, Button, Input, Divider, Flex, Container, Grid, GridItem, Avatar } from '@chakra-ui/react'
import style from '@/styles/about.module.css'
import hstyle from '@/styles/home.module.css'
import { Testimonial } from '@/components/testimonial'
import Service from '@/components/service'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rydr - About Us</title>
        <meta name="description" content="We Are the Future of Artificial Intelligence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={'1200px'} className={style.about}>
        <Grid
          templateRows={{
            md: 'repeat(3, 1fr)',
          }}
          templateColumns={{
            md: 'repeat(2, 1fr)',
          }}
          gap={{
            md: '5rem',
            base: '2rem'
          }}
          h={{
            md: '900px',
            base: '100%'
          }}
          mb={'4rem'}
          className={style.aboutGrid}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <Image h={{
              md: '100% !important',
              sm: '400px !important',
            }}  src='about1.jpeg' alt='About Rydr' />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading mb={4}>
              Our Mission
            </Heading>
            <Text>
            At Rydr, our mission is to revolutionize transportation by providing a seamless, safe, and reliable ridesharing experience. We aim to empower communities, enhance accessibility, and foster a sense of trust among our users.
            </Text>
          </GridItem>
          <GridItem rowSpan={2} colSpan={1}>
            <Image h={{
              md: '100% !important',
              sm: '400px !important',
            }} src='about2.jpeg' alt='About Rydr' />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading mb={4}>
              Our Core Values
            </Heading>
            <Text>
            We are committed to delivering dependable transportation solutions, ensuring riders can rely on us for prompt and trustworthy service every time.
            </Text>
            <Text>
            Safety is non-negotiable. We prioritize the well-being of our community, implementing stringent safety measures and continuous improvements to guarantee secure journeys.
            </Text>
            <Text>We believe in creating an inclusive platform accessible to all, providing convenient transportation options to connect people, places, and experiences.</Text>
            <Text>Embracing innovation is at our core. We continuously evolve our technology and services to offer cutting-edge solutions that redefine the ridesharing experience.</Text>
          </GridItem>
        </Grid>
      </Container>


      <Container maxW={'1200px'} py={'4rem'}>
        <Heading className={hstyle.sectionHead}>
          MEET OUR  <span>FOUNDER</span>
        </Heading>
        <Flex gap={{
          base: '1rem',
          md: '3rem'
        }} justify={'space-between'} wrap={{
          base: 'wrap',
          md: 'nowrap',
        }}>
          <Avatar w={'200px'} h={'200px'} src={'https://netrobe.vercel.app/static/media/about-img.b0b8e3b77756c9309b88.jpg'} mx={{
            base: 'auto',
            md: '0'
          }} />
          <Box>
            <Box mx={{
              base: 'auto',
              md: '0'
            }} w={'fit-content'} textAlign={{
              base: 'center',
              md: 'left'
            }}>
              <Heading as={'h3'} fontSize={'2xl'} mb={4} className={style.founderHead}>
                Ayanwola Ayomide
              </Heading>
              <Text className={style.founderRole}>
                Founder/CEO
              </Text>
            </Box>
            <Text className={style.founderDesc} textAlign={{
              base: 'center',
              md: 'left'
            }}>
              I am a Full-Stack Engineer with extensive experience in Python, Golang, TypeScript, and JavaScript. I specialize in building reliable systems with a focus on software architecture, agile development, and developer operations. With my expertise in cloud architecture, I am adept at designing and deploying distributed systems, microservices, and Restful APIs on cloud infrastructures.</Text>
          </Box>
        </Flex>
      </Container>

      <Container maxW={'1200px'} my={'2rem'}>
        <Divider background={'#7A7676'} />
      </Container>
    </>
  )
}
