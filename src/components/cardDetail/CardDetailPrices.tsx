import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CoinDetailHistory } from '../../types';

import CoinGecko from '../../services/CoinGecko';


// Volume de mercado - market cap 
// Alta e baixa - maior Valor e menor Valor - OK
// variação de preço nas últimas 24 horas - Maior menos o menor - OK
// gráfico de preço (se possível) -> Componente
export default function CoinDetailDescription() {
    const { id } = useParams<{ id: string }>();
    const [coin, setCoin] = useState<CoinDetailHistory>()
    const [loading, setLoading] = useState(true)

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
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 items-center justify-center w-full text-white-100 mt-24'>
                        <div className='text-center'>
                            <h2 className='text-2xl font-bold text-tertiary'>24 Hour Variation</h2>
                            {/* Percentagem do menor timeStemp sendo considerado 100% */}
                            <p className=''>{(coin.prices[0][1] * 100) / coin.prices[coin.prices.length - 1][1]}</p>
                        </div>

                        <div className='text-center'>
                            <h2 className='text-2xl font-bold text-tertiary'>Highest and Lowest Value</h2>
                            <p className=''>
                                Highest: {Math.max(...coin.prices.map(price => price[1]))}
                            </p>
                            <p className=''>
                                Lowest: {Math.min(...coin.prices.map(price => price[1]))}
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