import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function CoinDetailDescription() {
    const coin = useSelector((state: RootState) => state.coinDetail);
    return (
        <div className='flex flex-col md:flex-row items-center justify-center w-full'>
            {
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
            }
        </div>
    );
}