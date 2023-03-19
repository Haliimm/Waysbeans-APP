import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import DetailProduct from "./pages/DetailProduct";
import MyCart from "./pages/MyCart";
import MyTransaction from "./pages/MyTransaction";
import AddCard from "./pages/AddCard";
import UpdateCard from "./pages/UpdateCard";
import AdminDashboard from "./pages/AdminDashboard";
import ListProductAdmin from "./pages/ListProductAdmin";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import Header from "./component/Header";

function App() {
  const [UpdateProfile, setUpdateProfile] = useState({});

  return (
    <div className="App">
      <Header UpdateProfile={UpdateProfile} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-product/:id" element={<DetailProduct />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/my-transaction" element={<MyTransaction UpdateProfile={UpdateProfile} />} />
        <Route path="/add-product" element={<AddCard />} />
        <Route path="/update-product/:id" element={<UpdateCard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/list-product" element={<ListProductAdmin />} />
        <Route path="/update-profile" element={<UpdateProfilePage setUpdateProfile={setUpdateProfile} />} />
      </Routes>
    </div>
  );
}

export default App;
