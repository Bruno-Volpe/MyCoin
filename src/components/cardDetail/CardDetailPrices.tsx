import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { CoinDetailHistory } from '../../types';

import { formatToBRL } from '../../utils/brasilCurrency';

import CoinGecko from '../../services/CoinGecko';


// Volume de mercado - market cap 
// Alta e baixa - maior Valor e menor Valor - OK
// variação de preço nas últimas 24 horas - Maior menos o menor - OK
// gráfico de preço (se possível) -> Componente
export default function CoinDetailDescription() {
    const { id } = useParams<{ id: string }>();
    const [coin, setCoin] = useState<CoinDetailHistory>()
    const [loading, setLoading] = useState(true)

    const highest = useRef<number>()
    const lowest = useRef<number>()
    const variation = useRef<number>()
    const marketCap = useRef<number>()

    useEffect(() => {
        async function getCoins() {
            try {
                const date = new Date();
                const formattedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
                const response = await CoinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        date: formattedDate,
                        vs_currency: 'brl',
                        days: 1,
                    }
                })


                setCoin(response.data)
                if (response.data && response.data.prices.length > 0) {
                    lowest.current = Math.min(...response.data.prices.map((price: number[]) => price[1]));
                    highest.current = Math.max(...response.data.prices.map((price: number[]) => price[1]));
                    variation.current = ((response.data.prices[response.data.prices.length - 1][1] - response.data.prices[0][1]) / response.data.prices[0][1]) * 100
                }
                if (response.data && response.data.market_caps.length > 0) {
                    marketCap.current = response.data.market_caps[response.data.market_caps.length - 1][1]
                }
            }
            catch (error) {
                alert('Token Espirado!') //TODO: substituir por um toast
            } finally {
                setLoading(false)
            }
        }

        getCoins()
    }, [id])

    return (
        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center w-full'>
            {loading ? (
                <p className='text-white-100' >Carregando...</p>
            ) : (
                coin ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-center justify-center w-full text-white-100 mt-24'>
                        <div className='text-center'>
                            <h2 className='text-2xl font-bold text-tertiary'>24 Hour Variation</h2>
                            <p className={variation.current && variation.current > 0 ? 'text-green-500' : 'text-red-500'}>
                                {(variation.current ?? 0).toFixed(2)} %
                            </p>
                        </div>

                        <div className='text-center'>
                            <h2 className='text-2xl font-bold text-tertiary'>Highest and Lowest Value</h2>
                            <p className=''>
                                Highest: {formatToBRL(highest.current ?? 0)}
                            </p>
                            <p className=''>
                                Lowest: {formatToBRL(lowest.current ?? 0)}
                            </p>
                        </div>


                        <div className='text-center'>
                            <h2 className='text-2xl font-bold text-tertiary'>Market Cap</h2>
                            <p className=''>
                                {formatToBRL(marketCap.current ?? 0)}
                            </p>
                        </div>
                    </div>
                ) : (
                    <p className='text-white' >No currency available.</p>
                )
            )}
        </div>
    );
}