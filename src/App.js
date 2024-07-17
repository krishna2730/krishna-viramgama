import './App.css';
import LandingPage from './pages';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider, CSSReset } from '@chakra-ui/react';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
      {/* <LandingPage/> */}
    </ChakraProvider>
  );
}

export default App;
