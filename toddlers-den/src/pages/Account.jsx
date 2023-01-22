import {
  Heading,
  Box,
  Input,
  Text,
  Checkbox,
  InputGroup,
  InputRightAddon,
  Image,
  Button,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";



export default function CreateAccount() {

    return (
      <Box w="1200px" h="600px" margin="auto">
        <Heading textAlign={"left"} margin="20px">
          Create a new account.
        </Heading>
        <Text textAlign={"left"} margin="20px">
          Sign up today and enroll in My Rewarding Moments™ to start earning
          points!
        </Text>
        <Box display="flex" justifyContent={"space-between"}>
          <Box>
            <Input
              w="400px"
              placeholder="Email"
              margin="20px"
              boxShadow=" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            />
            <Text fontSize={"10px"} textAlign="left" marginLeft="20px">
              If you enrolled in My Rewarding Moments™ in one of
              <br /> our stores, be sure to use the same email address.
            </Text>
          </Box>
          <Box>
            <InputGroup
              w="400px"
              margin="20px"
              boxShadow=" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
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
            <Text fontSize={"10px"} textAlign="left" marginLeft="20px">
              8-20 characters long
              <br /> Includes one letter <br />
              Includes one number
            </Text>
          </Box>
        </Box>
        <Box w="1200px" display={"grid"} float="right">
          <InputGroup
            w="400px"
            margin="20px"
            float="right"
            boxShadow=" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
          >
            <Input type="tel" placeholder="Confirm Password" />
            <InputRightAddon
              children={
                <Button>
                  <ViewIcon />
                </Button>
              }
            />
          </InputGroup>
          <Text
            fontSize={"10px"}
            textAlign="left"
            marginLeft="20px"
            float="right"
          >
            Remember, your password is 8-20 characters, <br />
            includes one letter and one number.
          </Text>
        </Box>
        <Button
          w="400px"
          margin={"50px"}
          backgroundColor={"#64B5F6"}
          color="white"
        >
          Next
        </Button>
        <Box>
          <Text>Already have an accont?</Text>
          <Button backgroundColor={"white"} w="200px" border="1px solid black">
            Sign in
          </Button>
        </Box>
      </Box>
    );
}
