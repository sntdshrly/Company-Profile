import { Box, chakra, Container, Icon, IconButton, Link, Stack, Text, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={2} direction={{ base: "column", md: "row" }} spacing={4} justify={{ base: "center", md: "space-between" }} align={{ base: "center", md: "center" }}>
        <Icon />
        <Text>© 2022 PT. DIGILAB INDONESIA. ALL RIGHTS RESERVED</Text>
        <Stack direction={"row"} spacing={2}>
          <IconButton icon={<FaInstagram />}/>
          <IconButton icon={<FaTwitter />}/>
          <IconButton icon={<FaYoutube />}/>
        </Stack>
      </Container>
    </Box>
  );
}
