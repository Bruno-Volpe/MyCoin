import { useEffect, useState } from 'react'
import CoinGekco from '../services/CoinGecko'
import { Coin } from '../types'

import Card from './Card'

export default function Cards() {
    const [coins, setCoins] = useState<Coin[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getCoins() {
            try {
                const response = await CoinGekco.get('/coins/markets', {
                    params: {
                        vs_currency: 'brl',
                        order: 'market_cap_desc',
                        per_page: 10,
                        page: 1,
                        sparkline: false
                    }
                })

                setCoins(response.data)
            }
            catch (error) {
                alert('Token Espirado!') //TODO: substituir por um toast
            } finally {
                setLoading(false)
            }
        }

        getCoins()
    }, [])

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