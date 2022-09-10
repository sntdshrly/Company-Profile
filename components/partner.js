import { Flex, SimpleGrid, Stat, StatLabel, StatNumber, Text, useColorModeValue, useBreakpointValue, Box, Image } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
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
    <Box my={10}>
      <Text color={useColorModeValue("gray.800", "white")} fontWeight={700} lineHeight={1.2} fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })} mb={20} textAlign={"center"}>
        Lorem ipsum dolor
      </Text>
      <Box bgColor={useColorModeValue('gray.100', 'gray.600')} py={10} px={40}>
        <Flickity options={flickityOptions}>
          <Image h={'100'} src={"https://wit.id/wp-content/uploads/2021/04/eiger.png"} opacity={"0.5"} _hover={{ opacity: "1" }} transition={'opacity 0.3s ease'}/>
          <Image h={'100'} src={"https://wit.id/wp-content/uploads/2021/04/erajaya.png"} opacity={"0.5"} _hover={{ opacity: "1" }} transition={'opacity 0.3s ease'}/>
          <Image h={'100'} src={"https://wit.id/wp-content/uploads/2021/04/loreal.png"} opacity={"0.5"} _hover={{ opacity: "1" }} transition={'opacity 0.3s ease'}/>
          <Image h={'100'} src={"https://wit.id/wp-content/uploads/2021/04/sch.png"} opacity={"0.5"} _hover={{ opacity: "1" }} transition={'opacity 0.3s ease'}/>
        </Flickity>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} my={20} mx={{ base: 80, lg: 40, md: 20, sm:40 }}>
        <StatsCard title={"Users"} stat={"5,000"} icon={<BsPerson size={"3em"} />} />
        <StatsCard title={"Servers"} stat={"1,000"} icon={<FiServer size={"3em"} />} />
        <StatsCard title={"Datacenters"} stat={"7"} icon={<GoLocation size={"3em"} />} />
      </SimpleGrid>
      <Text color={useColorModeValue("gray.800", "white")} textAlign={"center"} mx={{ base: 80, lg: 40, md: 20, sm:40 }}>
      We had an incredible experience working with Chakra Templates and were
        impressed they made such a big difference in only three weeks. Our team
        is so grateful for the wonderful improvements they made and their
        ability to get familiar with the product concept so quickly.
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
