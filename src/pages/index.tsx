import Head from "next/head";
import {
  Heading,
  VStack,
  Box,
  Text,
  Image,
  Button,
  Input,
  Divider,
  Flex,
  Container,
} from "@chakra-ui/react";
import style from "@/styles/home.module.css";
import { Testimonial } from "@/components/testimonial";
import Service from "@/components/service";
import { Link } from "@chakra-ui/next-js";
import { testimonials } from "@/lib/testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rydr</title>
        <meta
          name="description"
          content="We Are the Future of Artificial Intelligence"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW={"1500px"}>
        <VStack className={style.hero}>
          <Box mb={10}>
            <Heading className={style.heading}>
              Where Every Ride Is an <br /> <span>Adventure</span>
            </Heading>
            <Text>
              Explore a dynamic platform that brings together drivers and riders
              in perfect harmony. Whether you&apos;re a passenger seeking a reliable
              ride or a driver ready to provide a smooth journey, Rydr connects
              you effortlessly.
            </Text>
            <Link href="/#services" textDecor={"none !important"}>
              <Button colorScheme="blue">Show Me How</Button>
            </Link>
          </Box>

          <Box className={style.heroImg}>
            <Image className={style.heroImg1} src="hero.png" alt="AI" />
            <Image className={style.heroImg2} src="academ.gif" alt="AI" />
          </Box>
        </VStack>
      </Container>

      <Box pos={"relative"}>
        <Container maxW={"1500px"} className="customScroll" id="services">
          <Heading className={style.sectionHead}>
            <span>How We Can</span> Help You
          </Heading>
          <Flex
            id={"ai-integration"}
            gap={10}
            justify={"space-between"}
            overflowX={"scroll"}
          >
            <Service
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="45"
                  viewBox="0 0 44 45"
                  fill="none"
                >
                  <rect
                    width="44"
                    height="45"
                    rx="8"
                    fill="url(#paint0_linear_35_129)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25 13C25.2652 13 25.5196 13.1054 25.7071 13.2929C25.8946 13.4804 26 13.7348 26 14V15H27C27.7956 15 28.5587 15.3161 29.1213 15.8787C29.6839 16.4413 30 17.2044 30 18V19H31C31.2652 19 31.5196 19.1054 31.7071 19.2929C31.8946 19.4804 32 19.7348 32 20C32 20.2652 31.8946 20.5196 31.7071 20.7071C31.5196 20.8946 31.2652 21 31 21H30V25H31C31.2652 25 31.5196 25.1054 31.7071 25.2929C31.8946 25.4804 32 25.7348 32 26C32 26.2652 31.8946 26.5196 31.7071 26.7071C31.5196 26.8946 31.2652 27 31 27H30V28C30 28.7956 29.6839 29.5587 29.1213 30.1213C28.5587 30.6839 27.7956 31 27 31H26V32C26 32.2652 25.8946 32.5196 25.7071 32.7071C25.5196 32.8946 25.2652 33 25 33C24.7348 33 24.4804 32.8946 24.2929 32.7071C24.1054 32.5196 24 32.2652 24 32V31H20V32C20 32.2652 19.8946 32.5196 19.7071 32.7071C19.5196 32.8946 19.2652 33 19 33C18.7348 33 18.4804 32.8946 18.2929 32.7071C18.1054 32.5196 18 32.2652 18 32V31H17C16.2044 31 15.4413 30.6839 14.8787 30.1213C14.3161 29.5587 14 28.7956 14 28V27H13C12.7348 27 12.4804 26.8946 12.2929 26.7071C12.1054 26.5196 12 26.2652 12 26C12 25.7348 12.1054 25.4804 12.2929 25.2929C12.4804 25.1054 12.7348 25 13 25H14V21H13C12.7348 21 12.4804 20.8946 12.2929 20.7071C12.1054 20.5196 12 20.2652 12 20C12 19.7348 12.1054 19.4804 12.2929 19.2929C12.4804 19.1054 12.7348 19 13 19H14V18C14 17.2044 14.3161 16.4413 14.8787 15.8787C15.4413 15.3161 16.2044 15 17 15H18V14C18 13.7348 18.1054 13.4804 18.2929 13.2929C18.4804 13.1054 18.7348 13 19 13C19.2652 13 19.5196 13.1054 19.7071 13.2929C19.8946 13.4804 20 13.7348 20 14V15H24V14C24 13.7348 24.1054 13.4804 24.2929 13.2929C24.4804 13.1054 24.7348 13 25 13ZM27 17H17C16.7348 17 16.4804 17.1054 16.2929 17.2929C16.1054 17.4804 16 17.7348 16 18V28C16 28.2652 16.1054 28.5196 16.2929 28.7071C16.4804 28.8946 16.7348 29 17 29H27C27.2652 29 27.5196 28.8946 27.7071 28.7071C27.8946 28.5196 28 28.2652 28 28V18C28 17.7348 27.8946 17.4804 27.7071 17.2929C27.5196 17.1054 27.2652 17 27 17ZM24 19C24.5046 18.9998 24.9906 19.1904 25.3605 19.5335C25.7305 19.8766 25.9572 20.3468 25.995 20.85L26 21V25C26.0002 25.5046 25.8096 25.9906 25.4665 26.3605C25.1234 26.7305 24.6532 26.9572 24.15 26.995L24 27H20C19.4954 27.0002 19.0094 26.8096 18.6395 26.4665C18.2695 26.1234 18.0428 25.6532 18.005 25.15L18 25V21C17.9998 20.4954 18.1904 20.0094 18.5335 19.6395C18.8766 19.2695 19.3468 19.0428 19.85 19.005L20 19H24ZM24 21H20V25H24V21Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_35_129"
                      x1="-8.77027"
                      y1="22.4999"
                      x2="50.5405"
                      y2="22.4999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18BED4" />
                      <stop
                        offset="0.328161"
                        stop-color="#18BED4"
                        stop-opacity="0.57204"
                      />
                      <stop
                        offset="0.852871"
                        stop-color="#18BED4"
                        stop-opacity="0.382347"
                      />
                      <stop offset="1" stop-color="#18BED4" stop-opacity="0" />
                      <stop
                        offset="1"
                        stop-color="#18BED4"
                        stop-opacity="0.176679"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              }
              action={"GET STARTED"}
              title={"Commute"}
              link={"https://calendly.com/akin-b3u/discovery-call"}
              description={
                "Streamline your daily travels with Rydr, offering reliable rides for your routine. Say goodbye to the stress of commuting. Whether it's a daily trip to work or frequent errands, RydrCommute ensures you arrive at your destination comfortably and on time. Choose convenience every day."
              }
            />

            <Service
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="45"
                  viewBox="0 0 44 45"
                  fill="none"
                >
                  <rect
                    width="44"
                    height="45"
                    rx="8"
                    fill="url(#paint0_linear_35_129)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25 13C25.2652 13 25.5196 13.1054 25.7071 13.2929C25.8946 13.4804 26 13.7348 26 14V15H27C27.7956 15 28.5587 15.3161 29.1213 15.8787C29.6839 16.4413 30 17.2044 30 18V19H31C31.2652 19 31.5196 19.1054 31.7071 19.2929C31.8946 19.4804 32 19.7348 32 20C32 20.2652 31.8946 20.5196 31.7071 20.7071C31.5196 20.8946 31.2652 21 31 21H30V25H31C31.2652 25 31.5196 25.1054 31.7071 25.2929C31.8946 25.4804 32 25.7348 32 26C32 26.2652 31.8946 26.5196 31.7071 26.7071C31.5196 26.8946 31.2652 27 31 27H30V28C30 28.7956 29.6839 29.5587 29.1213 30.1213C28.5587 30.6839 27.7956 31 27 31H26V32C26 32.2652 25.8946 32.5196 25.7071 32.7071C25.5196 32.8946 25.2652 33 25 33C24.7348 33 24.4804 32.8946 24.2929 32.7071C24.1054 32.5196 24 32.2652 24 32V31H20V32C20 32.2652 19.8946 32.5196 19.7071 32.7071C19.5196 32.8946 19.2652 33 19 33C18.7348 33 18.4804 32.8946 18.2929 32.7071C18.1054 32.5196 18 32.2652 18 32V31H17C16.2044 31 15.4413 30.6839 14.8787 30.1213C14.3161 29.5587 14 28.7956 14 28V27H13C12.7348 27 12.4804 26.8946 12.2929 26.7071C12.1054 26.5196 12 26.2652 12 26C12 25.7348 12.1054 25.4804 12.2929 25.2929C12.4804 25.1054 12.7348 25 13 25H14V21H13C12.7348 21 12.4804 20.8946 12.2929 20.7071C12.1054 20.5196 12 20.2652 12 20C12 19.7348 12.1054 19.4804 12.2929 19.2929C12.4804 19.1054 12.7348 19 13 19H14V18C14 17.2044 14.3161 16.4413 14.8787 15.8787C15.4413 15.3161 16.2044 15 17 15H18V14C18 13.7348 18.1054 13.4804 18.2929 13.2929C18.4804 13.1054 18.7348 13 19 13C19.2652 13 19.5196 13.1054 19.7071 13.2929C19.8946 13.4804 20 13.7348 20 14V15H24V14C24 13.7348 24.1054 13.4804 24.2929 13.2929C24.4804 13.1054 24.7348 13 25 13ZM27 17H17C16.7348 17 16.4804 17.1054 16.2929 17.2929C16.1054 17.4804 16 17.7348 16 18V28C16 28.2652 16.1054 28.5196 16.2929 28.7071C16.4804 28.8946 16.7348 29 17 29H27C27.2652 29 27.5196 28.8946 27.7071 28.7071C27.8946 28.5196 28 28.2652 28 28V18C28 17.7348 27.8946 17.4804 27.7071 17.2929C27.5196 17.1054 27.2652 17 27 17ZM24 19C24.5046 18.9998 24.9906 19.1904 25.3605 19.5335C25.7305 19.8766 25.9572 20.3468 25.995 20.85L26 21V25C26.0002 25.5046 25.8096 25.9906 25.4665 26.3605C25.1234 26.7305 24.6532 26.9572 24.15 26.995L24 27H20C19.4954 27.0002 19.0094 26.8096 18.6395 26.4665C18.2695 26.1234 18.0428 25.6532 18.005 25.15L18 25V21C17.9998 20.4954 18.1904 20.0094 18.5335 19.6395C18.8766 19.2695 19.3468 19.0428 19.85 19.005L20 19H24ZM24 21H20V25H24V21Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_35_129"
                      x1="-8.77027"
                      y1="22.4999"
                      x2="50.5405"
                      y2="22.4999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18BED4" />
                      <stop
                        offset="0.328161"
                        stop-color="#18BED4"
                        stop-opacity="0.57204"
                      />
                      <stop
                        offset="0.852871"
                        stop-color="#18BED4"
                        stop-opacity="0.382347"
                      />
                      <stop offset="1" stop-color="#18BED4" stop-opacity="0" />
                      <stop
                        offset="1"
                        stop-color="#18BED4"
                        stop-opacity="0.176679"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              }
              action={"GET STARTED"}
              title={"Explore"}
              link={"https://calendly.com/akin-b3u/consulting-call"}
              description={
                "Embrace adventure with Rydr, your gateway to exciting journeys. Discover new places, attend events, or embark on spontaneous trips hassle-free. RydrExplore connects you with drivers eager to take you wherever curiosity leads, making every ride an opportunity for exploration."
              }
            />

            <Service
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="45"
                  viewBox="0 0 44 45"
                  fill="none"
                >
                  <rect
                    width="44"
                    height="45"
                    rx="8"
                    fill="url(#paint0_linear_35_129)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25 13C25.2652 13 25.5196 13.1054 25.7071 13.2929C25.8946 13.4804 26 13.7348 26 14V15H27C27.7956 15 28.5587 15.3161 29.1213 15.8787C29.6839 16.4413 30 17.2044 30 18V19H31C31.2652 19 31.5196 19.1054 31.7071 19.2929C31.8946 19.4804 32 19.7348 32 20C32 20.2652 31.8946 20.5196 31.7071 20.7071C31.5196 20.8946 31.2652 21 31 21H30V25H31C31.2652 25 31.5196 25.1054 31.7071 25.2929C31.8946 25.4804 32 25.7348 32 26C32 26.2652 31.8946 26.5196 31.7071 26.7071C31.5196 26.8946 31.2652 27 31 27H30V28C30 28.7956 29.6839 29.5587 29.1213 30.1213C28.5587 30.6839 27.7956 31 27 31H26V32C26 32.2652 25.8946 32.5196 25.7071 32.7071C25.5196 32.8946 25.2652 33 25 33C24.7348 33 24.4804 32.8946 24.2929 32.7071C24.1054 32.5196 24 32.2652 24 32V31H20V32C20 32.2652 19.8946 32.5196 19.7071 32.7071C19.5196 32.8946 19.2652 33 19 33C18.7348 33 18.4804 32.8946 18.2929 32.7071C18.1054 32.5196 18 32.2652 18 32V31H17C16.2044 31 15.4413 30.6839 14.8787 30.1213C14.3161 29.5587 14 28.7956 14 28V27H13C12.7348 27 12.4804 26.8946 12.2929 26.7071C12.1054 26.5196 12 26.2652 12 26C12 25.7348 12.1054 25.4804 12.2929 25.2929C12.4804 25.1054 12.7348 25 13 25H14V21H13C12.7348 21 12.4804 20.8946 12.2929 20.7071C12.1054 20.5196 12 20.2652 12 20C12 19.7348 12.1054 19.4804 12.2929 19.2929C12.4804 19.1054 12.7348 19 13 19H14V18C14 17.2044 14.3161 16.4413 14.8787 15.8787C15.4413 15.3161 16.2044 15 17 15H18V14C18 13.7348 18.1054 13.4804 18.2929 13.2929C18.4804 13.1054 18.7348 13 19 13C19.2652 13 19.5196 13.1054 19.7071 13.2929C19.8946 13.4804 20 13.7348 20 14V15H24V14C24 13.7348 24.1054 13.4804 24.2929 13.2929C24.4804 13.1054 24.7348 13 25 13ZM27 17H17C16.7348 17 16.4804 17.1054 16.2929 17.2929C16.1054 17.4804 16 17.7348 16 18V28C16 28.2652 16.1054 28.5196 16.2929 28.7071C16.4804 28.8946 16.7348 29 17 29H27C27.2652 29 27.5196 28.8946 27.7071 28.7071C27.8946 28.5196 28 28.2652 28 28V18C28 17.7348 27.8946 17.4804 27.7071 17.2929C27.5196 17.1054 27.2652 17 27 17ZM24 19C24.5046 18.9998 24.9906 19.1904 25.3605 19.5335C25.7305 19.8766 25.9572 20.3468 25.995 20.85L26 21V25C26.0002 25.5046 25.8096 25.9906 25.4665 26.3605C25.1234 26.7305 24.6532 26.9572 24.15 26.995L24 27H20C19.4954 27.0002 19.0094 26.8096 18.6395 26.4665C18.2695 26.1234 18.0428 25.6532 18.005 25.15L18 25V21C17.9998 20.4954 18.1904 20.0094 18.5335 19.6395C18.8766 19.2695 19.3468 19.0428 19.85 19.005L20 19H24ZM24 21H20V25H24V21Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_35_129"
                      x1="-8.77027"
                      y1="22.4999"
                      x2="50.5405"
                      y2="22.4999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18BED4" />
                      <stop
                        offset="0.328161"
                        stop-color="#18BED4"
                        stop-opacity="0.57204"
                      />
                      <stop
                        offset="0.852871"
                        stop-color="#18BED4"
                        stop-opacity="0.382347"
                      />
                      <stop offset="1" stop-color="#18BED4" stop-opacity="0" />
                      <stop
                        offset="1"
                        stop-color="#18BED4"
                        stop-opacity="0.176679"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              }
              action={"GET STARTED"}
              title={"Assist"}
              link={"https://calendly.com/akin-b3u/collaboration-clarity-call"}
              description={
                "Your safety is our priority. Rydr provides a secure and supportive environment, offering reliable assistance and responsive support whenever you need it. From emergency services to resolving queries, our dedicated team ensures your peace of mind throughout your Rydr experience. Your safety, our commitment."
              }
            />
          </Flex>
        </Container>
        <Image className={style.servicesGif} src="gif4.gif" alt="Anim" />
      </Box>
    </>
  );
}
