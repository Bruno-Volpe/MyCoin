import { useSDK } from "@metamask/sdk-react";
import { FaEthereum, FaCircle } from "react-icons/fa";

import { toast } from 'react-toastify'

const App = () => {
    const { sdk, connected, balance } = useSDK();

    const connect = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await sdk?.connectAndSign({
              msg: 'Connect + Sign message'
            });
          } catch (err) {
            toast.warn(`failed to connect..`);
          }
    };

    return (
        <div>
            {connected ? (
                <div className="text-white-100 flex items-center justify-center">
                    <FaCircle className="mr-2 text-green-500" /> 
                    <p>Conectado</p>
                    <p className="text-tertiary ml-4 flex items-center justify-center"><FaEthereum /> {balance ?? 0} ETH</p>
                </div>
            ) : (
                <button className="text-white-100 hover:text-tertiary" onClick={connect}>Wallet</button>
            )}
        </div>
    );
};

export default App;