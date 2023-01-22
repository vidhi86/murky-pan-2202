import { Button } from "@chakra-ui/button";
import {
  Heading,
  Box,
  Input,
  Text,
  Checkbox,
  
  InputGroup,
  InputRightAddon,
  Image,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";


export default function SignIn(){


    return (
      <Box>
        <Heading
          as="h3"
          size="lg"
          textAlign={"left"}
          marginLeft="100px"
          marginTop={"20px"}
        >
          Hi, welcome back!
        </Heading>
        <Box display="flex" textAlign={"center"} w="100%">
          <Input
            w="400px"
            placeholder="Email"
            margin="20px"
            marginLeft="300px"
            boxShadow={" rgba(0, 0, 0, 0.1) 0px 4px 12px"}
          />
          <InputGroup
            w="400px"
            margin="20px"
            boxShadow={" rgba(0, 0, 0, 0.1) 0px 4px 12px"}
          >
            <Input type="tel" placeholder="Password" />
            <InputRightAddon
              children={
                <Button>
                  <ViewIcon />
                </Button>
              }
            />
          </InputGroup>
        </Box>
        <Box
          display="flex"
          justifyContent={"space-between"}
          marginLeft="300px"
          marginRight="400px"
        >
          <Checkbox defaultChecked>Keep me signed in</Checkbox>
          <Text color={"#64B5F6"}>Forget password?</Text>
        </Box>

        <Button
          w="400px"
          margin={"50px"}
          backgroundColor={"#64B5F6"}
          color="white"
        >
          <Image
            color={"white"}
            w="30px"
            src="https://cdn-icons-png.flaticon.com/128/2499/2499189.png"
          />
          Sign in
        </Button>
        <Text fontStyle={"italic"} margin="20px">
          New to our site or enrolled in My Rewarding Moments™ in store?
        </Text>
        <Button backgroundColor={"white"} w="200px" border="1px solid black">
          Create Account
        </Button>
      </Box>
    );
}