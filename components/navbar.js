import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Link, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        // bg={useColorModeValue("white", "gray.800")}
        bg={'transparent'}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={"ghost"} aria-label={"Toggle Navigation"} />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text textAlign={useBreakpointValue({ base: "center", md: "left" })} fontFamily={"heading"} color={useColorModeValue("gray.800", "white")}>
          Logo
          </Text>
          <Flex display={{ base: "none", md: "flex" }} m={"auto"}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
          <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={useColorModeValue("white", "black")}
            bg={useColorModeValue("gray.600","gray.200")}
            href={"#"}
            _hover={{
              bg: "gray.500",
            }}
          >
            DONATION
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4}>
      <Box>
        <Link p={2} href={"#"} fontSize={"sm"} fontWeight={500} color={linkColor} _hover={{ textDecoration: "none", color: linkHoverColor }}>
          HOME
        </Link>
        <Link p={2} href={"#"} fontSize={"sm"} fontWeight={500} color={linkColor} _hover={{ textDecoration: "none", color: linkHoverColor }}>
          PARTNERS
        </Link>
        <Link p={2} href={"#"} fontSize={"sm"} fontWeight={500} color={linkColor} _hover={{ textDecoration: "none", color: linkHoverColor }}>
          PRODUCTS
        </Link>
      </Box>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
      <Flex py={2} as={Link} href={"#"} justify={"space-between"} align={"center"} _hover={{ textDecoration: "none" }}>
        <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
          About
        </Text>
      </Flex>
      <Flex py={2} as={Link} href={"#"} justify={"space-between"} align={"center"} _hover={{ textDecoration: "none" }}>
        <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
          Partners
        </Text>
      </Flex>
      <Flex py={2} as={Link} href={"#"} justify={"space-between"} align={"center"} _hover={{ textDecoration: "none" }}>
        <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
          Portofolio
        </Text>
      </Flex>
    </Stack>
  );
};
