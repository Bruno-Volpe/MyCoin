import { useEffect, useState } from 'react'
import CoinGekco from '../services/CoinGecko'
import { Coin } from '../types'
import { toast } from 'react-toastify'


export default function useCoins() {
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
                toast.warn('Token Espirado!') //TODO: substituir por um toast
            } finally {
                setLoading(false)
            }
        }

        getCoins()
    }, [])

    return { coins, loading }
}