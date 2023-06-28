import "./App.css";
import React, { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BrowserRouter } from "react-router-dom";

function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
            </div>
          ) : (
            <div className="w-0">Sidebar w-0</div>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
