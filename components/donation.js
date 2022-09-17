import { Button, Progress, Box, Center, Text, Image, useColorModeValue, useBreakpointValue, Stack, Tooltip } from "@chakra-ui/react";
import ProgressBar from "./progress";

export default function Donation() {
  return (
    <Box mt={20} id="products">
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
              backgroundImage: `url(${"https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image rounded={"lg"} height={230} width={282} objectFit={"cover"} src={"https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"} />
          </Box>
          <Stack mt={12}>
            <Tooltip hasArrow label="Lorem ipsum" placement="auto">
              <ProgressBar>
                <Progress colorScheme="gray" size="md" value={20} />
              </ProgressBar>
            </Tooltip>
            <Tooltip hasArrow label="Lorem ipsum" placement="auto">
              <ProgressBar>
                <Progress colorScheme="gray" size="md" value={50} hasStripe isAnimated/>
              </ProgressBar>
            </Tooltip>
            <Tooltip hasArrow label="Lorem ipsum" placement="auto">
              <ProgressBar>
                <Progress colorScheme="gray" size="md" value={35} />
              </ProgressBar>
            </Tooltip>
          </Stack>
          <Text textAlign={"center"} color={useColorModeValue("gray.700", "gray.400")} px={3} mt={"4"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta facere adipisci ipsam
          </Text>
        </Box>
      </Center>
    </Box>
  );
}
