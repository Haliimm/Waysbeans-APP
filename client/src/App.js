import { Routes, Route } from "react-router-dom";

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
import { UserRoute, AdminRoute } from "./component/PrivateRoutes";
import { UserContext } from "./context/userContext";
import React, { useContext } from "react";

function App() {
  const [state] = useContext(UserContext);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={state.user.is_admin ? <AdminDashboard /> : <Home />} />
        <Route path="/detail-product/:id" element={<DetailProduct />} />

        {/* Route User */}
        <Route path="/" element={<UserRoute />}>
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/my-transaction" element={<MyTransaction />} />
          <Route path="/update-profile" element={<UpdateProfilePage />} />
        </Route>

        {/* Route Admin */}
        <Route path="/" element={<AdminRoute />}>
          <Route path="/add-product" element={<AddCard />} />
          <Route path="/update-product/:id" element={<UpdateCard />} />
          <Route path="/list-product" element={<ListProductAdmin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
