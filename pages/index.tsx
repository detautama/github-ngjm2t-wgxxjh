import {
  Box,
  Button,
  Circle,
  Container,
  Heading,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Icon } from '@chakra-ui/react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Container mt={5}>
      <TopBar />
      <Box my={10} />
      <Hero />
      <Box my={10} />
      <About />
      <Box my={10} />
      <Heading as="h3" size="lg">
        On the web
      </Heading>
      <Box display="flex" alignItems="center" gap={2} my={3}>
        <Circle size="28px" border={'1px'}>
          <Icon as={AiFillInstagram} />
        </Circle>
        <Link href="https://www.instagram.com/deta_utama/" isExternal>
          deta_utama
        </Link>
      </Box>
      <Box display="flex" alignItems="center" gap={2} my={3}>
        <Circle size="28px" border={'1px'}>
          <Icon as={BsStackOverflow} />
        </Circle>
        <Link
          href="https://stackoverflow.com/users/7207817/deta-utama"
          isExternal
        >
          Deta Utama
        </Link>
      </Box>
      <Box display="flex" alignItems="center" gap={2} my={3}>
        <Circle size="28px" border={'1px'}>
          <Icon as={AiFillLinkedin} />
        </Circle>
        <Link href="https://www.linkedin.com/in/deta-u-8bb1a7107/" isExternal>
          Deta Utama
        </Link>
      </Box>
      <Box my={10} />
      <Box textAlign="center">
        <p>2022 I Putu Deta Utama Putra</p>
      </Box>
      <Box my={10} />
    </Container>
  );
};

const TopBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      display="flex"
      alignItems="center"
      gap="10px"
      justifyContent="space-between"
    >
      <Box display={'flex'} gap={2}>
        <Circle size="25px" backgroundColor="red" />
        <p>Deta Utama</p>
      </Box>
      {colorMode === 'dark' ? (
        <SunIcon
          color="yellow"
          width="25px"
          height="25px"
          onClick={toggleColorMode}
          cursor="pointer"
        />
      ) : (
        <MoonIcon
          color="purple"
          width="25px"
          height="25px"
          onClick={toggleColorMode}
          cursor="pointer"
        />
      )}
    </Box>
  );
};

const Hero = () => {
  return (
    <Box>
      <Image
        mx="auto"
        src="/hero.jpeg"
        alt="Dan Abramov"
        height="300px"
        width="auto"
      />
    </Box>
  );
};

const About = () => {
  return (
    <div>
      <Heading as="h2" size="lg">
        I Putu Deta Utama Putra
      </Heading>
      <Heading as="h3" size="md" fontWeight={'normal'}>
        Web Developer
      </Heading>
      <Box my={5} />
      <Image borderRadius="full" mx="auto" src="/profile.jpeg" height="150px" />
      <Box my={5} />
      <Text
        textAlign="justify"
        style={{
          textIndent: '1em',
        }}
      >
        Deta is a web developer based in Bali who interested with programming
        from 3rd grade of senior high school. Start by creating pacman game
        using Game Maker and blogging about tech. Now he is a Middle Web
        Developer at Oddbit.id
      </Text>
      <Box my={10} />
      <Heading as="h3" size="lg">
        Bio
      </Heading>
      <Box>
        <Box display="flex" gap={2}>
          <Box width="20%">1997</Box>
          <Box width="80%">Born in Denpasar</Box>
        </Box>
        <Box display="flex" gap={2}>
          <Box width="20%">2017</Box>
          <Box width="80%">Worked at Markethub.id.</Box>
        </Box>
        <Box display="flex" gap={2}>
          <Box width="20%">2017</Box>
          <Box width="80%">On The Job Training at Gringgo.id</Box>
        </Box>
        <Box display="flex" gap={2}>
          <Box width="20%">2019</Box>
          <Box width="80%">
            Completed the Bachelor of Computer Science at STIKI INDONESIA.
          </Box>
        </Box>
        <Box display="flex" gap={2}>
          <Box width="20%">
            <b>2018 - present</b>
          </Box>
          <Box width="80%">Work as Middle Web Developer at Oddbit.</Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
