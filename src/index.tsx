import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./store/auth-context";
import {FormProvider} from './store/form-context'

ReactDOM.render(
  <AuthProvider>
    <FormProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </FormProvider>
  </AuthProvider>,
  document.getElementById("root")
);
