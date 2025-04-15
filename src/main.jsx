import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Store.js";
import { BrowserRouter } from "react-router";
import AuthContextProvider from "./context/AuthContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </Provider>
);
