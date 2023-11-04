import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>Sorry, an unexpected error has occurred.</Text>
        <Text>
          {isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;