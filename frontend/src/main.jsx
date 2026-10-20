import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux"
import {store} from "./App/app.store"
import './App/index.css'
import App from './App/App'

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <App />
   </Provider>
)
