import React from "react";
import Opacity from "../components/Opacity-Black";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron-Cari-Mobil";
import Footer from "../components/Footer";
import Content from "../pages/Cari-Mobil";

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
