import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box w={"100%"} minH="100vh" id="home" p={0} m={0}>
      <Heading
        ml={"40px"}
        color="white"
        fontWeight="700"
        fontSize="45px"
        pt="80px"
      >
        About Me
      </Heading>
      <Flex
        h={"auto"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box bg="#77291B" w="70%" mt="70px" position="relative">
          <Box
            position="absolute"
            top="-80px"
            left="-30px"
            fontSize="170px"
            color="white"
            fontFamily="sans-serif"
          >
            &ldquo;
          </Box>
          <Text color="white" p="40px" textAlign="justify" fontSize="17px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            error rerum consequuntur, dicta accusantium iure recusandae, minus
            delectus non, numquam vitae et inventore tenetur consequatur?
            Tempora eum, soluta accusantium corrupti eveniet adipisci odit amet
            perferendis sint? Cum suscipit aspernatur hic unde ut? Inventore
            delectus incidunt sint rerum illum facere, suscipit cumque
            exercitationem consequuntur ducimus error nisi rem voluptatibus
            harum, molestiae sapiente doloremque. Temporibus iure neque
            exercitationem! Quidem adipisci quisquam saepe corrupti distinctio
            quae accusantium porro, veniam, reiciendis aspernatur hic, cum
            minima! Nihil quod quibusdam dolorem at eaque ex eligendi vel iusto
            atque veniam aperiam, mollitia dolore consequatur reprehenderit quis
            eos?
          </Text>
          <Box
            position="absolute"
            bottom="-160px"
            right="-30px"
            fontSize="170px"
            color="white"
            fontFamily="sans-serif"
          >
            &rdquo;
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
