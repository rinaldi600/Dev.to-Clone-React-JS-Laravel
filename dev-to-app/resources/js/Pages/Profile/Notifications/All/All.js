import Layout from "@/Pages/Layout/Layout";
import NotificationsUser from "../NotificationsUser";
import { useEffect } from "react";


function All() {

    useEffect(() => {
        // console.log(window.location.href);
        // console.log(url);
    });

    return (
        <div>
            <h1>All</h1>
        </div>
    )
}

All.layout = page => (
    <Layout>
        <NotificationsUser children={page} />
    </Layout>
)

export default All;
