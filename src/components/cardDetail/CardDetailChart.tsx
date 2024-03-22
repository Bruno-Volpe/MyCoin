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
import useChart from "../../hooks/useChart";

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

export default function CardDetailChart({ id }: {id: string}) {
    const { loading, data } = useChart(id);

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