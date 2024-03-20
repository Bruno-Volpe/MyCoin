import { useEffect, useState, useRef } from "react";

import CoinGekco from "../../services/CoinGecko";

import { CoinDetailHistory } from "../../types";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

interface ChartData {
    labels: CoinDetailHistory['prices'];
    datasets: {
        fill: boolean;
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }[];
}

export default function CardDetailChart({ id }: {id: string}) {
    const [loading, setLoading] = useState(true);

    const data = useRef<ChartData>()

    useEffect(() => {
        async function getCoins() {
            try {
                const response = await CoinGekco.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: 'brl',
                        days: 1
                    }
                })
        
                if (response.data.prices.length > 0) {
                    response.data.prices = response.data.prices.map((price: [number, number]) => {
                        return {
                            x: price[0],
                            y: price[1].toFixed(2)
                        }
                    }
                    )
                }

                data.current = {
                    labels: response.data.prices.filter((_: unknown, index: number) => index % 5 === 0).map((value: { x: moment.MomentInput; }) => moment(value.x).format('HH:mm')),
                    datasets: [
                        {
                            fill: true,
                            label: id,
                            data: response.data.prices.filter((_: unknown, index: number) => index % 5 === 0).map((val: { y: unknown; }) => val.y),
                            borderColor: 'black',
                            backgroundColor: '#FFD369',
                        }
                    ]
                };
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
        <div className="w-full flex items-center justify-center mt-24">
            {loading ? (
                <div className="text-white-100">Loading...</div>
            ) : (
                <Line
                    data={data.current || {
                        datasets: [],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                    }}
                    
                    width={24* 1000000}
                />
            )}
        </div>
    )
}