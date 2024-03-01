import React from "react";
import Front from "./component/Front";
import { Footer } from "./component/Footer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Payment from "./component/Payment";


const App = () => {
  return (
    <>
      
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Payment />}>
        </Route>
        <Route path="/Front" element={<Front/>}>
</Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
};

export default App;
