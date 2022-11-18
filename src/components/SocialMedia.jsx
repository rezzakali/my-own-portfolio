import { Center, HStack } from '@chakra-ui/react';
import React from 'react';
import { FaDev, FaFacebookSquare, FaGithubSquare } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';

function SocialMedia() {
  return (
    <HStack
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      mt={'20px'}
      fontSize={'2xl'}
    >
      <Center>
        <a
          href="https://www.facebook.com/rezzakali22"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>
      </Center>
      <Center>
        <a
          href="https://www.linkedin.com/in/rezzak-ali-18149a1ab/"
          target="_blank"
          rel="noreferrer"
        >
          <ImLinkedin />
        </a>
      </Center>
      <Center>
        <a href="https://github.com/rezzakali" target="_blank" rel="noreferrer">
          <FaGithubSquare />
        </a>
      </Center>
      <Center>
        <a href="https://dev.to/rezzakali" target="_blank" rel="noreferrer">
          <FaDev />
        </a>
      </Center>
    </HStack>
  );
}

export default SocialMedia;
