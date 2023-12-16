import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Messages } from "./pages/Messages";
import { Boards } from "./pages/Boards";
import { Calendar } from "./pages/Calendar";
import { MainLayout } from "./layouts/MainLayout";
import { Test } from "./pages/Test";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${require("./assets/img/kosmos-big.jpg")})` }}
    >
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/b/:id" element={<Boards />} />
          <Route path="/c/:id" element={<Boards />} />
        </Routes>
      </MainLayout>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
