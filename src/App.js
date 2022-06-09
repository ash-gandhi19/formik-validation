import "./App.css";
import Siderbar from "./Components/Sidebar";
import AllCollegelist from "./Components/AllCollegelist";
import AddCollege from "./Components/AddCollege";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

export const CollegeContext = React.createContext();
function App() {
  let [college, setCollege] = useState([]);
  return (
    <>
      <Router>
        <CollegeContext.Provider value={{ college, setCollege }}>
          <div style={{ display: "grid", gridTemplateColumns: "17% 83%" }}>
            <div>
              <Siderbar />
            </div>
            <div>
              <Routes>
                <Route path="/collegelist" element={<AllCollegelist />} />
                <Route path="/add-college" element={<AddCollege />} />
                <Route path="/" element={<AllCollegelist />} />
              </Routes>
            </div>
          </div>
        </CollegeContext.Provider>
      </Router>
    </>
  );
}

export default App;
