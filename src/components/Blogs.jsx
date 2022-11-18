import {
  Avatar,
  Box,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import gitImage from '../assets/git.png';
import previewImage from '../assets/preview.jpg';

export default function blogPostWithImage() {
  return (
    <Box>
      <Heading as="h4" size="md" m={'40px'}>
        My Blogs <span bg={'orange.200'}>______</span>
      </Heading>
      <Stack direction={['column', 'row']} spacing={4}>
        <Box
          maxW={'445px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          m={'auto'}
          overflow={'hidden'}
        >
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}
          >
            <Image src={previewImage} alt="pImage" layout={'fill'} />
          </Box>
          <Stack>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              Blog
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              How to preview your uploaded profile picture in front-end when you
              uploaded
            </Heading>
            <Text color={'gray.500'}>
              In this article I will show you how to preview your picture in
              react/JavaScript when you uploaded.......... 1. Create a new
              project using react (npx create-react-app your-app-name). 2.
              create a form component with file input element tag as follows
            </Text>
          </Stack>
          <Link
            colorscheme="teal"
            variant="outline"
            href="https://dev.to/rezzakali/how-to-preview-your-uploaded-profile-picture-in-front-end-when-you-uploaded-538o"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </Link>
        </Box>
        <Box
          m={'auto'}
          maxW={'445px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
        >
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}
          >
            <Image src={gitImage} alt="gImage" layout={'fill'} />
          </Box>
          <Stack>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              Blog
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Basic Git Command
            </Heading>
            <Text color={'gray.500'}>
              This essential Git commands you must know if you are a beginner in
              web dev…. Let’s start. 1. git config [options] 👉 Sets the
              username and email address for commits. git config –global
              user.name “jag” git config –global user.email youremail@gmail.com
              2. git init 👉 Initialize repository as git repository git init
            </Text>
          </Stack>
          <Link
            colorscheme="teal"
            variant="outline"
            href="https://dev.to/rezzakali/basic-git-command-2hi"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </Link>
        </Box>
        <Box
          m={'auto'}
          maxW={'445px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
        >
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}
          ></Box>
          <Stack>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              Blog
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Boost your conversion rate
            </Heading>
            <Text color={'gray.500'}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Avatar
              // src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
              alt={'Author'}
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>Achim Rolle</Text>
              <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
