import { Button, Progress, Box, Center, Text, Image, useColorModeValue, useBreakpointValue, Stack, Tooltip } from "@chakra-ui/react";
import ProgressBar from "./progress";

export default function Donation() {
  return (
    <Box mt={20} id="donation">
      <Text color={useColorModeValue("gray.800", "white")} fontWeight={700} lineHeight={1.2} fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })} mb={10} textAlign={"center"}>
        OUR DONATIONS
      </Text>

      <Center py={12}>
        <Box maxW={"320px"} w={"full"} bg={useColorModeValue("white", "gray.900")} boxShadow={"2xl"} rounded={"lg"} p={6} textAlign={"center"} role={"group"} pos={"relative"} zIndex={1}>
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${"https://images.unsplash.com/flagged/photo-1555251255-e9a095d6eb9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image rounded={"lg"} height={230} width={282} objectFit={"cover"} src={"https://images.unsplash.com/flagged/photo-1555251255-e9a095d6eb9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} />
          </Box>
          <Stack mt={12}>
            {/* <Tooltip hasArrow label="Lorem ipsum" placement="auto">
              <ProgressBar>
                <Progress colorScheme="gray" size="md" value={20} />
              </ProgressBar>
            </Tooltip> */}
            <Tooltip hasArrow label="Collected $30.600 / $50.000" placement="auto">
              <ProgressBar>
                <Progress colorScheme="green" size="lg" value={60} hasStripe isAnimated/>
              </ProgressBar>
            </Tooltip>
            {/* <Tooltip hasArrow label="Lorem ipsum" placement="auto">
              <ProgressBar>
                <Progress colorScheme="gray" size="md" value={35} />
              </ProgressBar>
            </Tooltip> */}
          </Stack>
          <Text textAlign={"center"} color={useColorModeValue("gray.700", "gray.400")} px={3} mt={"4"}>
          61 million people in Ethiopia lack access to clean water and education. By purchasing our products it means you provides kids in Ethiopia with an adequate learning environment at school and save their life.
          </Text>
        </Box>
      </Center>
    </Box>
  );
}
