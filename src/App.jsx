import React from "react";
import "./App.css";
import Signup from "./pages/Signup";
import Welcome from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="App">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Welcome />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
