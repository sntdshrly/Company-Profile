// import Navbar from "../components/navbar";

// function AboutPage() {
//     return (
//         <>
//         <Navbar />
//         </>
//     );
// }

// export default AboutPage;

import { Container, SimpleGrid, Image, Flex, Heading, Text, Stack, StackDivider, Icon, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../components/navbar";

export default function SplitWithImage() {
  return (
    <>
      <Navbar />
      <Container maxW={"5xl"} py={12}>
      <Heading
            lineHeight={1.1}
            fontWeight={600}
            textAlign={'center'}
            mb={'20'}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              textAlign={'center'}>
              ABOUT
            </Text>
            <Text as={'span'} color={useColorModeValue('gray.600', 'gray.300')}>
              US
            </Text>
          </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text textTransform={"uppercase"} color={"blue.400"} fontWeight={600} fontSize={"sm"} bg={useColorModeValue("blue.50", "blue.900")} p={2} alignSelf={"flex-start"} rounded={"md"}>
              Our Story
            </Text>
            <Heading>Lorem ipsum dolor sit amet</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            </Text>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={"https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
}
