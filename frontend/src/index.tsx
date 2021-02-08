import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "@apollo/client";

import AppProvider from "./context/app";
import Router from "./router";
import client from "./client";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppProvider>
        <Router />
      </AppProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
