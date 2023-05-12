// import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
// import Footer from "../user/footer/Footer";
import Header from "../user/Header";

export default function UserLayout() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>

        {/* <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense> */}
        <Toaster />
      </BrowserRouter>
    </div>
  );
}
