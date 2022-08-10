import React from "react"
import styled from "styled-components"
import Logo from "../components/Logo"
import Navbar from "../components/Navbar"
import VideoSection from "../components/VideoSection"

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`

function Home() {
  return (
    <Section>
      <VideoSection />
      <Logo />
      <Navbar />
    </Section>
  )
}

export default Home
