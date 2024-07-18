import './App.css';
import LandingPage from './pages';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';


function App() {
  const theme = extendTheme({
    fonts: {
      body: "Inter, sans-serif", // Replace with your desired font family
      heading: "Inter, sans-serif", // Replace with your desired font family for headings
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <LandingPage />
    </ChakraProvider>
  );
}

export default App;
