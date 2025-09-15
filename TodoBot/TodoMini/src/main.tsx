import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from "@/store"
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <BrowserRouter>
        <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
