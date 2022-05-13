import { configureStore } from '@reduxjs/toolkit';

//import { techNewsApi } from '../services/techNewsApi';
import { stockApi } from '../services/stockApi';
import { trendingApi } from '../services/trendingApi';

export default configureStore({
    reducer: {
        [stockApi.reducerPath]: stockApi.reducer,
        [trendingApi.reducerPath]: trendingApi.reducer,
    },
});