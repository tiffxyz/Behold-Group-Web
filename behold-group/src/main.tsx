// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App.tsx";
// import { Provider } from "./provider.tsx";
// import { AuthProvider } from "./components/context/AuthContext.tsx";
// // import { Modal } from "@heroui/react";
// import "@/styles/globals.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <Provider>
//           <App />
//         </Provider>
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Provider } from "./provider.tsx";
// Removed AuthProvider import
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Removed AuthProvider here since it's redundant with AppProvider */}
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
