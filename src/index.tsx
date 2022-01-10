import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store";
import { FormProvider } from "./store/form-context";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <FormProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormProvider>
  </Provider>,
  document.getElementById("root")
);
