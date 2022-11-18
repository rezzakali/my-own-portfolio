import {
  Box,
  Center,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import cryptoCrackerImage from '../assets/crypto.png';
import eComerceImage from '../assets/eCommerce.png';
import htmlProjectImage from '../assets/html.png';
import medlabImage from '../assets/medlab.png';

function Projects() {
  return (
    <Box mt={'100px'}>
      <Heading as="h4" size="md" mb={5}>
        My Works <span bg={'orange.200'}>______</span>
      </Heading>
      <Box p={4} display={{ md: 'flex' }} boxShadow={'lg'}>
        <Box flexShrink={0} w={'50%'} m={'auto'}>
          <Image
            boxSize="100%"
            objectFit="cover"
            src={htmlProjectImage}
            alt="html project image"
            borderRadius={'lg'}
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            fontSize="2xl"
            letterSpacing="wide"
            color="teal.600"
          >
            Red Store
          </Text>
          <Text mt={2} color="gray.500" fontSize={'xl'}>
            Red store is one kind of e-commerce website where I try to design
            the template of this site using html , css and javascipt. In here I
            try to make a register and login interface where I used tranform for
            tranforming the interface and also I try to make show the details
            about the product / t-shirt and many more.
          </Text>
          <Stack direction={['column', 'row']} spacing={4} mt={2}>
            <Center p={2}>
              <Link
                colorscheme="teal"
                variant="outline"
                href="https://github.com/rezzakali/e-Commerce-Website"
                target="_blank"
                rel="noreferrer"
              >
                Source code
              </Link>
            </Center>
            <Center p={2}>
              <Link
                colorscheme="teal"
                variant="outline"
                href="https://redstr.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </Link>
            </Center>
          </Stack>
        </Box>
      </Box>

      <Box p={4} display={{ md: 'flex' }} boxShadow={'lg'}>
        <Box flexShrink={0} w={'50%'} m={'auto'}>
          <Image
            boxSize="100%"
            objectFit="cover"
            src={cryptoCrackerImage}
            alt="html project image"
            borderRadius={'lg'}
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            fontSize="2xl"
            letterSpacing="wide"
            color="teal.600"
          >
            Crypto Tracker App
          </Text>
          <Text mt={2} color="gray.500" fontSize={'xl'}>
            crypto Tracker App is a crypto currency web application in where I
            used cryptocurrency api which is provided by the coingecko.com. I
            used React js to complete this project in where a beautiful search
            bar appear througth which user can easily search any crypto and show
            the price volume and many more.
          </Text>
          <Stack direction={['column', 'row']} spacing={4} mt={2}>
            <Center p={2}>
              <Link
                colorscheme="teal"
                variant="outline"
                href="https://github.com/rezzakali/crypto-tracker-app"
                target="_blank"
                rel="noreferrer"
              >
                Source code
              </Link>
            </Center>
            <Center p={2}>
              <Link
                colorscheme="teal"
                variant="outline"
                href="https://cryptrackerapp.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </Link>
            </Center>
          </Stack>
        </Box>
      </Box>
      <Box p={4} display={{ md: 'flex' }} boxShadow={'lg'}>
        <Box flexShrink={0} w={'50%'} m={'auto'}>
          <Image
            boxSize="100%"
            objectFit="cover"
            src={eComerceImage}
            alt="html project image"
            borderRadius={'lg'}
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            fontSize="2xl"
            letterSpacing="wide"
            color="teal.600"
          >
            Online Shopping
          </Text>
          <Text mt={2} color="gray.500" fontSize={'xl'}>
            Online Shopping is an e-Commerce website where I used fake store API
            for products and also used Redux Toolkit for managing state
            globally. In this project I tried my best where I calculate the
            total amount of products those are added to the cart by the users
            and also they can increase and decrease the product after addedd to
            the cart and I used Razorpay for accepting payments in backend side.
          </Text>
          <Stack direction={['column', 'row']} spacing={4} mt={2}>
            <Center p={2}>
              <Link
                colorscheme="teal"
                variant="outline"
                href="https://github.com/rezzakali/online-shopping-website"
                target="_blank"
                rel="noreferrer"
              >
                Source code
              </Link>
            </Center>
            <Center p={2}>
              <Link
                colorscheme="teal"
                variant="outline"
                href="https://meek-taffy-e2c0f9.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </Link>
            </Center>
          </Stack>
        </Box>
      </Box>
      <Box p={4} display={{ md: 'flex' }} boxShadow={'lg'}>
        <Box flexShrink={0} w={'50%'} m={'auto'}>
          <Image
            boxSize="100%"
            objectFit="cover"
            src={medlabImage}
            alt="medlab project image"
            borderRadius={'lg'}
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            fontSize="2xl"
            letterSpacing="wide"
            color="teal.600"
          >
            Medilab Landing Page
          </Text>
          <Text mt={2} color="gray.500" fontSize={'xl'}>
            Medilab Landiing page is a bootstrap web template where I tried to
            make a template for the medical website with doctors faculty, users
            testimonials , the services provided by the medilab. In this project
            I used bootstrap.
          </Text>
          <Stack direction={['column', 'row']} spacing={4} mt={2}>
            <Center p={2}>
              <Link
                colorscheme="teal"
                variant="outline"
                href="https://github.com/rezzakali/medilab-project"
                target="_blank"
                rel="noreferrer"
              >
                Source code
              </Link>
            </Center>
            <Center p={2}>
              <Link
                colorscheme="teal"
                variant="outline"
                href="https://medilab-d.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </Link>
            </Center>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
