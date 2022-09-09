import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import '../styles/globals.css';

const customTheme = extendTheme();

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
