import { Box, chakra, Container, Icon, IconButton, Link, Stack, Text, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={2} direction={{ base: "column", md: "row" }} spacing={4} justify={{ base: "center", md: "space-between" }} align={{ base: "center", md: "center" }}>
        <Icon />
        <Text>© 2022 PT. DIGILAB INDONESIA. ALL RIGHTS RESERVED</Text>
        <Stack direction={"row"} spacing={2}>
          <Link href='https://www.instagram.com/pt.digilabindonesia/' isExternal>
          <IconButton icon={<FaInstagram />}/>
          </Link>
          <Link href='https://twitter.com/ptdigilabidn' isExternal>
          <IconButton icon={<FaTwitter />}/>
          </Link>
          <Link href='https://www.youtube.com/channel/UC42NdSxbS42SyAJIfTxOUiw/featured' isExternal>
          <IconButton icon={<FaYoutube />}/>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
