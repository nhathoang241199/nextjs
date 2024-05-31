import { Flex } from "@chakra-ui/react";
const Menu = () => {
  return (
    <Flex
      h="64px"
      bg="green.300"
      bottom={0}
      left={0}
      position="absolute"
      w="100vw"
      display={{ base: "flex", md: "none" }}
    ></Flex>
  );
};

export default Menu;
