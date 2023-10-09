import { BrowserRouter, Routes, Route } from "react-router-dom";
import routeConfig from "@routes/routeConfig";

import Header from "@components/Header";
import Footer from "@components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          {routeConfig.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              end={route.end}
              element={route.element}
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
