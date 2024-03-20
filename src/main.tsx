import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'

import { MetaMaskProvider } from "@metamask/sdk-react";

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
      <App />
    </Provider>
  </MetaMaskProvider>
)
