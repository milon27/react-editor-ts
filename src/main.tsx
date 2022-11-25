import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@milon27/react-modal/dist/style.css'
import '@milon27/react-sidebar/dist/react-sidebar.css'
import 'react-toastify/dist/ReactToastify.css';

import './index.css'
// import 'react-quill/dist/quill.core.css';
// import 'react-quill/dist/quill.snow.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
