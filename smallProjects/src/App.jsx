import { useEffect, useContext, useState } from "react";

import { Routes, Route } from "react-router-dom";
import { LayoutPage } from "./layouts/LayoutPage/LayoutPage";
import { Home } from "./pages/Home/Home";
import { Clock } from "./pages/Clock/Clock";
import { createContext } from "react";
export const ThemeContext = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div id="app" className={darkMode ? "dark" : ""}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutPage>
                <Home />
              </LayoutPage>
            }
          />
          <Route
            path="/clock"
            element={
              <LayoutPage>
                <Clock />
              </LayoutPage>
            }
          />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
