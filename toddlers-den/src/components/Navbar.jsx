


import {Search2Icon} from "@chakra-ui/icons"
import {
  Box,
  Image,
  
  Input,
 Button,
 Heading
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"
import logo from "../img/toddlerLogo.jpeg"

 function NavBar() {

    return (
      <Box>
        <Box
          alignItems="center"
          w="100%"
          backgroundColor="#E3F2FD"
          height="70px"
        >
          <Heading fontWeigth="light" as="h5" size="sm">
            Free Shipping on $35+ Orders
          </Heading>
          <Box float="right">
            <Button backgroundColor="#E3F2FD">
              <Image
                boxSize="20px"
                src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
              />
              Sign in
            </Button>
            <Button backgroundColor="#E3F2FD">
              <Image
                boxSize="20px"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
              />
              Hearts
            </Button>
            <Button backgroundColor="#E3F2FD">
              <Image
                boxSize="20px"
                src="https://cdn-icons-png.flaticon.com/128/2900/2900216.png"
              />
              Orders
            </Button>
            <Button backgroundColor="#E3F2FD">
              <Image
                boxSize="20px"
                src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
              />
            </Button>
          </Box>
        </Box>
        <div className={styles.container}>
          <div>
            <Link to="/">
              <img src={logo} width="300px" height="100px" alt="logo" />
            </Link>
          </div>
          <Link to="/baby">
            <div className={styles.menuContainer}>
              <div className={styles.menuTrigger}>
                <h1>Baby</h1>
                <p>PREEMIE - 24M</p>
              </div>
              {/* <div className={styles.dropdownMenu}>
                        <ul>
                        <li>Baby Girl</li>
                        <li>Baby Boy</li>
                        <li>Baby Neutral</li>
                        <li>Baby & Newborn Gear</li>
                        </ul>
                    </div> */}
            </div>
          </Link>
          <Link to="/toddler">
            <div className={styles.menuContainer}>
              <div className={styles.menuTrigger}>
                <h1>Toddler</h1>
                <p>2T-5T</p>
              </div>
              {/* <div className={styles.dropdownMenu}>
                        <ul>
                        <li>Baby Girl</li>
                        <li>Baby Boy</li>
                        <li>Baby Neutral</li>
                        <li>Baby & Newborn Gear</li>
                        </ul>
                    </div> */}
            </div>
          </Link>
          <Link to="/kids">
            <div className={styles.menuContainer}>
              <div className={styles.menuTrigger}>
                <h1>Kids</h1>
                <p>4-14</p>
              </div>
            </div>
          </Link>
          <Link to="/holiday">
            <div className={styles.menuContainer}>
              <div className={styles.menuTrigger}>
                <h1>Holidays</h1>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className={styles.menuContainer}>
              <div className={styles.menuTrigger}>
                <h1>New & Popular</h1>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className={styles.menuContainer}>
              <div className={styles.menuTrigger}>
                <h1>Sales</h1>
              </div>
            </div>
          </Link>
          <Box
            display="flex"
            border="1px solid black"
            h="40px"
            borderRadius="20px"
          >
            <Input border="0" placeholder="Find your Products" />
            <Button background="none">
              <Search2Icon />
            </Button>
          </Box>
        </div>
        <Box
          w="100%"
          backgroundColor="#E3F2FD"
          borderBottom="2px solid #1E88E5"
        >
          UP TO 50% OFF SPRING NEW ARRIVALS
        </Box>
      </Box>
    );
}

export default NavBar;
