import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import routeConfig from "@routes/routeConfig";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "@components/Header";
import Footer from "@components/Footer";

import "./App.css";

function App() {
  const location = useLocation();
  const { nodeRef } =
    routeConfig.find((route) => route.path === location.pathname) ?? {};

  return (
    <div className="app">
      <Header />

      <div className="container">
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={500}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                <Routes location={location}>
                  {routeConfig.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      end={route.end}
                      element={route.element}
                    />
                  ))}
                </Routes>
              </div>
            )}
          </CSSTransition>
        </TransitionGroup>
      </div>

      <Footer />
    </div>
  );
}

export default App;
