import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/MyNavbar";
import "./App.css";
// import Harry from './Components/Harry';
import { Route, Routes } from "react-router-dom";
import RoutersApi from "./Components/RouterApi";
function App() {
  return (
    <div className="App">
      <MyNavbar />

      <Routes>
        {RoutersApi.map((navRt) => {
          return (
            <Route 
            key={navRt.id}
             path={navRt.path} 
             element={navRt.element} />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
