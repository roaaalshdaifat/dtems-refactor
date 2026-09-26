import { useState } from "react";
import { AppProvider } from "./context/AppContext";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";

export default function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("light");
  const [currentPage, setCurrentPage] = useState("home");

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AppProvider value={{ lang, setLang, theme, setTheme }}>
      <div data-theme={theme}>
        {currentPage === "home" && (
          <div>
            <h1>Welcome to DTEMS</h1>
            <button onClick={() => navigate("login")}>Login</button>
          </div>
        )}
        {currentPage === "login" && (
          <div>
            <h1>Login Page</h1>
            <button onClick={() => navigate("home")}>Back</button>
          </div>
        )}
      </div>
    </AppProvider>
  );
}