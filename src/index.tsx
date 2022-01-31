import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store";
import { FormProvider } from "./store/form-context";
import { AuthProvider } from "./store/auth-context";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <FormProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FormProvider>
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);
