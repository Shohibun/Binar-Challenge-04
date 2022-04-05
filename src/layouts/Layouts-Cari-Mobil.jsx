import React from "react";
import Opacity from "../components/OpacityBlack";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/JumbotronCariMobil";
import Footer from "../components/Footer";
import Content from "../pages/CariMobil";

export default function Layouts() {
    return (
        <>
        <Opacity />
        <Navbar />
        <Jumbotron />
        <Content />
        <Footer />
        </>
    )
}
