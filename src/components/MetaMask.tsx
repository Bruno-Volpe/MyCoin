import { useSDK } from "@metamask/sdk-react";

const App = () => {
    const { sdk, connected, balance } = useSDK();

    const connect = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await sdk?.connectAndSign({
              msg: 'Connect + Sign message'
            });
          } catch (err) {
            alert(`failed to connect..`);
          }
    };

    return (
        <div>
            {connected ? (
                <div className="text-white-100 flex items-center">
                    <p>Conectado</p>
                    <p className="text-tertiary ml-4">{balance} ETH</p>
                </div>
            ) : (
                <button className="text-white-100 hover:text-tertiary" onClick={connect}>Wallet</button>
            )}
        </div>
    );
};

export default App;