import { Box, SimpleGrid, Heading, Button, Image, IconButton, Text, Stack, Flex, useBreakpointValue, useColorModeValue, createIcon } from "@chakra-ui/react";
import { ChatIcon, CheckIcon, EmailIcon } from "@chakra-ui/icons";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex w={20} h={20} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("gray.300", "gray.600")} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={useColorModeValue('gray.600', 'gray.500')}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  return (
    <Box p={4} my={10} mx={20}>
      <Text color={useColorModeValue("gray.800", "white")} fontWeight={700} lineHeight={1.2} fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })} mb={20} textAlign={"center"}>
        Lorem ipsum dolor
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<ChatIcon w={10} h={10} color={useColorModeValue("gray.600", "gray.300")} />}
          title={"Lifetime Support"}
          text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."}
        />
        <Feature
          icon={<CheckIcon w={10} h={10} color={useColorModeValue("gray.600", "gray.300")} />}
          title={"Unlimited Donations"}
          text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."}
        />
        <Feature
          icon={<EmailIcon w={10} h={10} color={useColorModeValue("gray.600", "gray.300")} />}
          title={"Instant Delivery"}
          text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."}
        />
      </SimpleGrid>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 2, md: 5 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}>
              Write once,
            </Text>
            <br />
            <Text as={'span'} color={useColorModeValue('gray.600', 'gray.300')}>
              use everywhere!
            </Text>
          </Heading>
          <Text color={useColorModeValue('gray.600', 'gray.500')}>
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              leftIcon={<PlayIcon h={4} w={4} color={useColorModeValue('gray.600', 'gray.300')} />}>
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"} my={20}>
        <Box borderRadius={"lg"} overflow={"hidden"} boxShadow={"lg"}>
          <IconButton
            aria-label={"Play Button"}
            variant={"ghost"}
            _hover={{ bg: "transparent" }}
            icon={<PlayIcon w={12} h={12} />}
            size={"lg"}
            color={"white"}
            position={"absolute"}
            left={"50%"}
            top={"50%"}
            transform={"translateX(-50%) translateY(-50%)"}
          />
          <Image
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={"100%"}
            src={"https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
          />
        </Box>
      </Flex>
      </Stack>
    </Box>
  );
}

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});
