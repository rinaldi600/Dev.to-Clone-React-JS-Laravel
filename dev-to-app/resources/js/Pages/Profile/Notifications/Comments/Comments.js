import Layout from "@/Pages/Layout/Layout";
import NotificationsUser from "../NotificationsUser";
import { useEffect } from "react";
import CommentsNotification from "../../CommentsNotification/CommentsNotification";

function Comments() {

    useEffect(() => {

    })

    return (
        <div>
            <CommentsNotification/>
            <CommentsNotification/>
        </div>
    )
}

Comments.layout = page => (
    <Layout>
        <NotificationsUser children={page} />
    </Layout>
)

export default Comments;
