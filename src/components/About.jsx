import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import Aos from 'aos';
import React, { useEffect } from 'react';
import myPic from '../assets/pic.png';

function About() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <Box mt={'20px'} data-aos="fade-up" data-aos-duration="3000">
      <Center>
        <Image
          boxSize="300px"
          objectFit="conver"
          name="rezzak"
          src={myPic}
          boxShadow="lg"
          borderRadius={'2xl'}
        />
      </Center>
      <br />
      <Center
        fontWeight="bold"
        fontSize="2xl"
        letterSpacing="wide"
        color="teal.600"
      >
        <Text>Developer Rezzak Ali</Text>
      </Center>
      <Center>
        <Text
          mt={2}
          color="gray.500"
          fontSize={'xl'}
          style={{ textIndent: '2cm' }}
        >
          Rezzak Ali, currently training himselt to become a MERN full stack web
          developer. I have just completed my graduation in Bachelor of Computer
          Application (BCA) from Gauhati University (Assam) in 2022 with a good
          result (8.2 marks). I have a passion in Software Development and
          Programming and I am a open-source fans!
        </Text>
      </Center>
      <br />
      <Center>
        <Button rounded={'full'} px={6}>
          Get Resume
        </Button>
      </Center>
      <Box mt={'70px'}>
        <Heading as="h4" size="md">
          My Skills <span bg={'orange.200'}>______</span>
        </Heading>
        <Heading as="h5" size="xm" mt="20px" fontFamily="operator mono">
          Expertise in
        </Heading>
        <br />
        <Stack direction={['column', 'row']}>
          <Button colorScheme="teal" variant="outline">
            HTML
          </Button>
          <Button colorScheme="teal" variant="outline">
            CSS
          </Button>
          <Button colorScheme="teal" variant="outline">
            JavaScript
          </Button>
          <Button colorScheme="teal" variant="outline">
            ES6
          </Button>
          <Button colorScheme="teal" variant="outline">
            React
          </Button>
          <Button colorScheme="teal" variant="outline">
            Bootstrap
          </Button>
          <Button colorScheme="teal" variant="outline">
            React Bootstrap
          </Button>
          <Button colorScheme="teal" variant="outline">
            SASS
          </Button>
          <Button colorScheme="teal" variant="outline">
            Chakra-ui
          </Button>
          <Button colorScheme="teal" variant="outline">
            Material UI
          </Button>
          <Button colorScheme="teal" variant="outline">
            Styled Component
          </Button>
        </Stack>
      </Box>

      <Box mt={'10px'}>
        <Heading as="h5" size="xm" mt="20px" fontFamily="operator mono">
          Comfortable with
        </Heading>
        <br />
        <Stack direction={['column', 'row']}>
          <Button colorScheme="teal" variant="outline">
            Node js
          </Button>
          <Button colorScheme="teal" variant="outline">
            Express js
          </Button>
          <Button colorScheme="teal" variant="outline">
            MongoDB
          </Button>
          <Button colorScheme="teal" variant="outline">
            Mongoosh
          </Button>
          <Button colorScheme="teal" variant="outline">
            Multer
          </Button>
          <Button colorScheme="teal" variant="outline">
            Firebase
          </Button>
          <Button colorScheme="teal" variant="outline">
            TypeScript
          </Button>
          <Button colorScheme="teal" variant="outline">
            React-Redux
          </Button>
          <Button colorScheme="teal" variant="outline">
            Redux-Toolkit
          </Button>
        </Stack>
      </Box>
      <Box mt={'10px'}>
        <Heading as="h5" size="xm" mt="20px" fontFamily="operator mono">
          Familiar with
        </Heading>
        <br />
        <Stack direction={['column', 'row']}>
          <Button colorScheme="teal" variant="outline">
            React icons
          </Button>
          <Button colorScheme="teal" variant="outline">
            Rechart
          </Button>
          <Button colorScheme="teal" variant="outline">
            React colorful
          </Button>
          <Button colorScheme="teal" variant="outline">
            Moment
          </Button>
          <Button colorScheme="teal" variant="outline">
            Sweet alert
          </Button>

          <Button colorScheme="teal" variant="outline">
            React awesome slide
          </Button>
          <Button colorScheme="teal" variant="outline">
            Formik
          </Button>
          <Button colorScheme="teal" variant="outline">
            React toastify
          </Button>
          <Button colorScheme="teal" variant="outline">
            Bootstrap icons
          </Button>
        </Stack>
      </Box>
      <Box mt={'10px'}>
        <Heading as="h5" size="xm" mt="20px" fontFamily="operator mono">
          Tools I use
        </Heading>
        <br />
        <Stack direction={['column', 'row']}>
          <Button colorScheme="teal" variant="outline">
            VS Code
          </Button>
          <Button colorScheme="teal" variant="outline">
            Git
          </Button>
          <Button colorScheme="teal" variant="outline">
            Netlify
          </Button>
          <Button colorScheme="teal" variant="outline">
            Heroku
          </Button>
          <Button colorScheme="teal" variant="outline">
            Postman
          </Button>
          <Button colorScheme="teal" variant="outline">
            Thunder Client
          </Button>
          <Button colorScheme="teal" variant="outline">
            Razorpay for payment integration
          </Button>
        </Stack>
      </Box>
      <br />
      <br />
    </Box>
  );
}

export default About;
