import gsap from "gsap"
import React, { useLayoutEffect, useRef, useState } from "react"
import styled from "styled-components"
import LeftArrow from "../Assets/Images/left.png"
import RightArrow from "../Assets/Images/right.png"
import WorkImage from "../Assets/Images/fish.jpg"
import Data from "../ScrollImage/Scroll"
import imageItem from "../ScrollImage/Scroll"

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 300px;
  margin-bottom: 200px;
`
const Title = styled.h1`
  font-size: 4rem;
  font-family: "kaushan script";
  font-weight: 300;
  position: fixed;
  top: 1rem;
  left: 5%;
  z-index: 8;
  width: 100%;
  color: white;
  text-shadow: 1px 1px 1px 0.6;
`
const Left = styled.div`
  width: 35%;
  min-height: 100vh;
  background-color: black;
  color: white;
  z-index: 6;
  position: absolute;
  top: -1;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  font-size: 1.2rem;
  margin-top: 50px;
  p {
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
`
const Right = styled.div`
  position: absolute;
  top: -1;
  left: 45%;
  background-color: lightgray;
  width: 65%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 30%;
  h1 {
    width: 5rem;
    padding: 0 2rem;
  }
`
const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  z-index: 10;
  background-color: gray;
  padding: 10px;
  color: white;
  border-radius: 5px;
  margin: 5px;
`
const ImageItems = styled.div``
const TopRight = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 6%;
  bottom: 0;
  left: 4%;
`
const ImageContainer = styled.div``
function Collection() {
  const [nextImage, setNextImage] = useState(0)
  const handleClick = (e) => {
    if (e.target.name === "left") {
      nextImage === 0 ? setNextImage(Data.length - 1) : setNextImage(nextImage - 1)
    } else {
      nextImage === Data.length - 1 ? setNextImage(0) : setNextImage(nextImage + 1)
    }
  }
  return (
    <Section data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
      <Title data-scroll data-scroll-speed="-5" data-scroll-direction="horizontal">
        New Collections
      </Title>

      <>
        <Left>
          <h1>{Data[nextImage].title}</h1>
          <h3>{console.log(Data[nextImage].title)}</h3>
          <p>{Data[nextImage].desc}</p>
        </Left>
        <Right>
          <TopRight>
            <Image style={{ cursor: "pointer" }} src={LeftArrow} name="left" alt="arrow" onClick={handleClick} />
            <Image style={{ cursor: "pointer" }} src={RightArrow} name="right" alt="arrow" onClick={handleClick} />
          </TopRight>
          <ImageItems>
            <Image style={{ width: "50vw", height: "70vh", position: "absolute", bottom: "5%", left: "4%" }} src={Data[nextImage].url} alt="scroll-image" />
          </ImageItems>
        </Right>
      </>
    </Section>
  )
}

export default Collection
