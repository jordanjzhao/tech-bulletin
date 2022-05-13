import { configureStore } from '@reduxjs/toolkit';

//import { techNewsApi } from '../services/techNewsApi';
import { stockApi } from '../services/stockApi';

export default configureStore({
    reducer: {
        [stockApi.reducerPath]: stockApi.reducer,
    },
});