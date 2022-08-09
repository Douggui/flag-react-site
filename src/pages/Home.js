import React from "react"
import Countries from "../components/Countries"
import Logo from "../components/Logo"
import Nav from "../components/Navigation"

const Home = () => {
    return (
        <div className="home">
            <Nav />
            <Logo />
            <Countries />
        </div>

    )
}
export default Home