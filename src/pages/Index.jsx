import React from "react";
import { Box, Heading, Text, Stack, Image, Grid, GridItem, Button, Icon, Flex, Input } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="pink.50" py={20}>
        <Flex maxW="1200px" mx="auto" direction={{ base: "column", md: "row" }} align="center">
          <Box flex={1} pr={{ md: 10 }}>
            <Heading as="h1" size="2xl" mb={4}>
              Discover Your Natural Beauty
            </Heading>
            <Text fontSize="xl" mb={8}>
              Unleash your inner glow with our premium skincare products and expert beauty tips.
            </Text>
            <Button colorScheme="pink" size="lg">
              Shop Now
            </Button>
          </Box>
          <Box flex={1}>
            <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdpdGglMjBnbG93aW5nJTIwc2tpbnxlbnwwfHx8fDE3MTAzNjQ0OTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beautiful Woman" />
          </Box>
        </Flex>
      </Box>

      {/* Featured Products */}
      <Box py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Featured Products
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8} maxW="1200px" mx="auto">
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHNlcnVtJTIwYm90dGxlfGVufDB8fHx8MTcxMDM2NDQ5NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Serum" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Glow Boost Serum
            </Heading>
            <Text>Revitalize your skin with our powerful serum.</Text>
          </GridItem>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1667242003558-e42942d2b911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYWNlJTIwY3JlYW0lMjBqYXJ8ZW58MHx8fHwxNzEwMzY0NDk1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Moisturizer" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Hydra Nourish Moisturizer
            </Heading>
            <Text>Deeply hydrate and nourish your skin.</Text>
          </GridItem>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1598460880248-71ec6d2d582b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBjbGVhbnNlciUyMHR1YmV8ZW58MHx8fHwxNzEwMzY0NDk1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cleanser" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Gentle Purifying Cleanser
            </Heading>
            <Text>Gently cleanse and purify your skin.</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* Beauty Tips */}
      <Box bg="pink.50" py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Beauty Tips
        </Heading>
        <Stack spacing={8} maxW="800px" mx="auto">
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              1. Cleanse Daily
            </Heading>
            <Text>Cleanse your face twice a day to remove impurities and maintain clear skin.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              2. Moisturize Regularly
            </Heading>
            <Text>Keep your skin hydrated by applying moisturizer every morning and night.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              3. Protect from Sun
            </Heading>
            <Text>Always apply sunscreen to protect your skin from harmful UV rays.</Text>
          </Box>
        </Stack>
      </Box>

      {/* Newsletter */}
      <Box py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Subscribe to Our Newsletter
        </Heading>
        <Flex maxW="600px" mx="auto">
          <Input placeholder="Enter your email" mr={4} />
          <Button colorScheme="pink">Subscribe</Button>
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.100" py={10}>
        <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
          <Text>&copy; 2023 Skincare & Beauty. All rights reserved.</Text>
          <Stack direction="row" spacing={4}>
            <Icon as={FaInstagram} boxSize={6} />
            <Icon as={FaFacebook} boxSize={6} />
            <Icon as={FaTwitter} boxSize={6} />
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
