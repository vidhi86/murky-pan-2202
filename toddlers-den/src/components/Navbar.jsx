import {Search2Icon} from "@chakra-ui/icons"
import {
  Box,
  Image,
  Flex,
  Input,
 Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"
import logo from "../img/toddlerLogo.jpeg"

// const link =[
//     {path:"/baby",title:"Baby"},
//     {path:"/toddler",title:"Toddler"},
//     {path:"/kid",title:"Kids"},
//     {path:"/collection",title:"Collection"},
//     {path:"/sale",title:"Sale"},

// ]

 function Navbar() {
  

    return (
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
        <Link to="/">
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
      </div>
    );
}

export default Navbar;
