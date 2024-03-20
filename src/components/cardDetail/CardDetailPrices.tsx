import { formatToBRL } from '../../utils/brasilCurrency';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

// Volume de mercado - market cap - OK 
// Alta e baixa - maior Valor e menor Valor - OK
// variação de preço nas últimas 24 horas - Maior menos o menor - OK
// gráfico de preço (se possível) -> Componente
export default function CoinDetailDescription() {
    const coin = useSelector((state: RootState) => state.coinDetail);
    
    return (
        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center w-full'>
            {
                coin ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-center justify-center w-full text-white-100 mt-24'>
                        <div className='text-center'>
                            <h2 className='text-2xl font-bold text-tertiary'>24 Hour Variation</h2>
                            <p className={coin.market_data.price_change_percentage_24h_in_currency.brl > 0 ? 'text-green-500' : 'text-red-500'}>
                                {(coin.market_data.price_change_percentage_24h_in_currency.brl).toFixed(2)}% 
                            </p>
                        </div>

                        <div className='text-center'>
                            <h2 className='text-2xl font-bold text-tertiary'>Highest and Lowest Value</h2>
                            <p className=''>
                                Highest: {formatToBRL(coin.market_data.high_24h.brl)}
                            </p>
                            <p className=''>
                                Lowest: {formatToBRL(coin.market_data.low_24h.brl)}
                            </p>
                        </div>


                        <div className='text-center'>
                            <h2 className='text-2xl font-bold text-tertiary'>Market Cap</h2>
                            <p className=''>
                                {formatToBRL(coin.market_data.market_cap.brl)}
                            </p>
                        </div>
                    </div>
                ) : (
                    <p className='text-white' >No currency available.</p>
                )
            }
        </div>
    );
}