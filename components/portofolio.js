import { Box, Center, useColorModeValue, Heading, Text, Stack, Image, useBreakpointValue } from "@chakra-ui/react";

const IMAGE = "https://goodmockups.com/wp-content/uploads/2020/05/Free-Product-Software-Box-Packaging-Mockup-1.jpg";

export default function Portofolio() {
  return (
    <Box mt={20} id="products">
      <Text color={useColorModeValue("gray.800", "white")} fontWeight={700} lineHeight={1.2} fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })} mb={10} textAlign={"center"}>
        OUR PRODUCTS
      </Text>

      <Center py={12}>
        <Box role={"group"} p={6} maxW={"330px"} w={"full"} bg={useColorModeValue("white", "gray.800")} boxShadow={"2xl"} rounded={"lg"} pos={"relative"} zIndex={1}>
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
              backgroundImage: `url(${IMAGE})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image rounded={"lg"} height={230} width={282} objectFit={"cover"} src={IMAGE} />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text color={"gray.500"} fontSize={"sm"}>
              Professional Plus 2022
            </Text>
            <Heading fontSize={"2l"} fontFamily={"body"} fontWeight={500}>
              Digilab Enterprise Resource Planning
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"} color={"red"}>
                Rp. 1.200.000
              </Text>
              <Text textDecoration={"line-through"} color={"gray.600"}>
                Rp. 2.000.000
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </Box>
  );
}
