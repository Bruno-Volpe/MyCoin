interface CardProps {
    name: string;
    symbol: string;
    current_price: number;
    image: string;
}

export default function Card({ name, symbol, current_price, image}: CardProps) {
    return (
        <div className="block rounded-lg bg-secondary shadow-secondary-1 m-2 p-6">
            <div className="flex justify-center">
                <img className="rounded-t-lg h-36 w-auto" src={image} alt={name} />
            </div>
            <div className="p-6 mt-12 h-36 w-full text-white-100">
                <div className="flex items-center justify-between">
                    <h2 className="mb-2 text-xl font-medium leading-tight">{name}</h2>
                    <p className="mb-4 text-base">{symbol}</p>
                </div>
                <p className="text-lg mt-4 text-center font-bold">R$ {current_price}</p>
            </div>
        </div>
    )
}