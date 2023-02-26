import React, {useEffect} from "react";
import Layout from "@/Pages/Layout/Layout";
import CardLoginAndSignUp from "@/Pages/Layout/CardLoginAndSignUp/CardLoginAndSignUp";
import Category from "@/Pages/Layout/Category/Category";
import Tags from "@/Pages/Home/Tags/Tags";
import Listings from "@/Pages/Home/Listings/Listings";
import TagsHome from "@/Pages/Home/TagsHome/TagsHome";
import Trendings from "@/Pages/Home/Trendings/Trendings";
import Recentlys from "@/Pages/Home/RecentlyQueried/Recentlys";
import Contents from "@/Pages/Home/Contents/Contents";
import {Head} from "@inertiajs/inertia-react";
import {useSelector} from "react-redux";

function Home({title, isRememberMe}) {

    const navbar = useSelector(state => state.navbar.value);

    useEffect(() => {
       if (isRememberMe !== null) {
           if (isRememberMe.hasOwnProperty('session_id') && isRememberMe.hasOwnProperty('hash')) {
               localStorage.setItem('remember_me', JSON.stringify(isRememberMe));
           }
       }
    });

    return (
        <>
            <Head >
                <title>{title}</title>
            </Head>
            <div className={`font-['Segoe_UI'] bg-[#F5F5F5] w-full`}>
                <div className={'max-w-[1280px] pt-3 mx-auto justify-center flex gap-3'}>
                    <div className={'hidden min-h-max md:block w-[267.2px]'}>
                        <div className={'w-full bg-[#FAFAFA] p-2 rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.16)]'}>
                            <CardLoginAndSignUp/>
                        </div>
                        <Category/>
                        <Tags/>
                    </div>
                    <div className={`${navbar ? 'overflow-hidden h-screen' : 'min-h-max'} w-[650.662px]`}>
                        <Contents/>
                    </div>
                    <div className={'hidden lg:block w-[325.337px] min-h-max'}>
                        <Listings/>
                        <TagsHome/>
                        <Trendings/>
                        <Recentlys/>
                    </div>
                </div>
            </div>
        </>
    )
}

Home.layout = page => <Layout children={page} title="Welcome" />;

export default Home;
