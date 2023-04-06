import Layout from "@/Pages/Layout/Layout";
import NotificationsUser from "../NotificationsUser";
import { useEffect } from "react";

let urlPassing = '';
function All({url}) {

    useEffect(() => {
        urlPassing = url;
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
        <NotificationsUser url={urlPassing} children={page} />
    </Layout>
)

export default All;
