import { Flex, SimpleGrid, Stat, StatLabel, StatNumber, Text, useColorModeValue, useBreakpointValue, Box, Image } from "@chakra-ui/react";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Flickity from "react-flickity-component";

import "flickity/css/flickity.css";
const flickityOptions = {
  prevNextButtons: false,
  pageDots: false,
  freeScroll: true,
  freeScrollFriction: 0.05,
  wrapAround: true,
  autoPlay: 1000,
  imagesLoaded: true,
};

export default function Partner() {
  return (
    <Box my={10} id="partners">
      <Text color={useColorModeValue("gray.800", "white")} fontWeight={700} lineHeight={1.2} fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })} mb={20} textAlign={"center"}>
        OUR PARTNERS
      </Text>
      <Box bgColor={useColorModeValue('gray.100', 'gray.600')} py={10} px={80}>
        <Flickity options={flickityOptions}>
          <Image h={'100'} src={"https://i.ibb.co/kStzbXk/52-522223-play-burger-king-png-logo-round-brand-logo-removebg-preview.png"} opacity={"0.5"} _hover={{ opacity: "1" }} transition={'opacity 0.3s ease'}/>
          <Image h={'100'} src={"https://i.ibb.co/RvCfNLX/156-1569339-duck-tape-logo-duck-brand-logo-removebg-preview.png"} opacity={"0.5"} _hover={{ opacity: "1" }} transition={'opacity 0.3s ease'}/>
          <Image h={'100'} src={"https://i.ibb.co/sWxS19t/277-2779569-adidas-en-oaxaca-de-jurez-oaxaca-adidas-design-removebg-preview.png"} opacity={"0.5"} _hover={{ opacity: "1" }} transition={'opacity 0.3s ease'}/>
          <Image h={'100'} src={"https://i.ibb.co/bBBSSQ0/984-9841299-atticus-bird-blink182-poppunk-logo-freetoedit-clothing-brand-removebg-preview.png"} opacity={"0.5"} _hover={{ opacity: "1" }} transition={'opacity 0.3s ease'}/>
          <Image h={'100'} src={"https://www.nicepng.com/png/full/28-283120_logos-of-different-brands.png"} opacity={"0.5"} _hover={{ opacity: "1" }} transition={'opacity 0.3s ease'}/>
          <Image h={'100'} src={"https://i.ibb.co/x5Cp7qd/209-2097329-png-transparent-library-marks-india-as-its-key-removebg-preview.png"} opacity={"0.5"} _hover={{ opacity: "1" }} transition={'opacity 0.3s ease'}/>
        </Flickity>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} my={20} mx={{ base: 80, lg: 40, md: 20, sm:40 }}>
        <StatsCard title={"USERS"} stat={"5,000"} icon={<HiOutlineUser size={"3em"} />} />
        <StatsCard title={"ORGANISATIONS"} stat={"1,000"} icon={<HiOutlineUserGroup size={"3em"} />} />
        <StatsCard title={"COUNTRIES"} stat={"7"} icon={<HiOutlineLocationMarker size={"3em"} />} />
      </SimpleGrid>
      <Text color={useColorModeValue("gray.800", "white")} textAlign={"center"} mx={{ base: 80, lg: 40, md: 20, sm:40 }}>
      Only by working together with partners can we ride the digital wave.
      Our partners include governments, civil society organisations, faith communities, faith-based organisations, businesses, academia, and more.
      </Text>
    </Box>
  );
}

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat maxW={80} px={{ base: 2, md: 4 }} py={"5"} shadow={"xl"} border={"1px solid"} borderColor={useColorModeValue("gray.800", "gray.500")} rounded={"lg"}>
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={"auto"} color={useColorModeValue("gray.800", "gray.200")} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}
