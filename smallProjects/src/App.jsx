import { useEffect, useContext, useState } from "react";

import { Routes, Route } from "react-router-dom";
import { LayoutPage } from "./layouts/LayoutPage/LayoutPage";
import { Home } from "./pages/Home/Home";
import { Clock } from "./pages/Clock/Clock";
import { createContext } from "react";
import { TodoList } from "./pages/TodoList/TodoList";
export const ThemeContext = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("DarkMode") || ""
  );

  useEffect(() => {
    localStorage.setItem("DarkMode", darkMode);
  }, [darkMode]);

  return (
    <div id="app" className={darkMode}>
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
          <Route
            path="/todo_list"
            element={
              <LayoutPage>
                <TodoList />
              </LayoutPage>
            }
          />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
