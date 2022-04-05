import React from "react";
import Opacity from "../components/OpacityBlack";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/JumbotronMobil";
import Footer from "../components/Footer";
import Content from "../pages/HasilPencarian";

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
