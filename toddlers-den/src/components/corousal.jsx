
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component} from "react";
import Slider from "react-slick";
import heart from "../img/heart.png"
import { Box,Image,Heading} from "@chakra-ui/react";



export default class Responsive extends Component {

 
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
   
    
     
    
   
    return (
      <div>
        <Heading as="h2" size="xl"color="grey">
          Trending Products
        </Heading>
        <Slider {...settings}>
          <Box padding="70px">
            <Image
              src="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw6114f830/productimages/1O568210.jpg?sw=470"
              alt="Dan Abramov"
            />
            <hr
              style={{
                background: "black",
                color: "white",
                border: "1px dashed",
                // borderColor: "black",
                // height: "3px",
              }}
            />
            <Heading float="left" as="h4" size="md">
              $15.00
            </Heading>
            <br />
            <Heading as="h5" size="sm">
              Baby 2-Piece St. Patrick's Day 100% Snug Fit Cotton PJs
            </Heading>
            <Image
              float="right"
              w="30px"
              h="30px"
              src={heart}
              alt="Baby 2-Piece St. Patrick's Day 100% Snug Fit Cotton PJs"
            />
          </Box>
          <Box padding="70px">
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.27b/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw117926f0/productimages/1O542010.jpg?sw=800&sh=1000&sfrm=jpg&yocs=4E_4G_"
              alt="Baby 2-Piece St. Patrick's Day Top & Pant Set"
            />
            <hr
              style={{
                background: "black",
                color: "white",
                border: "1px dashed",
              }}
            />
            <Heading float="left" as="h4" size="md">
              $20.00
            </Heading>
            <br />
            <Heading as="h5" size="sm">
              Baby 2-Piece St. Patrick's Day Top & Pant Set
            </Heading>
            <Image
              float="right"
              w="30px"
              h="30px"
              src={heart}
              alt="Dan Abramov"
            />
          </Box>
          <Box padding="70px">
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.27b/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw838516c1/productimages/1O912310.jpg?sw=800&sh=1000&sfrm=jpg&yocs=4E_4G_"
              alt="Baby 2-Piece Cardigan & Dress Set"
            />
            <hr
              style={{
                background: "black",
                color: "white",
                border: "1px dashed",
              }}
            />
            <Heading float="left" as="h4" size="md">
              $29.00
            </Heading>
            <br />
            <Heading as="h5" size="sm">
              Baby 2-Piece Cardigan & Dress Set
            </Heading>
            <Image
              float="right"
              w="30px"
              h="30px"
              src={heart}
              alt="Dan Abramov"
            />
          </Box>
          <Box padding="70px">
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.27b/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw01b15cb5/productimages/1M712810.jpg?sw=800&sh=1000&sfrm=jpg&yocs=4E_4G_"
              alt="Baby Dog Cotton Zip-Up Sleep & Play"
            />
            <hr
              style={{
                background: "black",
                color: "white",
                border: "1px dashed",
              }}
            />
            <Heading float="left" as="h4" size="md">
              $9.00
            </Heading>
            <br />
            <Heading as="h5" size="sm">
              Baby Dog Cotton Zip-Up Sleep & Play
            </Heading>
            <Image
              float="right"
              w="30px"
              h="30px"
              src={heart}
              alt="Dan Abramov"
            />
          </Box>
          <Box padding="70px">
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.27b/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwff4ee721/productimages/1O541310.jpg?sw=800&sh=1000&sfrm=jpg&yocs=4E_4G_"
              alt="Baby 2-Piece Bodysuit Pant Set"
            />
            <hr
              style={{
                background: "black",
                color: "white",
                border: "1px dashed",
              }}
            />
            <Heading float="left" as="h4" size="md">
              $17.00
            </Heading>
            <br />
            <Heading as="h5" size="sm">
              Baby 2-Piece Bodysuit Pant Set
            </Heading>
            <Image
              float="right"
              w="30px"
              h="30px"
              src={heart}
              alt="Dan Abramov"
            />
          </Box>
          <Box padding="70px">
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.27b/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwd5601940/productimages/1O628210.jpg?sw=800&sh=1000&sfrm=jpg&yocs=4E_4G_"
              alt="Baby 2-Piece Hooded Bodysuit Pant Set"
            />
            <hr
              style={{
                background: "black",
                color: "white",
                border: "1px dashed",
              }}
            />
            <Heading float="left" as="h4" size="md">
              $9.00
            </Heading>
            <br />
            <Heading as="h5" size="sm">
              Baby 2-Piece Hooded Bodysuit Pant Set
            </Heading>
            <Image
              float="right"
              w="30px"
              h="30px"
              src={heart}
              alt="Dan Abramov"
            />
          </Box>
          <Box padding="70px">
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.27b/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwd8401cca/productimages/CS22E15H.jpg?sw=800&sh=1000&sfrm=jpg&yocs=4E_4G_"
              alt="Toddler Carter's Rainbow Sneakers"
            />
            <hr
              style={{
                background: "black",
                color: "white",
                border: "1px dashed",
              }}
            />
            <Heading float="left" as="h4" size="md">
              $27.00
            </Heading>
            <br />
            <Heading as="h5" size="sm">
              Toddler Carter's Rainbow Sneakers
            </Heading>
            <Image
              float="right"
              w="30px"
              h="30px"
              src={heart}
              alt="Dan Abramov"
            />
          </Box>
          <Box padding="70px">
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.27b/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw24318dcf/productimages/LPF22JULTN2PK6.jpg?sw=800&sh=1000&sfrm=jpg&yocs=4E_4G_"
              alt="Organic Cotton Sweater Knit 2-Piece Set"
            />
            <hr
              style={{
                background: "black",
                color: "white",
                border: "1px dashed",
              }}
            />
            <Heading float="left" as="h4" size="md">
              $45.00
            </Heading>
            <br />
            <Heading as="h5" size="sm">
              Organic Cotton Sweater Knit 2-Piece Set
            </Heading>
            <Image
              float="right"
              w="30px"
              h="30px"
              src={heart}
              alt="Dan Abramov"
            />
          </Box>
        </Slider>
      </div>
    );
  }
}

