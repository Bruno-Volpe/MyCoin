import { Coin } from '../types'
import Card from './Card'

import useCoins from '../hooks/useCoins'

export default function Cards() {
    const { coins, loading } = useCoins()

    return (
        <div className='flex flex-row items-center justify-center w-full'>
            {loading ? (
                <p className='text-white-100' >Carregando...</p>
            ) : (
                coins.length > 0 ? (
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
                        {coins.map((coin: Coin) => (
                            <div key={coin.id}>
                                <Card 
                                    id={coin.id}
                                    name={coin.name}
                                    symbol={coin.symbol}
                                    current_price={coin.current_price}
                                    image={coin.image}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className='text-white-100' >No currency available.</p>
                )
            )}
        </div>
    );    
}