import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Menu from "./menu";

type TProps = {
  children: React.ReactNode;
};

const DefaultLayout: FC<TProps> = ({ children }) => {
  return (
    <Flex w="100vw" h="100vh" position="relative" bg="gray.300">
      <Sidebar />
      <Flex
        ml={{ base: 0, md: "64px", xl: 0 }}
        direction="column"
        w="full"
        position="relative"
        transition="all 0.3s ease"
      >
        <Flex height="64px" w="full" bg="red.300" />
        {children}
        <Flex flex={1} />
        <Footer />
        <Menu />
      </Flex>
    </Flex>
  );
};

export default DefaultLayout;
