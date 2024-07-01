import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import AllRoutesFunc from "./routes/AllRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AllRoutesFunc />
    </AuthProvider>
  </React.StrictMode>
);
