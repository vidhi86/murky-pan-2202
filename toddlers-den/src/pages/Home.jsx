import img1 from "../img/babyGirl.png";
import img2 from "../img/babyBoy.png";
import img3 from "../img/toddlerGirl.png";
import img4 from "../img/toddlerBoy.png";
import img5 from "../img/girl.png";
import img6 from "../img/boy.png";
import dis1 from "../img/discount1.png"
import dis2 from "../img/discount2.png";
import dis3 from "../img/discount3.png";
import dis4 from "../img/discount4.png";
import dis5 from "../img/discount5.png";
import dis6 from "../img/discount6.png";
import ban1 from "../img/banner1.jpeg";
import ban2 from "../img/banner2.jpeg";
import ban3 from "../img/banner3.jpeg";
import ban4 from "../img/banner4.jpeg";
import Responsive from "../components/corousal";
import { Button, Grid,Box,Image,Heading ,Text} from "@chakra-ui/react";
import styles from "./Home.module.css";
import AutoPlay from "../components/pictureCorousel"


function Home() {



  return (
    <div>
      
      {/* poster1  */}
      <div className={styles.poster1}>
        <div className={styles.text}>
          <p style={{ fontSize: " 20px", fontWeight: "bolder", padding: 0 }}>
            UPTO
          </p>
          <p style={{ fontSize: " 100px", fontWeight: "bolder", padding: 0 }}>
            50%
          </p>
          <p style={{ fontSize: " 50px", fontWeight: "bolder" }}>
            SPRING PREVIEW SALE
          </p>
          <p style={{ fontSize: "20px", color: "grey" }}>
            Save on wear-now styles
            <br />
            +100s of new arrivals
          </p>
        </div>
      </div>

      {/* buttons */}
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(6, 1fr)"]}
        gap={6}
        margin="auto"
        direction="row"
        align="center"
        backgroundColor="#E1F5FE"
        h={["200px", "150px", "100px"]}
        display="grid"
        padding={6}
      >
        <Button colorScheme="black" size="md" variant="outline" width="150px">
          Baby Girl
        </Button>
        <Button colorScheme="black" size="md" variant="outline" width="150px">
          Baby Boy
        </Button>
        <Button colorScheme="black" size="md" variant="outline" width="150px">
          Toddler Girl
        </Button>
        <Button colorScheme="black" size="md" variant="outline" width="150px">
          Toddler Boy
        </Button>
        <Button colorScheme="black" size="md" variant="outline" width="150px">
          Girl
        </Button>
        <Button colorScheme="black" size="md" variant="outline" width="150px">
          Boy
        </Button>
      </Grid>

      {/* photos box  */}
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(6, 1fr)"]}
        gap={10}
      >
        <Box boxSize="200px" paddingTop="30px">
          <Image src={img1} alt="baby girl" />
          <Heading as="h5" size="sm" color="#0D47A1" textDecoration="underline">
            Baby Girl
          </Heading>
        </Box>
        <Box boxSize="200px" paddingTop="30px">
          <Image src={img2} alt="baby girl" />
          <Heading as="h5" size="sm" color="#0D47A1" textDecoration="underline">
            Baby Boy
          </Heading>
        </Box>
        <Box boxSize="200px" paddingTop="30px">
          <Image src={img3} alt="baby girl" />
          <Heading as="h5" size="sm" color="#0D47A1" textDecoration="underline">
            Toddler Girl
          </Heading>
        </Box>
        <Box boxSize="200px" paddingTop="30px">
          <Image src={img4} alt="baby girl" />
          <Heading as="h5" size="sm" color="#0D47A1" textDecoration="underline">
            Toddler Boy
          </Heading>
        </Box>
        <Box boxSize="200px" paddingTop="30px">
          <Image src={img5} alt="baby girl" />
          <Heading as="h5" size="sm" color="#0D47A1" textDecoration="underline">
            Girl
          </Heading>
        </Box>
        <Box boxSize="200px" paddingTop="30px">
          <Image src={img6} alt="baby girl" />
          <Heading as="h5" size="sm" color="#0D47A1" textDecoration="underline">
            Boy
          </Heading>
        </Box>
      </Grid>

      {/* poster2  */}
      <div className={styles.poster2}>
        <div className={styles.text}>
          <Text
            fontSize={["0", "0", "0", "0", "20px"]}
            fontWeight="bolder"
            padding="0"
          >
            UPTO
          </Text>
          <Text
            fontSize={["0", "0", "0", "0", "70px"]}
            fontWeight="bolder"
            padding="0"
          >
            40%
          </Text>
          <Text
            fontSize={["0", "0", "0", "0", "40px"]}
            fontWeight="bolder"
            padding="0"
            color="grey"
          >
            VALENTINE'S DAY
          </Text>
          <Text
            fontSize={["0", "0", "0", "0", "20px"]}
            fontWeight="bolder"
            padding="0"
            color="grey"
          >
            SHOP VALENTINE'S DAY
          </Text>
        </div>
      </div>

      {/* poster3 */}
      <div className={styles.poster3}>
        <div className={styles.text3}>
          <Text
            fontSize={["0", "20px", "40px", "60px", "70px"]}
            fontWeight="bolder"
            padding="0"
            paddingTop={10}
          >
            $6
          </Text>
          <Text fontSize="20px" fontWeight="bolder" padding="0">
            & UP
          </Text>
          <Text
            fontSize={["0", "10px", "10px", "20px", "40px"]}
            fontWeight="bolder"
            padding="0"
          >
            DOORBUSTER
          </Text>
          <Text
            fontSize={["10px", "20px", "40px"]}
            padding="0"
            color={["white", "white", "grey"]}
          >
            BOLD BASIC
          </Text>
          <Text fontSize="15px" padding="0" color={["white", "white", "grey"]}>
            Comfy basics that make
            <br />
            matching easy,
            <br />
            from neutral to bright.
          </Text>
          <Text
            fontSize="20px"
            padding="0"
            fontWeight="bolder"
            color={["white", "white", "grey"]}
            marginTop={6}
          >
            SOLD BOLD BASICS
          </Text>
        </div>
      </div>

      {/* buttons2 */}
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(6, 1fr)"]}
        gap={6}
        margin="auto"
        direction="row"
        align="center"
        h={["200px", "150px", "100px"]}
        display="grid"
        padding={6}
      >
        <Button colorScheme="black" size="md" variant="outline" width="150px">
          Baby Girl
        </Button>
        <Button colorScheme="black" size="md" variant="outline" width="150px">
          Baby Boy
        </Button>
        <Button colorScheme="black" size="md" variant="outline" width="150px">
          Toddler Girl
        </Button>
        <Button colorScheme="black" size="md" variant="outline" width="150px">
          Toddler Boy
        </Button>
        <Button colorScheme="black" size="md" variant="outline" width="150px">
          Girl
        </Button>
        <Button colorScheme="black" size="md" variant="outline" width="150px">
          Boy
        </Button>
      </Grid>

      {/* poster4 */}
      <div className={styles.poster4}></div>

      {/* button3 */}
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
        margin="auto"
        direction="row"
        align="center"
        width="600px"
        h={["200px", "150px", "100px"]}
        display="grid"
        padding={6}
      >
        <Button colorScheme="black" size="md" variant="outline" width="200px">
          VALENTINE'S DAY
        </Button>
        <Button colorScheme="black" size="md" variant="outline" width="200px">
          SAINT PATRICK'S DAY
        </Button>
        <Button colorScheme="black" size="md" variant="outline" width="200px">
          EASTER
        </Button>
      </Grid>

      {/* discount box */}
      <Heading as="h1" color="#42A5F5" fontWeight="bolder" marginTop={10}>
        SHOP OUR FAVES
      </Heading>
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(6, 1fr)"]}
        gap={10}
      >
        <Box boxSize="200px" paddingTop="30px">
          <Image src={dis1} alt="baby girl" />
        </Box>
        <Box boxSize="200px" paddingTop="30px">
          <Image src={dis2} alt="baby girl" />
        </Box>
        <Box boxSize="200px" paddingTop="30px">
          <Image src={dis3} alt="baby girl" />
        </Box>
        <Box boxSize="200px" paddingTop="30px">
          <Image src={dis4} alt="baby girl" />
        </Box>
        <Box boxSize="200px" paddingTop="30px">
          <Image src={dis5} alt="baby girl" />
        </Box>
        <Box boxSize="200px" paddingTop="30px">
          <Image src={dis6} alt="baby girl" />
        </Box>
      </Grid>

      {/* banners */}
      <Grid
        templateColumns= "repeat(4, 1fr)"
        
         >
        <Box boxSize={["100px","200px","370px"]} paddingTop="70px">
          <Image src={ban2} alt="baby girl" />
        </Box>
        <Box boxSize={["100px","200px","370px"]} paddingTop="70px">
          <Image src={ban3} alt="baby girl" />
        </Box>
        <Box boxSize={["100px","200px","370px"]} paddingTop="70px">
          <Image src={ban1} alt="baby girl" />
        </Box>
        <Box boxSize={["100px","200px","370px"]} paddingTop="70px">
          <Image src={ban4} alt="baby girl" />
        </Box>
      </Grid>

      {/* corousal1 */}
      <Responsive/>
      {/* pictures */}
      <AutoPlay/>
    </div>
  );
}
export default Home;
