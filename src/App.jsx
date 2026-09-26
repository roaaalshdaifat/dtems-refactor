import { useState } from "react";
import { AppProvider } from "./context/AppContext";
import { I18N } from "./i18n/translations";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";

export default function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("light");
  const [currentPage, setCurrentPage] = useState("home");
  const t = I18N[lang];

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AppProvider value={{ lang, setLang, theme, setTheme }}>
      <div data-theme={theme}>
        <header className="dt-nav">
          <div className="dt-nav-container">
            <div className="dt-logo">DTEMS</div>
            <nav className="dt-nav-links">
              <button onClick={() => navigate("home")}>Home</button>
              <button onClick={() => navigate("login")}>{t.navLogin}</button>
            </nav>
            <div className="dt-nav-actions">
              <button
                className="dt-lang-toggle"
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
              >
                {lang === "en" ? "العربية" : "English"}
              </button>
              <button
                className="dt-theme-toggle"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </div>
          </div>
        </header>

        <main>
          {currentPage === "home" && (
            <Home onNavigate={navigate} lang={lang} />
          )}
          {currentPage === "login" && (
            <Login onNavigate={navigate} lang={lang} />
          )}
          {currentPage === "registration" && (
            <Registration onNavigate={navigate} lang={lang} />
          )}
          {currentPage === "forgot-password" && (
            <ForgotPassword onNavigate={navigate} lang={lang} />
          )}
        </main>

        <footer className="dt-footer">
          <div className="dt-footer-container">
            <p>{t.footerDesc}</p>
            <p>{t.footerRights}</p>
          </div>
        </footer>
      </div>
    </AppProvider>
  );
}