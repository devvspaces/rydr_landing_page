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
        <title>ThinkNodes - About Us</title>
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
            }}  src='about1.jpeg' alt='About thinknodes' />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading mb={4}>
              Mission and Values
            </Heading>
            <Text>
              At ThinkNodes, our mission is to harness the power of artificial intelligence to transform industries and enhance lives. We&rsquo;re committed to pushing the boundaries of innovation, developing cutting-edge AI solutions that drive progress and solve complex challenges.
            </Text>
            <Text>
              Our core values of integrity, creativity, inclusivity, and ethical AI development guide us in creating a future where AI benefits all, fostering trust and reliability in our technology.
            </Text>
          </GridItem>
          <GridItem rowSpan={2} colSpan={1}>
            <Image h={{
              md: '100% !important',
              sm: '400px !important',
            }} src='about2.jpeg' alt='About thinknodes' />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading mb={4}>
              History
            </Heading>
            <Text>
              Founded with a vision for innovation, Thinknodes has a rich history of pioneering advancements in artificial intelligence.
              From our humble beginnings, we&rsquo;ve relentlessly pursued cutting-edge solutions that empower businesses and individuals.
            </Text>
            <Text>
              With a legacy of breakthroughs, we continue to shape the future of AI, driving progress, and transforming industries. Join us on a journey through our storied history, where innovation meets limitless possibilities.
            </Text>
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
          <Avatar w={'200px'} h={'200px'} src={'ceo.jpeg'} mx={{
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
                Akintunde Opaleye
              </Heading>
              <Text className={style.founderRole}>
                Founder/CEO
              </Text>
            </Box>
            <Text className={style.founderDesc} textAlign={{
              base: 'center',
              md: 'left'
            }}>
              Akin, popularly known as &rdquo;Akin the Great&rdquo;, is an AI strategist and consultant who holds the position of CAIO for several innovative startups. Not only is he a thought leader in the AI arena, but he&rsquo;s also a dynamic voice on Instagram, where he regularly demystifies AI concepts and shares groundbreaking insights. Leveraging his vast experience in business development and cyber/cloud security engineering, Akin established ThinkNodes. With ThinkNodes, Akin&rsquo;s vision is to sculpt the future of Artificial Intelligence, crafting bespoke AI and automation solutions that empower businesses to streamline processes, boost profitability, and surge ahead in today&rsquo;s competitive landscape.
            </Text>
          </Box>
        </Flex>
      </Container>

      <Container maxW={'1200px'} my={'2rem'}>
        <Divider background={'#7A7676'} />
      </Container>
    </>
  )
}
