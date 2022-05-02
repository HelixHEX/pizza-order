import {
  Heading,
  Flex,
  Input,
  Text,
  Checkbox,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const App = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [order, setOrder] = useState({
    Pepperoni: false,
    Sausage: false,
    Peppers: false,
    Onions: false,
  });

  const handleChange = (name, value) => {
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = () => {
    if (name === "") {
      toast({
        title: "Please enter your name",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else if (Object.values(order).includes(true)) {
      toast({
        title: "Your order has been placed",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Please select at least one item",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Flex justifyContent={"center"} w="100%" h="100vh" bg="gray.200">
        <Flex
          flexDir={"column"}
          p={10}
          rounded={10}
          bg="white"
          alignSelf={"center"}
          w={[350, 400, 550, 600, 800]}
          minH={380}
          h="auto"
        >
          <Heading>Pizza Order</Heading>
          <Flex
            flexDir={["column", "row", "row", "row"]}
            justifyContent={"space-between"}
            w={"100%"}
          >
            <Flex mt={5} flexDir="column" w={["100%", 200, 200, 300]}>
              <Input
                mt={5}
                placeholder="Name"
                variant="flushed"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {Object.keys(order).map((item, index) => (
                <Checkbox
                  onChange={() => handleChange(item, !order[item])}
                  w={110}
                  mt={2}
                  colorScheme={"green"}
                  key={index}
                  defaultChecked={order[item]}
                >
                  {item}
                </Checkbox>
              ))}
              <Button
                onClick={handleSubmit}
                _hover={{ color: "gray.800", bg: "gray.200" }}
                color="white"
                mt={5}
                w={"100%"}
                bg="red.400"
              >
                Submit
              </Button>
            </Flex>
            <Flex
              ml={[0, 2, 0, 0]}
              mt={[10, 0, 0, 0]}
              fontSize={[20, 25, 25, 25]}
              flexDir={"column"}
              w={["100%", 200, 200, 300]}
            >
              <Text fontSize={30}>Order: </Text>
              <Text mt={2} mb={5} fontWeight={"900"}>
                {name}
              </Text>
              {Object.keys(order).map(
                (item, index) =>
                  // <Text display={order[item] ? 'flex' : 'none'} key={index}>{item}</Text>
                  order[item] && <Text key={index}>{item}</Text>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default App;
