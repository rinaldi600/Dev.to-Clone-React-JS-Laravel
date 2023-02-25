import React, {Fragment, useEffect} from "react";
import Layout from '../../Layout/Layout';
import {Head} from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";
import {useDispatch, useSelector} from "react-redux";
import { close } from '../../../features/NavigationForUser/NavigationForUserSlice';

function LogOut() {

    const rememberMe = localStorage.hasOwnProperty('remember_me') ? JSON.parse(localStorage.getItem('remember_me')) : '';
    const { post, data } = useForm({
        session_id : rememberMe?.session_id,
        hash : rememberMe?.hash
    });
    const navigationForUser = useSelector(state => state.navigationForUser.value);
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        post('/logout_user');
        if (navigationForUser) {
            dispatch(close());
        }
        localStorage.clear();
    };

    return (
        <Fragment>
            <Head title="Confirm Signout - DEV Community" />
            <div className={`font-['Segoe_UI'] min-h-screen bg-[#F5F5F5] flex items-center justify-center`}>
                <div className={'w-full'}>
                    <h1 className={'text-2xl text-center break-words font-bold'}>
                        Are you sure you want to sign out?
                    </h1>
                    <div className={'flex mt-3 justify-center'}>
                        <form onSubmit={submit}>
                            <button className={'hover:bg-[#2F3AB2] w-[130.6px] h-[48px] rounded-md text-white font-medium text-center bg-[#3B49DF]'}>
                                Yes, sign out
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

LogOut.layout = page => <Layout children={page} title='Confirm Signout - DEV Community' />;

export default LogOut;
