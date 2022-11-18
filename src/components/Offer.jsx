import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineBug } from 'react-icons/ai';
import { BsBraces, BsCodeSlash } from 'react-icons/bs';

function Offer() {
  return (
    <Box>
      <Heading as="h4" size="md">
        What I will do for you <span bg={'orange.200'}>______</span>
      </Heading>
      <br />
      <VStack display={{ md: 'flex' }} fontSize="xl">
        <Box p={4} display={{ md: 'flex' }} boxShadow={'lg'}>
          <Box flexShrink={0}>
            <BsCodeSlash />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
              fontWeight="bold"
              fontSize="md"
              letterSpacing="wide"
              color="teal.600"
            >
              Front-end Development with React
            </Text>
            <Text mt={2} color="gray.500">
              I am very comfortable to working with React js . I know react
              router dom, various react framework like chakra-ui, Material UI,
              react bootstrap and various kind of npm package like formik,
              react-select, code-input, react-awesome-slide and many more.
            </Text>
          </Box>
        </Box>
        <br />
        <Box p={4} display={{ md: 'flex' }} boxShadow={'lg'}>
          <Box flexShrink={0}>
            <BsBraces />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
              fontWeight="bold"
              fontSize="md"
              letterSpacing="wide"
              color="teal.600"
            >
              Back-end Development
            </Text>

            <Text mt={2} color="gray.500">
              I also do back-end using Node js express js and MongoDB as a
              batabase. I am comfortable with mongoose ODM. I have a good
              knowledge of Rest API. I use JWT token for security reason for
              safe APIs and bcrypt for hashing password and used multer for file
              uploading.
            </Text>
          </Box>
        </Box>
        <br />
        <Box p={4} display={{ md: 'flex' }} boxShadow={'lg'}>
          <Box flexShrink={0}>
            <AiOutlineBug />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
              fontWeight="bold"
              fontSize="md"
              letterSpacing="wide"
              color="teal.600"
            >
              Bug Fixing
            </Text>

            <Text mt={2} color="gray.500">
              Bug is a common problem for every website. I will fix problems of
              your website very easily and in a very short time. I really enjoy
              fixing any website bugs.
            </Text>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}

export default Offer;
