import './App.css';
import LandingPage from './pages';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/skills",
      element: <LandingPage />,
    },
    {
      path: "/projects",
      element: <LandingPage />,
    },
    {
      path: "/contact-me",
      element: <LandingPage />,
    },
    {
      path: "/cv",
      element: <LandingPage />,
    },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;
