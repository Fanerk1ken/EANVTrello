import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    RouterProvider,
} from "react-router-dom";
import {router} from "./utils/router";
import { Provider } from 'react-redux'
import {store} from "./store/store.ts";
import './assets/styles/fonts.scss'
import './assets/styles/variable.scss'
import './assets/styles/core.scss'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <div style={{minHeight:'100vh', display: 'flex', flexDirection: 'column'}}>
            <RouterProvider router={router} />
        </div>
      </Provider>
  </React.StrictMode>
)
