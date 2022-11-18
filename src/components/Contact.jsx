import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_eeot699',
        'template_prazzki',
        form.current,
        'UdeK0MEZTPeObmgdi'
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            window.location.reload();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box m={'70px'}>
      <Heading as="h4" size="md" mb={'40px'}>
        Contact with me <span bg={'orange.200'}>______</span>
      </Heading>
      <Box
        data-aos="fade-up"
        data-aos-duration="2000"
        p={20}
        bg={useColorModeValue('gray.40', 'gray.700')}
        boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <form ref={form}>
          <FormControl id="name" isRequired>
            <FormLabel mt={4}>Your Name</FormLabel>
            <Input type="text" placeholder="full name" name="user_name" />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel mt={4}>Phone Number</FormLabel>
            <Input type="number" placeholder="phone number" name="user_phone" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel mt={4}>Email address</FormLabel>
            <Input type="email" placeholder="email address" name="user_email" />
          </FormControl>
          <FormControl id="website">
            <FormLabel mt={4}>Email Website</FormLabel>
            <Input type="text" placeholder="website" name="user_website" />
          </FormControl>
          <br />
          <Textarea
            placeholder="Here is a sample placeholder"
            mb={4}
            name="user_message"
          />
        </form>
        <Button w={'100%'} onClick={sendEmail}>
          Send Message
        </Button>
      </Box>
    </Box>
  );
};
export default Contact;
