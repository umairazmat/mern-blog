import * as React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
     <Navigation/>
       <Outlet />
     <Footer/>
    </>
  );
}

export default App;

