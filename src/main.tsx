import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'

import { MetaMaskProvider } from "@metamask/sdk-react";

import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MetaMaskProvider
    debug={false}
    sdkOptions={{
        dappMetadata: {
            name: "Connect to your MetaMask Wallet",
            url: window.location.href,
        },
        storage: {
            enabled: true,
        },

    }}
  >
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <App />
    </Provider>
  </MetaMaskProvider>
)
