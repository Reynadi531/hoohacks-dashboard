import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box w="full" h="8vh">
      <Flex justifyContent="center" alignItems="center" h="full" w="full">
        <Box flex="1">
          <Heading fontWeight="bold" fontSize="4xl" as="h1">
            Kontrol Finance.
          </Heading>
        </Box>
        <Box>
          <Stack spacing="12" direction="row">
            <Link fontWeight="500" href="/">
              Home
            </Link>
            <Link fontWeight="500" href="/dashboard">
              Dashboard
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
