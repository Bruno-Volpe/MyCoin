import CoinGekco from './index'

const getCoins = async () => {
    const params = {
        vs_currency: 'brl',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
        sparkline: false
    }

    return await CoinGekco.get('/coins/markets', { params })
}
export default getCoins
