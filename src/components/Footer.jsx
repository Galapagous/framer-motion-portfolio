import React from "react"
import styled from "styled-components"
import Penguin from "../Assets/Images/penguin.png"
import { motion } from "framer-motion"
import Facebook from "../Assets/Images/facebook.png"
import Instagram from "../Assets/Images/instagram.png"
import Twitter from "../Assets/Images/twitter.png"
import WhatsApp from "../Assets/Images/whatsApp.png"

const Section = styled.section`
  width: 100vw;
  height: 20vh;
  background-color: black;
  color: white;
  border-radius: 100px 0px 0px 0px;
  padding: 50px;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Icon = styled.img`
  width: 50px;
  height: 50px;
`
const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const SideOne = styled.div``
// const SideTwo = styled.div``
const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
  cursor: pointer;
`
const Events = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5px;
`
const Event = styled.div``

function Footer() {
  return (
    <Section>
      <Container>
        <Left>
          <svg width="70px" height="70px" style={{ marginBottom: "50px" }} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M299.538 26.987c-27.712 4.261-39.38 15.192-49.267 22.648l-.053.041-.053.041c-73.941 57.51-101.795 128.454-108.16 196.262-6.068 64.64 6.728 126.235 16.002 173.3-34.558 15.572-55.01 34.272-73.676 63.16 49.896.875 114.104 3.897 154.125-14.92 33.248 24.616 108.192 18.58 125.744 12.72-15.002-12.068-30.944-22.905-53.937-24.522-1.684-10.036-2.83-21.368-2.192-30.248 25.491-100.31 58.396-193.682 30.438-315.685 27.736-8.906 78.544-25.196 89.16-35.451-20.08-15.046-90.089-52.22-128.13-47.346zm60.707 36.559l.867 13.955c-23.91 13.53-34.384 18.079-59.607 24.576-9.107-16.065-22.116-30.075-33.367-43.555 34.533-19.437 53.308-15.992 92.107 5.024zm-72.43 51.62c-.99 18.622-6.979 37.33-10.996 53.891-7.99-11.08-20.678-17.038-33.222-16.574-4.64.171-9.26 1.22-13.61 3.207-8.7 3.976-16.028 11.913-19.63 22.748-3.603 10.835-3.732 24.346.396 40.598 6.371 25.08 6.294 69.204 7.719 106.699.712 18.747 1.8 35.878 4.814 49.297 1.507 6.709 3.403 12.55 6.776 17.539 3.372 4.988 9.425 9.27 16.175 9.25l.336-.002.334-.026a43.534 43.534 0 0 0 3.383-.398c-2.61 21.604 12.917 42.21 12.26 60.81-9.846-5.039-14.043-9.963-22.057-16.117-37.715 21.695-84.065 18.818-120.26 17.752 20.485-17.142 36.638-25.124 58.305-33.273-14.806-66.279-23.097-128.644-18.613-182.904 5.814-61.937 28.745-124.924 93.33-178.202 20.062 5.353 34.83 40.62 34.56 45.705zm-24.19 66.569c18.134 32.064 26.544 83.772 22.802 126.738-1.871 21.483-6.771 40.786-14.04 54.17-4.19 6.172-22.242 27.486-27.411 19.846-1.247-1.844-2.888-5.893-4.125-11.4-2.474-11.016-3.693-27.621-4.393-46.038-1.4-36.833-.715-80.751-8.258-110.445-3.515-13.837-2.97-23.85-.761-30.49 6.1-18.223 28.237-14.862 36.185-2.381z" />
          </svg>
          <h1 style={{ position: "absolute", left: "5%", top: "9%", fontSize: "2rem", fontWeight: "700" }}>Galapagous Tech</h1>
          <Social>
            <Icon src={Facebook} alt="icon" />
            <Icon src={Twitter} alt="icon" />
            <Icon src={Instagram} alt="icon" />
            <Icon src={WhatsApp} alt="icon" />
          </Social>
        </Left>
        <Right>
          <SideOne>
            <Title>More Galapagous</Title>
            <Events>
              <Event>Media</Event>
              <Event>Event</Event>
              <Event>Spaecs</Event>
              <Event>Newsletter</Event>
              <Event>Deals</Event>
            </Events>
          </SideOne>
          <SideOne>
            <Title>About Galapagous</Title>
            <Events>
              <Event>Media</Event>
              <Event>Partner with us</Event>
              <Event>Jobs</Event>
              <Event>Terms and conditions</Event>
              <Event>Privacy statement</Event>
            </Events>
          </SideOne>
        </Right>
      </Container>
    </Section>
  )
}

export default Footer
