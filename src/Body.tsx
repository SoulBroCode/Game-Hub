import { Box, GridItem, HStack, Show } from "@chakra-ui/react";
import React from "react";
import GenreList from "./components/GenreList";
import GameHeading from "./components/GameHeading";
import PlatfromSelector from "./components/PlatfromSelector";
import SortSelector from "./components/SortSelector";
import GameGrid from "./components/GameGrid";

const Body = () => {
  return (
    <>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlatfromSelector></PlatfromSelector>
            <SortSelector></SortSelector>
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </>
  );
};

export default Body;
