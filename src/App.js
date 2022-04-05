import './App.css';
import React from 'react';
import $ from 'jquery';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutsCariMobil from "./layouts/Layouts-Cari-Mobil";
import LayoutsHasilPencarian from "./layouts/Layouts-Hasil-Pencarian";
import LayoutsDetailPaket from "./layouts/Layouts-Detail-Paket";

class App extends React.Component {
  componentDidMount() {
    // Box Form
    //run when the DOM is ready
    $(".clickable").click(function() {  //use a class, since your ID gets mangled
      $(".custom-body").addClass("custom-bg-active"); //add the class to the clicked element
    });     
    //run when the DOM is ready
    $(".unclickable").click(function() {  //use a class, since your ID gets mangled
      $(".custom-body").removeClass("custom-bg-active"); //add the class to the clicked element
    });

    // Background tranparan
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll < 100){
          $('.fixed-top').css('background', 'transparent');
      } else{
          $('.fixed-top').css('background', '#F1F3FF');
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutsCariMobil/>}/>
          <Route path='/hasil-pencarian' element={<LayoutsHasilPencarian/>}/>
          <Route path='/detail-paket/:id' element={<LayoutsDetailPaket/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
