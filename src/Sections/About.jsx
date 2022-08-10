import React from "react"
import styled from "styled-components"
import musa from "../Assets/Images/musa.jpg"
import img2 from "../Assets/Images/img2.jpg"
import img3 from "../Assets/Images/img5.png"

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  /* overflow: hidden; */
  display: flex;
`
const Title = styled.h1`
  font-size: 4rem;
  font-family: "kaushan script";
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 6;
  width: 100%;
`
const Left = styled.div`
  width: 50%;
  position: relative;
  margin: 18%;
  font-size: 1.5rem;
  font-weight: 300;
  z-index: 5;
`
const Right = styled.div`
  width: 50%;
  object-fit: contain;
  position: relative;
  .small-1 {
    width: 70%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-2 {
    width: 60%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }
`
const Image = styled.img`
  width: 100%;
  height: auto;
`

function About() {
  return (
    <Section id="fixed-target">
      <Title data-scroll data-scroll-speed="-5" data-scroll-direction="horizontal">
        About Me
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        i am an automation engineer, a web developer a graphic designer and a CAD designer on the side. Since my childhood my passion for advance tecnology never seems to stop, these days am always on the lookout to improve myself on the next best thing.
        <br />
        <br /> I follow the MERN stack approach for web development, these days i implement 3D graphic tools like blender for a more fun user experience.
        <br />
        <br />
        For my CAD design i use AutoCAD and SolidWorks for both 2D and 3D designs. Most of my Grahic design work are done using Illustrator, Cinema 4D and Blender, And lastly when i am on the field, i solve ABB and Siemen PLC related issues.
      </Left>
      <Right>
        <Image src={musa} alt="profile pix" />
        <Image data-scroll data-scroll-speed="5" data-scroll-direction="vertical" className="small-1" src={img2} alt="profile pix" />
        <Image data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" className="small-2" src={img3} alt="profile pix" />
      </Right>
    </Section>
  )
}

export default About
