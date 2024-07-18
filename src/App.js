import './App.css';
import LandingPage from './pages';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';


function App() {
  const theme = extendTheme({
    fonts: {
      body: "Inter, sans-serif",
      heading: "Inter, sans-serif",
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <LandingPage />
    </ChakraProvider>
  );
}

export default App;
