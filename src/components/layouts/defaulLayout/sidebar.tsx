import { Flex, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { GoChevronLeft } from "react-icons/go";

const Sidebar = () => {
  const [isOpenSidebar, setIsOpenSideBar] = useState(false);

  return (
    <Flex
      position={{ base: "absolute", xl: "relative" }}
      minW={{
        base: isOpenSidebar ? "100vw" : "0",
        md: isOpenSidebar ? 246 : "64px",
      }}
      h={800}
      bg="pink"
      transition="all 0.3s ease"
      zIndex={10}
    >
      <Icon
        display={{ base: "flex", md: "none" }}
        onClick={() => setIsOpenSideBar(false)}
        w={8}
        h={8}
        position="absolute"
        top={4}
        right={4}
        as={IoClose}
      />
      <Icon
        display={{ base: "none", md: "flex" }}
        onClick={() => setIsOpenSideBar((pre) => !pre)}
        w={8}
        h={8}
        position="absolute"
        top={4}
        right={-8}
        as={GoChevronLeft}
        zIndex={10}
        cursor="pointer"
        transform={isOpenSidebar ? "rotate(0deg)" : "rotate(180deg)"}
        transition="all 0.3s ease"
      />
    </Flex>
  );
};

export default Sidebar;
