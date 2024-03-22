import { useEffect, useState } from 'react'
import getCoins from "../services/CoinGecko/getCoins";
import { Coin } from '../types'
import handleRequest from '../utils/handleRequest';


export default function useCoins() {
    const [coins, setCoins] = useState<Coin[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function handleCoins() {
                const response = await getCoins()
                setCoins(response.data)
        }

        handleRequest({ callBackFn: handleCoins, setLoading })
    }, [])

    return { coins, loading }
}