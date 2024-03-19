import { useEffect, useState } from 'react'

import { Coin } from '../../types'

import CoinGekco from '../../services/CoinGecko'

export default function Dashboard () {
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
            setCoins(response.data)
            setLoading(false)
        }

        getCoins()
    }, [])
    return(
        <>
            <h1 className="text-white-100" >Dashboard</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Variação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins.map(coin => (
                            <tr key={coin.id}>
                                <td>{coin.name}</td>
                                <td>{coin.current_price}</td>
                                <td>{coin.price_change_percentage_24h}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}