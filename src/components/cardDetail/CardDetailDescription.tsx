import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CoinDetail } from '../../types';

import CoinGecko from '../../services/CoinGecko';

export default function CoinDetailDescription() {
    const { id } = useParams<{ id: string }>();
    const [coin, setCoin] = useState<CoinDetail>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getCoins() {
            try {
                const response = await CoinGecko.get(`/coins/${id}`, {
                    params: {
                        localization: false,
                        tickers: false,
                        market_data: false,
                        community_data: false,
                        sparkline: false,
                        developer_data: false
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
        <div className='flex flex-col md:flex-row items-center justify-center w-full'>
            {loading ? (
                <p className='text-white-100' >Carregando...</p>
            ) : (
                coin ? (
                    <div className="flex flex-col md:flex-row items-center text-white justify-between w-full">
                        <div className="flex flex-col items-center mr-4 w-full md:w-1/2">
                            <img src={coin.image.large} alt={coin.name} className="w-auto h-32" />
                            <h2 className="text-2xl font-bold mt-4">{coin.name}</h2>
                        </div>
                        <p 
                            dangerouslySetInnerHTML={{__html: coin.description.en}} 
                            className="text-center mt-2 w-full md:w-1/2 overflow-auto max-h-52 scrollbar-thin scrollbar-thumb-tertiary scrollbar-track-secondary"
                            style={{ scrollbarColor: 'tertiary secondary' }}
                        ></p>

                    </div>
                ) : (
                    <p className='text-white' >No currency available.</p>
                )
            )}
        </div>
    );
}