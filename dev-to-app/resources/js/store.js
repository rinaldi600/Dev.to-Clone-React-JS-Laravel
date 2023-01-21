import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './features/Navbar/NavbarSlice';

export default configureStore({
    reducer: {
        navbar : navbarReducer
    }
});
