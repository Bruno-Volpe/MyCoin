import { useEffect } from "react";
import { useParams } from "react-router-dom";

import CardDetailDescription from "../../components/cardDetail/CardDetailDescription"
import CardDetailPrices from "../../components/cardDetail/CardDetailPrices"
import CardDetailChart from "../../components/cardDetail/CardDetailChart"

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchCoinDetail } from "../../store/slices/coinDetail";

export default function CardDetail() {
    const { id } = useParams<{ id: string }>();

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoinDetail(id ?? ""));
    }, [dispatch, id]);

    return (
        <>
            <CardDetailDescription />
            <CardDetailPrices />
            <CardDetailChart id={id ?? ''} />
        </>
    )
}