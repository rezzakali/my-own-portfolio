import { Box, Center, Heading } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function GetInTouch() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };
  return (
    <Box mt={'100px'}>
      <Heading as="h4" size="md">
        Get in touch <span bg={'orange.200'}>______</span>
      </Heading>
      <Center
        fontWeight="bold"
        fontSize="2xl"
        letterSpacing="wide"
        color="teal.600"
        mt={'40px'}
      >
        I'd love to hear from you
      </Center>
      <Center mt={2} color="gray.500" fontSize={'xl'}>
        I always keep some time along with my works to broad and give strength
        to my developer community.
      </Center>
      <Center mt={2} color="gray.500" fontSize={'xl'}>
        Feel free to give any feedback, advice, allegation or anything else.
      </Center>
      <br />
      <Center>
        <button
          style={{ border: '1px solid gray', padding: '10px' }}
          onClick={handleClick}
        >
          Say Hello
        </button>
      </Center>
      <br />
    </Box>
  );
}

export default GetInTouch;
