import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

import { Box, Image, Heading } from "@chakra-ui/react";



export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div>
        <Heading
          as="h2"
          marginTop={10}
          size="xl"
          color="black"
          fontWeight="light"
        >
          show us how you
        </Heading>
        <Heading
          as="h2"
          size="2xl"
          color="#64B5F6"
          font-family="Source-Sans-Pro-Semibold"
        >
          #lovecaters
        </Heading>
        <Heading
          as="h2"
          marginBottom={10}
          size="xl"
          color="black"
          fontWeight="light"
        >
          And follow our new budding brand @LittlePlanet
        </Heading>
        <Slider {...settings}>
          <Box>
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/o~f_webp/v~4b.282.0.0/https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjY5MjEyNzIxLjU2MjgzNjI3MDk3Mi5qcGVn.jpg?w=640&h=640&fit=cover"
              alt="photo"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/o~f_webp/v~4b.282.0.0/https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk1LjkwODE0NjY2MzkzNC5qcGVn.jpg?w=640&h=640&fit=cover"
              alt="photo"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/o~f_webp/v~4b.282.0.0/https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk1LjM5MjYzMzIxMDE5LmpwZWc=.jpg?w=640&h=640&fit=cover"
              alt="photo"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/o~f_webp/v~4b.282.0.0/https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk3LjI0ODUyMDk0ODE5OS5qcGVn.jpg?w=640&h=640&fit=cover"
              alt="photo"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/o~f_webp/v~4b.282.0.0/https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk3LjI2ODc1ODUzNjk5OC5qcGVn.jpg?w=640&h=640&fit=cover"
              alt="photo"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/o~f_webp/v~4b.282.0.0/https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjczMDIzMTkwLjIyMTkzMjI2MDE4MS5qcGVn.jpg?w=640&h=640&fit=cover"
              alt="photo"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/o~f_webp/v~4b.282.0.0/https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk2LjQ0MDY5Mzk5MDkyOC5qcGVn.jpg?w=640&h=640&fit=cover"
              alt="photo"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/o~f_webp/v~4b.282.0.0/https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyODQ5NzYzLjY3NzQ5MzE1NzM2LmpwZWc=.jpg?w=640&h=640&fit=cover"
              alt="photo"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/o~f_webp/v~4b.282.0.0/https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyODQ5NzYyLjc1MDA2MDY3NTg5Ni5qcGVn.jpg?w=640&h=640&fit=cover"
              alt="photo"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/o~f_webp/v~4b.282.0.0/https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyODQ5NzU1LjM5ODgxOTQ3NDY5NS5qcGVn.jpg?w=640&h=640&fit=cover"
              alt="photo"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/o~f_webp/v~4b.282.0.0/https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk1LjM5NDAyMTM1NTg4NS5qcGVn.jpg?w=640&h=640&fit=cover"
              alt="photo"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/o~f_webp/v~4b.282.0.0/https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk1LjA4MDQ2OTgxNTA3Mi5qcGVn.jpg?w=640&h=640&fit=cover"
              alt="photo"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/o~f_webp/v~4b.282.0.0/https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk1LjI0NTY4MTg2NDQ4LmpwZWc=.jpg?w=640&h=640&fit=cover"
              alt="photo"
            />
          </Box>
        </Slider>
      </div>
    );
  }
}