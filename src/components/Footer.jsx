import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import SocialMedia from './SocialMedia';

function Footer() {
  return (
    <Box py={6} bottom={0}>
      <Flex
        align={'center'}
        _before={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.700'),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.700'),
          flexGrow: 1,
          ml: 8,
        }}
      >
        <SocialMedia />
      </Flex>
      <Text pt={6} fontSize={'sm'} textAlign={'center'}>
        All rights reserved © 2022 Developer Rezzak Ali.
      </Text>
    </Box>
  );
}

export default Footer;
