import React from "react";
import Layout from "@/Pages/Layout/Layout";

function Home() {
    return (
        <div className={'min-h-[500px] bg-[#F5F5F5]'}>
            <h1 className={'text-red-300'}>WORK</h1>
        </div>
    )
}

Home.layout = page => <Layout children={page} title="Welcome" />;

export default Home;
