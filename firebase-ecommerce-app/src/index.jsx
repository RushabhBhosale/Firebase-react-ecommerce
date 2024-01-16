import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import store from "./redux/Store";
import { Toaster } from "react-hot-toast"
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 1000,
            style: {
              background: '#fffff3',
              color: '#000',
            },
            success: {
              duration: 1000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
