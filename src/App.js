import React from "react";
import "./App.css";
import UserTabs from "./components/UserTabs/UserTabs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Aside></Aside>
      <UserTabs></UserTabs>
      <Footer></Footer>
    </div>
  );
}

export default App;
