import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/front/UserLayout";
import Login from "./pages/front/Login";
import Register from "./pages/front/Register.jsx";
import { TOKEN } from "./const";
import { ROLE } from "./utils";
import AdminLayout from "./components/layout/admin/AdminPanel";
import SkillsPage from "./pages/front/SkillsPage";
import HomePage from "./pages/front/HomePage";
import ResumePage from "./pages/front/ResumePage";
import { Experiences, Portfolios, Skills, Users } from "./pages/admin";
import Education from "./pages/admin/Education";
import PortfoliosPage from "./pages/front/PortfoliosPage";
import TestmonialPage from "./pages/front/TestmonialPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/front/ContactPage";
import Account from "./pages/admin/Account";


function App() {
  const isAuthorized = localStorage.getItem(TOKEN) && ROLE !== "user";
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="skils" element={<SkillsPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="portfolio" element={<PortfoliosPage />} />
          <Route path="testmonial" element={<TestmonialPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {isAuthorized && (
          <Route path="/" element={<AdminLayout />}>
            <Route path="account" element={<Account />} />
            <Route path="education" element={<Education />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="portfolios" element={<Portfolios />} />
            <Route path="skills" element={<Skills />} />
            <Route path="users" element={<Users />} />
          </Route>
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
