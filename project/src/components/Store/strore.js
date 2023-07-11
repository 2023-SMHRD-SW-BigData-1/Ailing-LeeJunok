import {configureStore} from '@reduxjs/toolkit';
import cart from './cartSlice.js';
import user from './userSlice.js';
import loadimg from './loadingSlice.js';
import like from './likeSlice.js';

export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer,
        loading: loading.reducer,
        like : like.reducer,
    },
});