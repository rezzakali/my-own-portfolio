import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import Aos from 'aos';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TypicalCompnent from '../utils/TypicalCompnent';
import GetInTouch from './GetInTouch';
import Offer from './Offer';
import Projects from './Projects';

export default function HeroSection() {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate('/contact');
  };
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <Box data-aos="fade-up" data-aos-duration="3000">
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <TypicalCompnent />

        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'100%'}
        >
          Welcome to my personal
          <Text as={'span'} color={'orange.400'}>
            <br />
            portfolio website
          </Text>
        </Heading>
        <Text
          color={'gray.500'}
          maxW={'3xl'}
          fontSize="xl"
          style={{ textIndent: '1cm' }}
        >
          Hi!, My name is Rezzak Ali, I'm a front-end web developer , currently
          learning backend and it's my goal to become a fully responsive Full
          Stack Web Developer. I build things for the web and convert the design
          to code in pixel perfection. I know much knowledge in pure CSS with
          flex and grid and framework bootstrap. I always love to know new
          technology.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}
            onClick={handleChange}
          >
            Hire me
          </Button>
          <Button rounded={'full'} px={6}>
            Resume
          </Button>
        </Stack>
      </Stack>
      <Box>
        <Offer />
        <Projects />
        <GetInTouch />
      </Box>
    </Box>
  );
}
