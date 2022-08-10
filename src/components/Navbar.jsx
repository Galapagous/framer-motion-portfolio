import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const NavContainer = styled.div`
  width: 100%;
  position: absolute;
  top: ${(props) => (props.click ? "0" : "-11%")};
  left: 0;
  z-index: 6;
  background-color: black;
  height: 50px;
  transition: 0.5s all ease;
`

const NavList = styled(motion.ul)`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 10px;
  background-color: black;
  /* height: 50px; */
  color: white;
  list-style: none;
  height: 65px;
  font-size: 1.5rem;
`
const ListMenu = styled(motion.div)`
  list-style: none;
  color: black;
  font-size: 1rem;
  font-weight: 700;
  background-color: white;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  clip-path: polygon(0 0, 100% 0, 78% 100%, 22% 100%);
  position: absolute;
  top: 180%;
  right: 47%;
  /* transform: translateX(-1%); */
`

const ListItems = styled(motion.li)`
  text-transform: uppercase;
  cursor: pointer;
`
const MenuDeco = {
  noshow: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    duration: 4,
    y: 0,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
}

function Navbar() {
  const [click, setClick] = useState(false)
  return (
    <NavContainer click={click}>
      <NavList
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <ListMenu
          onClick={() => {
            if (click) {
              setClick(false)
            } else {
              setClick(true)
            }
            console.log(click)
          }}
          variants={MenuDeco}
          initial="noshow"
          animate="show"
        >
          Menu
        </ListMenu>
        <ListItems whileHover={{ scale: 1.1, y: -1 }} whileTap={{ scale: 0.9, y: 0 }}>
          Home
        </ListItems>
        <ListItems whileHover={{ scale: 1.1, y: -1 }} whileTap={{ scale: 0.9, y: 0 }}>
          About
        </ListItems>
        <ListItems whileHover={{ scale: 1.1, y: -1 }} whileTap={{ scale: 0.9, y: 0 }}>
          Collection
        </ListItems>
        <ListItems whileHover={{ scale: 1.1, y: -1 }} whileTap={{ scale: 0.9, y: 0 }}>
          Contact
        </ListItems>
      </NavList>
    </NavContainer>
  )
}

export default Navbar
