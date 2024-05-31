import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Text } from "@chakra-ui/react";
import DefaultLayout from "@/components/layouts/defaulLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <DefaultLayout>kuro</DefaultLayout>;
}
