import "./App.css";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { Component, useState } from "react";
import Translate from "./components/Translate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import VideoApp from "./components/VideoApp";

// const ITEMS = [
//   {
//     title: "what is react",
//     content: "react is a front end javascript framework",
//   },
//   {
//     title: "why use react",
//     content: "react is a favourite js library",
//   },
//   {
//     title: "how do you use react",
//     content: "you use react by creating components",
//   },
// ];
// const OPTIONS = [
//   { label: "The Color Red", value: "red" },
//   { label: "The Color Green", value: "green" },
//   { label: "A Shade of Blue", value: "blue" },
// ];

class App extends Component {
  // const [selected, setSelected] = useState(OPTIONS[0]);
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/translate" element={<Translate />} />
            <Route path="/" element={<Search />} />
            <Route path="/videosearch" element={<VideoApp />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
