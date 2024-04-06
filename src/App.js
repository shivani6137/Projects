import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Service from "./website/pages/Service";
import Product from "./website/pages/Product";
import Contact from "./website/pages/Contact";
import Bloggrid from "./website/pages/Bloggrid";
import Blogdetail from "./website/pages/Blogdetail";
import Testimonial from "./website/pages/Testimonial";
import Features from "./website/pages/Features";
import Team from "./website/pages/Team";
import Profile from "./website/pages/Profile";
import ViewProducts from "./website/pages/ViewProducts";
import Header from "./website/components/Header";
import Footer from "./website/components/Footer";
import LogIn from "./website/pages/LogIn";
import SignUp from "./website/pages/SignUp";
import AFeedback from "./website/pages/AFeedback";

import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import Aheader from "./admin/components/Aheader";
import Afooter from "./admin/components/Afooter";
import Customer from "./admin/pages/Customer";
import Feedback from "./admin/pages/Feedback";
import Booking from "./admin/pages/Booking";
import AddCategories from "./admin/pages/AddCategories";
import AddEmployee from "./admin/pages/AddEmployee";
import ManageCategories from "./admin/pages/ManageCategories";
import ManageEmployee from "./admin/pages/ManageEmployee";
import Contacts from "./admin/pages/Contacts";
import ManageProducts from "./admin/pages/Manageproducts";
import AddProducts from "./admin/pages/AddProducts";
import AddBlog from "./admin/pages/AddBlog";
import ManageBlog from "./admin/pages/ManageBlog";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        {/* website routing */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/bloggrid" element={<Bloggrid />}></Route>
        <Route path="/blogdetail" element={<Blogdetail />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/testimonial" element={<Testimonial />}></Route>
        <Route path="/websitefeedback" element={<AFeedback />}></Route>
        <Route
          path="/signup"
          element={
            <>
              <Header />
              <SignUp />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <Header />
              <LogIn />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/viewproducts/:cate_id"
          element={
            <>
              <Header />
              <ViewProducts />
              <Footer />
            </>
          }
        ></Route>

        {/* Admin routing */}

        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route
          path="/dashboard"
          element={
            <>
              <Aheader />
              <Dashboard />
              <Afooter />
            </>
          }
        ></Route>
        <Route
          path="/customer"
          element={
            <>
              <Aheader />
              <Customer />
              <Afooter />
            </>
          }
        ></Route>
        <Route
          path="/manageemployee"
          element={
            <>
              <Aheader />
              <ManageEmployee />
              <Afooter />
            </>
          }
        ></Route>
        <Route
          path="/AddEmployee"
          element={
            <>
              <Aheader />
              <AddEmployee />
              <Afooter />
            </>
          }
        ></Route>
        <Route
          path="/ManageCategories"
          element={
            <>
              <Aheader />
              <ManageCategories />
              <Afooter />
            </>
          }
        ></Route>
        <Route
          path="/addcategories"
          element={
            <>
              <Aheader />
              <AddCategories />
              <Afooter />
            </>
          }
        ></Route>
        <Route
          path="/manageproducts"
          element={
            <>
              <Aheader />
              <ManageProducts />
              <Afooter />
            </>
          }
        ></Route>
        <Route
          path="/addproducts"
          element={
            <>
              <Aheader />
              <AddProducts />
              <Afooter />
            </>
          }
        ></Route>
        <Route
          path="/contacts"
          element={
            <>
              <Aheader />
              <Contacts />
              <Afooter />
            </>
          }
        ></Route>
        <Route
          path="/booking"
          element={
            <>
              <Aheader />
              <Booking />
              <Afooter />
            </>
          }
        ></Route>
        <Route
          path="/feedback"
          element={
            <>
              <Aheader />
              <Feedback />
              <Afooter />
            </>
          }
        ></Route>
        <Route
          path="/addblog"
          element={
            <>
              <Aheader />
              <AddBlog />
              <Afooter />
            </>
          }
        ></Route>
        <Route
          path="/manageblog"
          element={
            <>
              <Aheader />
              <ManageBlog />
              <Afooter />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
