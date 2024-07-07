import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/home/Home";
import Basket from "./pages/basket/Basket";
import Wish from "./pages/wish/Wish";
import Add from "./pages/add/Add";
import Admin from "./pages/admin/Admin";
import Contact from "./pages/contact/Contact";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import CoreProvider from "./context/CoreProvider";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import ProfilePage from "./pages/auth/profile/ProfilePage";
import AdminPanel from "./pages/auth/admin/AdminPanel";

function App() {
  return (
    <>
      <CoreProvider>
        <HelmetProvider>
            <BrowserRouter>
          <AuthProvider>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="Basket" element={<Basket />} />
                  <Route path="Wish" element={<Wish />} />
                  <Route path="Add" element={<Add />} />
                  <Route path="NoAdmin" element={<Admin />} />
                  <Route path="Contact" element={<Contact />} />
                </Route>

                <Route path="Register" element={<Register />} />
                <Route path="Login" element={<Login />} />

                <Route element={<PrivateRoute />}>
                  <Route path="/profil" element={<ProfilePage />} />
                  <Route path="/admin" element={<AdminPanel />} />
                </Route>
              </Routes>
          </AuthProvider>
            </BrowserRouter>
        </HelmetProvider>
      </CoreProvider>
    </>
  );
}

export default App;
