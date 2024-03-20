import { configureStore } from "@reduxjs/toolkit";

import coinDetailReducer from "./slices/coinDetail";

export const store = configureStore({
    reducer: {
        coinDetail: coinDetailReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;