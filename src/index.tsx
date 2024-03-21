// @ts-nocheck
/* tslint:disable */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { queryClient } from "@services";
import * as serviceWorker from "@libs/serviceWorker/service";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> 
      <BrowserRouter>    
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

if (process.env.NODE_ENV === 'production') {
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
      (async () => {
        const { Install } = await import('@libs/serviceWorker/install');
        new Install(document.querySelector('#install'));
      })();  
    });

    serviceWorker.register();
  }
} else {
  serviceWorker.unregister();
}

reportWebVitals();