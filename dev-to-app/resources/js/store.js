import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './features/Navbar/NavbarSlice';
import navigationForUser from './features/NavigationForUser/NavigationForUserSlice';

export default configureStore({
    reducer: {
        navbar : navbarReducer,
        navigationForUser,
    }
});
