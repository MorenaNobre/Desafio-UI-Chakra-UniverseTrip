import { ChakraProvider } from "@chakra-ui/react"
import {AppProps} from "next/app"
import { theme } from "../styles/theme"

// Import Swiper styles
import 'swiper/core';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// import "../styles/slider.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
