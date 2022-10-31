import {
  Box,
  Button,
  Circle,
  Container,
  Divider,
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
      <Box my={5} />
      <Hero />
      <Box my={10} />
      <About />
      <Box my={10} />
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
        <Image
          borderRadius="full"
          mx="auto"
          src="/profile.jpeg"
          height="25"
          sizes="cover"
        />
        <p>Ayunika Silver</p>
      </Box>
      {/* {colorMode === 'dark' ? (
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
      )} */}
    </Box>
  );
};

const Hero = () => {
  return (
    <Box>
      <Image
        mx="auto"
        src="/hero1.jpeg"
        alt="Dan Abramov"
        objectFit="cover"
        borderRadius="16px"
      />
    </Box>
  );
};

const About = () => {
  return (
    <div>
      <Heading as="h2" size="lg" textAlign="center">
        JEWELRY STORE
      </Heading>
      <Box my={5} />
      <Text textAlign="center">
        We will provide you with the most exquiste service
      </Text>
      <Box my={5} />
      <Divider width="100px" mx="auto" />
    </div>
  );
};

export default Home;
