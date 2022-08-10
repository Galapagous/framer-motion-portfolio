// import styled from "styled-components"
// import ReactDOM from "react-dom/client"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Sections/Home"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { useRef } from "react"
import "locomotive-scroll/dist/locomotive-scroll.css"
import { AnimatePresence } from "framer-motion"
import About from "./Sections/About"
import Collection from "./Sections/Collection"
import Contact from "./Sections/Contact"
import Footer from "./components/Footer"
// import ScrollTriggerProxy from "./components/ScrollTriggerProxy"

function App() {
  const containerRef = useRef(null)
  return (
    <div ref={containerRef}>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        {/* <ScrollTriggerProxy /> */}
        <AnimatePresence>
          <main data-scroll-container ref={containerRef}>
            <Home />
            <About />
            <Collection />
            <Contact />
            <Footer />
          </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
    </div>
  )
}

export default App
