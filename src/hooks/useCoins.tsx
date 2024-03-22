import { useEffect, useState } from 'react'
import getCoins from "../services/CoinGecko/getCoins";
import { Coin } from '../types'
import { toast } from 'react-toastify'


export default function useCoins() {
    const [coins, setCoins] = useState<Coin[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function handleCoins() {
            try {
                const response = await getCoins()

                setCoins(response.data)
            }
            catch (error) {
                toast.warn('Token Espirado!') //TODO: substituir por um toast
            } finally {
                setLoading(false)
            }
        }

        handleCoins()
    }, [])

    return { coins, loading }
}