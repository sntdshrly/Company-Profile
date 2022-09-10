import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(https://images.unsplash.com/photo-1483104879057-379b6c2fe5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      textAlign={"left"}
    >
      <VStack w={"full"} justify={"center"} px={useBreakpointValue({ base: 4, md: 8 })} bgGradient={"linear(to-r, blackAlpha.600, transparent)"}>
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text color={"white"} fontWeight={350} lineHeight={1.2} fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}>
          PT. Digilab is a digital convergence company that creates value by integrating creative design and high class IT solutions. Today with the growth of technology and people's need for easy, fast, and complete services, we develop software and mobile application products for your daily needs.
          </Text>
          <Stack direction={"row"}>
            <Button bg={"whiteAlpha.300"} rounded={"full"} color={"white"} _hover={{ bg: "whiteAlpha.500" }}>
              ABOUT US
            </Button>
            <Button bg={"green"} rounded={"full"} color={"white"} _hover={{ bg: "green.800" }}>
              GET STARTED
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
