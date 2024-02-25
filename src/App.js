import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import RoutesIndex from "./routes";



function App() {
  useEffect(() => {
    AOS.init({ delay: 2 });
  }, [])


  return (
    <Routes>
      <Route path="*" element={<RoutesIndex />}></Route>
    </Routes>
  );
}

export default App;
