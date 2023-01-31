"use client";
import Footer from "@/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({ breakpoints })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider theme={theme}>
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
