import { Box, Grid, GridItem, useMediaQuery, Flex } from "@chakra-ui/react";
import SideBar from "./components/SideBar";
import MainContent from "./MainContent";
import { NavigationBar } from "./common/NavigationBar";

const LandingPage = () => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {!isLargerThan1024 ? (
        <Flex
          direction="column"
          minH="100vh"
          gap={1}
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <Box as="header" position="sticky" top={0} zIndex={1}>
            <NavigationBar />
          </Box>
          <Box as="nav">
            <SideBar />
          </Box>
          <Box as="main" flex="1">
            <MainContent />
          </Box>
        </Flex>
      ) : (
        <Grid
          templateAreas={`
            "nav header"
            "nav main"
          `}
          gridTemplateRows={"70px 1fr"}
          gridTemplateColumns={[
            "450px 1fr",
            "450px 1fr",
            "450px 1fr",
            "400px 1fr",
            "450px 1fr",
            "580px 1fr",
          ]}
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem
            area={"header"}
            position="fixed"
            top={0}
            right={-1}
            w={[
              "calc(100% - 450px)",
              "calc(100% - 450px)",
              "calc(100% - 450px)",
              "calc(100% - 400px)",
              "calc(100% - 450px)",
              "calc(100% - 580px)",
            ]}
            zIndex={1}
          >
            <NavigationBar />
          </GridItem>
          <GridItem
            area={"nav"}
            position="fixed"
            width={["450px", "450px", "450px", "400px", "450px", "580px"]}
          >
            <SideBar />
          </GridItem>
          <GridItem area={"main"} h={"100vh"}>
            <MainContent />
          </GridItem>
        </Grid>
      )}
    </>
  );
};

export default LandingPage;
