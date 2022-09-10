import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack w={"full"} justify={"center"} px={useBreakpointValue({ base: 4, md: 8 })} bgGradient={"linear(to-r, blackAlpha.600, transparent)"}>
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text color={"white"} fontWeight={400} lineHeight={1.2} fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
          PT. Digilab is a digital convergence company that creates value by integrating creative design and high class IT solutions. Today with the growth of technology and people's need for easy, fast, and complete services, we develop software and mobile application products for your daily needs.
          </Text>
          <Stack direction={"row"}>
            <Button bg={"gray.600"} rounded={"full"} color={"white"} _hover={{ bg: "blue.800" }}>
              ABOUT US
            </Button>
            <Button bg={"whiteAlpha.300"} rounded={"full"} color={"white"} _hover={{ bg: "whiteAlpha.500" }}>
              GET STARTED
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
