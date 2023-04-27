import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Womens from "./pages/Womens";
import Mens from "./pages/Mens";
import MainPage from "./pages/MainPage";
import { useState } from "react";
import img1 from "./images/Group 371.png";
import img2 from "./images/Group 373.png";
import img3 from "./images/Group 372.png";
import img4 from "./images/Group 374.png";

function App() {
  const [data, setData] = useState([
    {
      image: img1,
      title: "Women",
      description: "Lorem Ipsum is simply dummy",
    },
    {
      image:  img2,
      title: "Kids",
      description: "Lorem Ipsum is simply dummy",
    },
    {
      image:  img3,
      title: "Men",
      description: "Lorem Ipsum is simply dummy",
    },
    {
      image:  img4,
      title: "Accessories",
      description: "Lorem Ipsum is simply dummy",
    },
  ]);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage data={data} />} />
          <Route path="/womens" element={<Womens data={data} />} />
          <Route path="/Mens" element={<Mens />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
