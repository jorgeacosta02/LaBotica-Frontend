import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTopComp/ScrollToTopComp";
import HomePage from "./pages/homePage/HomePage";
import ContactPage from "./pages/contactPage/ContactPage";
import AdminRoutesComp from "./components/protectedRoutes/adminRoutesComp/AdminRoutesComp";
import IntranetPage from "./pages/intranetPage/IntranetPage";
import ArticleUpFormPage from "./pages/articleUpFormPage/ArticleUpFormPage";
import UserLoginPage from "./pages/userLoginPage/UserLoginPage";


const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<UserLoginPage />} />
          {/* Admin Routes */}
          <Route element={<AdminRoutesComp />}>
            <Route path="/intranet" element={<IntranetPage />} />
            <Route path="/article-up-form" element={<ArticleUpFormPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

