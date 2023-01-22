import { useEffect, useState } from "react";
import axios from "axios";
import heart from "../img/heart.png";

import { Box, Grid, Image, Heading, Button } from "@chakra-ui/react";

const getData = (params = {}) => {
  return axios.get(
    `http://localhost:3001/products?category=kid_girl&category=kid_boy`
  );
};

function Kids() {
  const [data, setData] = useState({});
  useEffect(() => {
    getData()
      .then((res) => {
        console.log(res.data);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      
      <Grid templateColumns="repeat(3, 1fr)" gap="1px">
        {data?.data?.map((el) => (
          <Box padding="70px">
            <Image boxSize="300px" src={el.avatar} alt={el.title} />
            <hr
              style={{
                background: "black",
                color: "white",
                border: "1px dashed",
              }}
            />
            <Heading float="left" as="h4" size="md">
              ${el.price}
            </Heading>
            <br />
            <Heading as="h5" size="sm">
              {el.title}
            </Heading>
            <Heading as="h5" size="sm">
              {el.rating}
            </Heading>
            <Button float="right" backgroundColor={"white"}>
              <Image src={heart} w="30px" h="30px" alt="fav" />
            </Button>
          </Box>
        ))}
      </Grid>
    </>
  );
}
export default Kids;
