import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import countMenuReducer from './reducers/countMenuReducer'

const store = configureStore({
    reducer: {
        user: userReducer,
        countMenu: countMenuReducer
    },
});
export default store