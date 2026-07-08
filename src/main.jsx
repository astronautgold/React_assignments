import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Task_one_provider from "./pages/Task_eighteen/Task_one/Task_one_provider.jsx";
import Product_provider from "./pages/Task_eighteen/Task_two/Product_provider.jsx";
import Three_provider from "./pages/Task_eighteen/Task_three/Three_provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Task_one_provider>
        <Product_provider>
          <Three_provider> <App /></Three_provider>
         
        </Product_provider>
      </Task_one_provider>
    </BrowserRouter>
  </StrictMode>,
);
