import { useEffect, useState } from 'react'
import CoinGekco from '../services/CoinGecko'
import { Coin } from '../types'

import Card from './Card'

export default function Cards() {
    const [coins, setCoins] = useState<Coin[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getCoins() {
            const response = await CoinGekco.get('/coins/markets', {
                params: {
                    vs_currency: 'brl',
                    order: 'market_cap_desc',
                    per_page: 10,
                    page: 1,
                    sparkline: false
                }
            })

            if (response.status !== 200) {
                alert('Token Espirado!') //TODO: substituir por um toast
                return
            }

            setCoins(response.data)
            setLoading(false)
        }

        getCoins()
    }, [])

    return (
        <>
            {loading ? (
                <p>Carregando...</p>
            ) : (
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
            )}
        </>
    )
}