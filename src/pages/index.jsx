import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
import SideBar from "./components/SideBar";
import MainContent from "./MainContent";
import { NavigationBar } from "./common/NavigationBar";

const LandingPage = () => {
  const [isLargerThan375] = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {!isLargerThan375 ? (
        <Grid
          templateAreas={`"header"
                      "nav"
                      "main"`}
          gridTemplateRows={"50px 1fr 1fr"}
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem area={"header"}>
            <NavigationBar />
          </GridItem>
          <GridItem area={"nav"}>
            <SideBar />
          </GridItem>
          <GridItem area={"main"} h={"100vh"}>
            <MainContent />
          </GridItem>
          {/* <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem> */}
        </Grid>
      ) : (
        <Grid
          templateAreas={`"nav header"
                      "nav main"`}
          gridTemplateRows={"50px 1fr"}
          gridTemplateColumns={"450px 1fr"}
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem area={"header"}>
            <NavigationBar />
          </GridItem>
          <GridItem area={"nav"} position="fixed" width={"450px"}>
            <SideBar />
          </GridItem>
          <GridItem area={"main"} h={"100vh"}>
            <MainContent />
          </GridItem>
          {/* <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem> */}
        </Grid>
      )}
    </>
  );
};

export default LandingPage;
