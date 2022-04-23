import React from "react";
import "./App.css";
import ContactPage from "./components/ContactPage";
import Navbar from "./components/Navbar";
import TimeLine from "./components/TimeLine";
import Sponsership from "./components/Sponsership";
import Header from "./components/Header";
import Main from "./components/Main";
import BecomeSpnser from "./components/BecomeSpnser";
import Invities from "./components/Invities";
import EventsSlide from "./components/EventsSlide";
import Error404 from "./components/Error404";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Main />
      <EventsSlide />
      <BecomeSpnser />
      <TimeLine />
      <ContactPage />
      <Invities />
      <Modal />
      <Sponsership />
    </div>
  );
}

export default App;
