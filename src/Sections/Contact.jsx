import React from "react"
import styled from "styled-components"
import Bird from "../Assets/Images/penguin.png"

const Section = styled.section`
  width: 100vw;
  height: 120vh;
  position: relative;
`
const PageTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
`
const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const ContactCard = styled.div`
  width: 400px;
  height: 300px;
  /* border: 1px solid grey; */
  padding: 10px;
  margin: 50px 100px;
  padding: 20px;
  box-shadow: 10px 11px 14px -10px rgba(0, 0, 0, 0.52);
  -webkit-box-shadow: 10px 11px 14px -10px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: 10px 11px 14px -10px rgba(0, 0, 0, 0.52);
`
const Logo = styled.img`
  width: 50px;
  height: 50x;
  object-fit: cover;
`
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`
const Paragraph = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
`
function Contact() {
  return (
    <Section data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
      <PageTitle data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        Contacts
      </PageTitle>
      <Container>
        <ContactCard>
          <Logo src={Bird} />
          <Title>Home Address</Title>
          <Paragraph>Plot 12b Industrial Estate Ota Ogun State</Paragraph>
          <Paragraph>No 5 Off Pastor Adebayo Street Ala Ota Ogun State</Paragraph>
        </ContactCard>
        <ContactCard>
          <Logo src={Bird} />
          <Title>Email</Title>
          <Paragraph>mmusamuhammed450@gmail.com</Paragraph>
          <Paragraph>galapagous09@gmail.com</Paragraph>
        </ContactCard>
        <ContactCard>
          <Logo src={Bird} />
          <Title>Contact</Title>
          <Paragraph>+2348123280394</Paragraph>
          <Paragraph>+2348142065259</Paragraph>
        </ContactCard>
        <ContactCard>
          <Logo src={Bird} />
          <Title>Social Address</Title>
          <Paragraph>Plot 12b Industrial Estate Ota Ogun State</Paragraph>
          <Paragraph>No 5 Off Pastor Adebayo Street Ala Ota Ogun State</Paragraph>
        </ContactCard>
      </Container>
    </Section>
  )
}

export default Contact
