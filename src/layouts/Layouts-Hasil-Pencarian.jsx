import React from "react";
import Opacity from "../components/Opacity-Black";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron-Mobil";
import Footer from "../components/Footer";
import Content from "../pages/Hasil-Pencarian";

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
