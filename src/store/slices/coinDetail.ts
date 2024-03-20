import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import CoinGecko from '../../services/CoinGecko';

import { CoinDetails } from '../../types';

interface ApiResult {
    data: CoinDetails;
}

const initialState: CoinDetails = {
    id: '',
    symbol: '',
    name: '',
    description: {},
    image: {
        thumb: '',
        small: '',
        large: '',
    },
    market_data: {
        current_price: {
            brl: 0,
        },
        market_cap: {
            brl: 0,
        },
        total_volume: {
            brl: 0,
        },
        high_24h: {
            brl: 0,
        },
        low_24h: {
            brl: 0,
        },
        price_change_percentage_24h_in_currency: {
            brl: 0,
        },
    },
};

const coinDetailSlice = createSlice({
    name: 'coinDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCoinDetail.fulfilled, (_state, action) => {
            return _state = action.payload; // Update the state correctly
        });
    },
});

export const fetchCoinDetail = createAsyncThunk(
    'coinDetail/fetchCoinDetail',
    async (id: string) => {
        const coinDetail: ApiResult = await CoinGecko.get(`/coins/${id}`, {
            params: {
                localization: false,
                tickers: false,
                market_data: true,
                community_data: false,
                developer_data: false,
            },
        });
        return coinDetail.data;
    }
);

export default coinDetailSlice.reducer;
