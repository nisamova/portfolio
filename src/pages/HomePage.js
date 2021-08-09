import React from "react"
import Footer from "../components/Footer"
import { Header } from "../components/Header"
import NasaImages from "../components/NasaImages"
import Social from "../components/Social"

const HomePage = () => {
  return (
    <>
      <Header />
      <Social />
      <NasaImages />
      <Footer />
    </>
  )
}

export default HomePage
