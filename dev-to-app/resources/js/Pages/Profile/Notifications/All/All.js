import Layout from "@/Pages/Layout/Layout";
import NotificationsUser from "../NotificationsUser";
import { useEffect, React } from "react";
import CommentsNotification from "../../CommentsNotification/CommentsNotification";

function All() {

    useEffect(() => {

    });

    return (
        <div>
            <CommentsNotification/>
            <CommentsNotification/>
        </div>
    )
}

All.layout = page => (
    <Layout>
        <NotificationsUser children={page} />
    </Layout>
)

export default All;
