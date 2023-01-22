import {Box,List,
  ListItem,
  ListIcon,
  OrderedList,
  InputGroup,
  InputRightAddon ,
  Input,
  Image,
  UnorderedList, Heading} from "@chakra-ui/react";

import { ArrowRightIcon, Search2Icon } from "@chakra-ui/icons";

export default function Footer(){
    return (
      <Box marginTop="50px">
        <Box
          backgroundColor="#f9f9f9"
          display="flex"
          justifyContent="space-between"
        >
          <Support />
          <About />
          <InputIcons />
        </Box>
        <SocialIcons />
        <Paragraph />
      </Box>
    );
}


function Support(){
   return (
     <Box textAlign="left" padding="30px">
       <Heading size="sm">SUPPORT</Heading>
       <UnorderedList textDecoration={"none"}>
         <ListItem>Customer Service</ListItem>
         <ListItem>Accessibility Support</ListItem>
         <ListItem>Shipping</ListItem>
         <ListItem>Returns</ListItem>
         <ListItem>Gift Cards</ListItem>
         <ListItem>Today's Deals</ListItem>
         <ListItem>Size Chart</ListItem>
         <ListItem>My Account</ListItem>
         <ListItem>Carter's® Credit Card</ListItem>
         <ListItem>My Rewarding Moments®</ListItem>
         <ListItem>Contact Us</ListItem>
       </UnorderedList>
     </Box>
   );
}
function About() {
  return (
    <Box textAlign="left" padding="30px">
      <Heading size="sm">ABOUT</Heading>
      <UnorderedList textDecoration="none">
        <ListItem>Carter's Inc.</ListItem>
        <ListItem>Life With Kids</ListItem>
        <ListItem>Baby of the Month Contest</ListItem>
        <ListItem>All Store Locations</ListItem>
        <ListItem>Join Carter's Affliate Program</ListItem>
        <ListItem>Investor Relations</ListItem>
        <ListItem>Careers</ListItem>
        <ListItem>Raise the Future</ListItem>
      </UnorderedList>
    </Box>
  );
}

function InputIcons(){
    return (
      <Box padding="30px">
        <InputGroup w="400px" margin="10px" size="sm" h="40px">
          <Input placeholder="Saving delivered right to your inbox" />
          <InputRightAddon children={<ArrowRightIcon />} />
        </InputGroup>
        <InputGroup size="sm" w="400px" margin="10px"  h="40px">
          <Input placeholder="Enter zip code to find a store" />
          <InputRightAddon children={<Search2Icon />} />
        </InputGroup>
      </Box>
    );
}

function SocialIcons(){
    return (
      <Box backgroundColor="#f9f9f9" display="flex" justifyContent="right" padding="40px">
        <Image
          boxSize="40px"
          src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
        />
        <Image
          boxSize="40px"
          src="https://cdn-icons-png.flaticon.com/128/179/179335.png"
        />
        <Image
          boxSize="40px"
          src="https://cdn-icons-png.flaticon.com/128/145/145812.png"
        />
        <Image
          boxSize="40px"
          src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png"
        />
        <Image
          boxSize="40px"
          src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
        />
      </Box>
    );
}


function Paragraph(){
    return (
      <Box textAlign={"left"} padding="20px" fontSize="10px">
        *EXCLUSIONS AND DISCLAIMERS.
        <br />
        <br /> UP TO 50% OFF: Savings based on MSRP. Excludes Select New
        Arrivals, LITTLE PLANET®, Sneak Peek, Treasure Box, Licensed Styles,
        SKIP HOP®, Doorbusters, and Clearance. Other exclusions may apply.
        <br />
        <br /> UP TO 70% OFF CLEARANCE: Savings based on MSRP.
        <br />
        <br /> *MSRP is our Manufacturer’s Suggested Retail Price at which we
        suggest our collections be initially offered. We list an MSRP on our
        products that we sell ourselves and that sell through our wholesale
        partners. Our wholesale partners are free to use our MSRP or set a
        different selling price. We generally introduce our new collections at
        MSRP on our website. Since MSRP is a suggested price, actual sales may
        or may not have been made at MSRP in any certain area or in all areas.
        Prices may vary by channel or location.
        <br />
        <br /> Many of our collections have a DOB (Date of Birth) on the price
        tag or on their website product page. This is the date that this item or
        a similar item was originally offered for sale at the MSRP.
      </Box>
    );
}