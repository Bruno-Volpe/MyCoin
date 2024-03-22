import CoinGecko from './index'

const getCoinHistory = async (coinId: string, days: number) => {
    return await CoinGecko.get(`/coins/${coinId}/market_chart`, {
        params: {
            vs_currency: 'brl',
            days
        }
    })
}

export default getCoinHistory