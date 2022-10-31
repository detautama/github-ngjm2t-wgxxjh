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
      <Link href="https://wa.me/085792986593" isExternal>
        <Box
          mx="auto"
          textAlign="center"
          width="70%"
          border="1px solid black"
          borderRadius="16px"
          py="15px"
        >
          <Text fontSize="md">WhatsApp</Text>
        </Box>
      </Link>
      <Box my={5} />
      <Link href="https://www.tokopedia.com/ayunikasilver" isExternal>
        <Box
          mx="auto"
          textAlign="center"
          width="70%"
          border="1px solid black"
          borderRadius="16px"
          py="15px"
        >
          <Text fontSize="md">Tokopedia</Text>
        </Box>
        <Box my={5} />
      </Link>
      <Link href="https://www.instagram.com/ayunikasilver/" isExternal>
        <Box
          mx="auto"
          textAlign="center"
          width="70%"
          border="1px solid black"
          borderRadius="16px"
          py="15px"
        >
          <Text fontSize="md">Instagram</Text>
        </Box>
      </Link>
      <Box my={5} />
      {/* <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="10px"
      >
        <Circle size="28px" border={'1px'}>
          <Icon as={AiFillInstagram} />
        </Circle>

        <Link
          href="https://stackoverflow.com/users/7207817/deta-utama"
          isExternal
        >
          <Circle size="28px" border={'1px'}>
            <Icon as={BsStackOverflow} />
          </Circle>
        </Link>

        <Link href="https://www.linkedin.com/in/deta-u-8bb1a7107/" isExternal>
          <Circle size="28px" border={'1px'}>
            <Icon as={AiFillLinkedin} />
          </Circle>
        </Link>
      </Box> */}
      <Box my={10} />
      <Box textAlign="center">
        <p>2022 Ayunika Silver</p>
      </Box>
      <Box my={10} />
    </Container>
  );
};

const TopBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Image
      borderRadius="full"
      mx="auto"
      src="/logo.png"
      height="60px"
      sizes="cover"
    />
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
      <Heading
        as="h2"
        size="lg"
        textAlign="center"
        fontFamily="'Gilda Display', serif"
      >
        Gold and Silver Collection
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
