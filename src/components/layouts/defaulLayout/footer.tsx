import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const contractLogo = [
  { src: "/icons/telegram-icon.svg", alt: "Telegram", href: "" },
  { src: "/icons/x-icon.svg", alt: "X", href: "" },
  { src: "/icons/discord-icon.svg", alt: "Discord", href: "" },
  { src: "/icons/reddit-icon.svg", alt: "Reddit", href: "" },
  { src: "/icons/facebook-icon.svg", alt: "Facebook", href: "" },
  { src: "/icons/instagram-icon.svg", alt: "Instagram", href: "" },
  { src: "/icons/youtube-icon.svg", alt: "Youtube", href: "" },
];
const menuItem = [
  {
    title: "features",
    listItem: [
      { title: "Cashback", href: "" },
      { title: "Bonus", href: "" },
      { title: "VIP Benefit", href: "" },
      { title: "Earn Referral", href: "" },
    ],
  },
  {
    title: "promo",
    listItem: [
      { title: "Hot Promotions", href: "" },
      { title: "Promo Materials", href: "" },
    ],
  },
  {
    title: "help",
    listItem: [
      { title: "Term of Service", href: "" },
      { title: "Blog", href: "" },
      { title: "Documents", href: "" },
    ],
  },
];

const Footer = () => {
  return (
    <Box
      bg="#16191F"
      padding={{
        base: "20px 12px 20px 12px",
        sm: "20px 16px 20px 16px",
        md: "32px 40px 40px 40px",
      }}
      w="full"
    >
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent={{ base: "flex-start", xl: "space-between" }}
      >
        <Flex
          w={{ base: "100%", md: "45%" }}
          marginRight={{ base: "0", md: "5%" }}
          maxW="624px"
          flexDirection="column"
          marginBottom="32px"
        >
          <Image
            priority={true}
            alt="anh"
            src="/images/Footer-Logo.svg"
            width={200}
            height={37}
            style={{
              width: "200px",
              height: "37px",
              marginLeft: "-10px",
            }}
          />
          <Text
            textColor="#E0E0E0"
            marginTop="20px"
            fontWeight="400"
            fontSize="12px"
            lineHeight="16px"
            letterSpacing="-0.24px"
          >
            This website offers gaming with risk experience. To be a user of our
            site you must be over 18 years old. We are not responsible for the
            violation of your local laws related to i-gaming. Play responsibly
            and have fun on SaigonPlay.
          </Text>
          <Flex padding="16px 0 22px 0" alignItems="flex-end">
            <Image
              priority={true}
              alt={"@c"}
              src={"/icons/Vector.svg"}
              width={13.33}
              height={13.33}
              style={{
                width: "13.33px",
                height: "13.33px",
              }}
            />
            <Text textColor="#ADADAD" fontSize="10px" marginLeft="4px">
              2021-2024 SaigonPlay All Rights Reserved
            </Text>
          </Flex>
          <Flex>
            {contractLogo.map((item, index) => {
              return (
                <Link
                  style={{ cursor: "pointer" }}
                  key={index}
                  href={item.href}
                >
                  <Image
                    priority={true}
                    alt={item.alt}
                    src={item.src}
                    width={32}
                    height={32}
                    style={{
                      width: "32px",
                      height: "32px",
                      marginLeft: "4px",
                      marginRight: "4px",
                    }}
                  />
                </Link>
              );
            })}
          </Flex>
        </Flex>
        <Grid
          w={{ base: "100%", xl: "40%" }}
          templateColumns="repeat(3, 1fr)"
          gap="20px"
          display={{ base: "none", sm: "grid" }}
        >
          {menuItem.map((item, index) => {
            return (
              <GridItem fontSize="12px" key={index}>
                <Text
                  textTransform="uppercase"
                  fontWeight="700"
                  letterSpacing="1.2px"
                  lineHeight="12px"
                  marginBottom="6px"
                >
                  {item.title}
                </Text>
                {item.listItem.map((link, index2) => {
                  return (
                    <Flex marginY="6px" key={index2}>
                      <Link href={link.href}>
                        <Text textColor="#E0E0E0" fontWeight="400">
                          {link.title}
                        </Text>
                      </Link>
                    </Flex>
                  );
                })}
              </GridItem>
            );
          })}
        </Grid>
        <Accordion
          display={{ base: "", sm: "none" }}
          defaultIndex={[0]}
          allowMultiple
        >
          {menuItem.map((item, index) => {
            return (
              <AccordionItem key={index} border="0px">
                <AccordionButton
                  textTransform="uppercase"
                  display="flex"
                  justifyContent="space-between"
                  fontWeight="700"
                >
                  {item.title}
                  <AccordionIcon />
                </AccordionButton>

                {item.listItem.map((link, index2) => {
                  return (
                    <AccordionPanel fontSize="12px" key={index2} pb={4}>
                      <Link href={link.href}>
                        <Text textColor="#E0E0E0" fontWeight="400">
                          {link.title}
                        </Text>
                      </Link>
                    </AccordionPanel>
                  );
                })}
              </AccordionItem>
            );
          })}
        </Accordion>
      </Flex>
      <Text
        paddingTop="200px"
        fontWeight="400"
        fontSize="12px"
        lineHeight="16px"
        textAlign="center"
        textColor="#ADADAD"
      >
        SaigonPlay 2024. All Rights Reserved.{" "}
      </Text>
    </Box>
  );
};

export default Footer;
