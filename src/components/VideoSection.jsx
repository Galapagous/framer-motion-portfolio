import React from "react"
import styled from "styled-components"
import video from "../Assets/Videos/vid6.mp4"
import { motion } from "framer-motion"

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`
const Video = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: black;
  opacity: 0.7;
`

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: auto;
  height: auto;
  color: white;
  h1 {
    font-family: "kaushan script";
    font-size: 6rem;
    color: white;
    font-style: italic;
    text-shadow: 1px 1px 1px 0.5rem;
  }
  motion.h2 {
    font-family: "Sirin Stencil", cursive;
    font-size: 2rem;
    color: white;
    /* font-style: italic; */
    text-shadow: 1px 1px 1px 0.5rem;
  }
`
const Container = {
  noshow: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    duration: 4,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
}
const Items = {
  noshow: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 2,
      staggeredChildren: 0.2,
    },
  },
}
function VideoSection() {
  return (
    <Section>
      <DarkOverlay />
      <Title variants={Container} initial="noshow" animate="show">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <motion.h1 variants={Items} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
            M
          </motion.h1>
          <motion.h1 variants={Items} data-scroll data-scroll-delay="0.09" data-scroll-speed="4">
            U
          </motion.h1>
          <motion.h1 variants={Items} data-scroll data-scroll-delay="0.06" data-scroll-speed="4">
            S
          </motion.h1>
          <motion.h1 variants={Items} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
            A
          </motion.h1>
        </div>

        <motion.h2 variants={Items} data-scroll data-scroll-delay="0.04" data-scroll-speed="2">
          .Inspire .Create. Believe
        </motion.h2>
      </Title>
      <Video src={video} muted autoPlay loop />
    </Section>
  )
}

export default VideoSection
