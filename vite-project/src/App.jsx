// import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import Header from "./components/Header"; import Footer from "./components/Footer"; 
// import Home from "./pages/Home"; import Login from "./pages/Login";
//  import Register from "./pages/Register"; import ProjectDetails from "./pages/ProjectDetails";
//   import CreateProject from "./pages/CreateProject";
//  import CreatorDashboard from "./pages/CreatorDashboard"; 
//  import ProtectedRoute from "./components/ProtectedRoute";
//  import AdminDashboard from "./pages/AdminDashboard";
// import MyInvestments from "./pages/MyInvestments";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// import Users from "./pages/Users";
// import Projects from "./pages/Projects";


//   const App = () => { return ( <BrowserRouter> <Header />
//    <Routes> <Route path="/" element={<Home />} />
//    <Route path="/login" element={<Login />} /> 
//    <Route path="/register" element={<Register />} /> 
//    <Route path="/project/:id" element={<ProjectDetails />} /> 
//    <Route path="/create" element={ <ProtectedRoute role="CREATOR"> <CreateProject /> </ProtectedRoute> } /> 
//    <Route path="/creator" element={ <ProtectedRoute role="CREATOR"> <CreatorDashboard /> </ProtectedRoute> } /> 
//    {/* 🌍 Public */}
// <Route path="/about" element={<About />} />
// <Route path="/contact" element={<Contact />} />

// {/* 💰 Investor */}
// <Route
//   path="/my-investments"
//   element={
//     <ProtectedRoute role="INVESTOR">
//       <MyInvestments />
//     </ProtectedRoute>
//   }
// />

// {/* 👑 Admin */}
// <Route path="/AdminDashboard" element={<ProtectedRoute role="ADMIN"><Dashboard /></ProtectedRoute>} />
// <Route path="/users" element={<ProtectedRoute role="ADMIN"><Users /></ProtectedRoute>} />
// <Route path="/projects" element={<ProtectedRoute role="ADMIN"><Projects /></ProtectedRoute>} />
//    </Routes> 
//    <Footer /> </BrowserRouter> ); }; export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProjectDetails from "./pages/ProjectDetails";
import CreateProject from "./pages/CreateProject";
import CreatorDashboard from "./pages/CreatorDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import MyInvestments from "./pages/MyInvestments";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Users from "./pages/Users";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* 🌍 Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* 💰 Investor */}
        <Route
          path="/my-investments"
          element={
            <ProtectedRoute role="INVESTOR">
              <MyInvestments />
            </ProtectedRoute>
          }
        />

        {/* 🧑‍💼 Creator */}
        <Route
          path="/create"
          element={
            <ProtectedRoute role="CREATOR">
              <CreateProject />
            </ProtectedRoute>
          }
        />

        <Route
          path="/creator"
          element={
            <ProtectedRoute role="CREATOR">
              <CreatorDashboard />
            </ProtectedRoute>
          }
        />

        {/* 👑 Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute role="ADMIN">
              <Users />
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects"
          element={
            <ProtectedRoute role="ADMIN">
              <Projects />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;