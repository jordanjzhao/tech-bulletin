import { configureStore } from '@reduxjs/toolkit';

import { stockApi } from '../services/stockApi';
import { trendingApi } from '../services/trendingApi';
import { techNewsApi } from '../services/techNewsApi';

export default configureStore({
    reducer: {
        [stockApi.reducerPath]: stockApi.reducer,
        [trendingApi.reducerPath]: trendingApi.reducer,
        [techNewsApi.reducerPath]: techNewsApi.reducer,
    },
});