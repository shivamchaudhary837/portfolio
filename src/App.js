import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import { NotFound, Loader, ScrollToTop, ProjectDetails, Navbar, Footer, MernBlogRepair, EmployeeSalaryManagementRepair } from "./components";
import Contact from "./pages/Contact";
import About from "./pages/About";
import MySkill from "./components/molecules/MySkill";
const Home = React.lazy(() => import("./pages/Home"));
const Project = React.lazy(() => import("./pages/Project"));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  return (
    <>
      <ScrollToTop />
      {isFalse || <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/myskill" element={<MySkill />} /> 
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
          <Route path="/mern-blog" element={<MernBlogRepair />} />
          <Route path="/employee-salary-management" element={<EmployeeSalaryManagementRepair />} />
        </Routes>
      </Suspense>
      {isFalse || <Footer />}
    </>
  );
}

export default App;
