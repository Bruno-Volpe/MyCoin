import { useEffect, useState, useRef } from "react";

import { CoinDetailHistory } from "../types";

import moment from "moment";
import getCoinHistory from "../services/CoinGecko/getCoinHistory";

import handleRequest from "../utils/handleRequest";

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

export default function useChart(id: string) {
    console.log(id)
    const [loading, setLoading] = useState(true);

    const data = useRef<ChartData>()

    useEffect(() => {
        async function handleCoins() {
                const response = await getCoinHistory(id, 1);
        
                // Getting x and y values from the response
                // x = timestamp
                // y = price
                if (response.data.prices.length > 0) {
                    response.data.prices = response.data.prices.map((price: [number, number]) => {
                        return {
                            x: price[0],
                            y: price[1].toFixed(2)
                        }
                    }
                    )
                }

                // Setting the data to the chart
                // The chart will only show 5 points
                // The points are the prices from the last 24 hours
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

        handleRequest({ callBackFn: handleCoins, setLoading })
    }, [id])

    return {
        loading,
        data
    }
}