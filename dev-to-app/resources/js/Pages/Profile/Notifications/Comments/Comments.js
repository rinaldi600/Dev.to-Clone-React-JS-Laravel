import Layout from "@/Pages/Layout/Layout";
import NotificationsUser from "../NotificationsUser";
import { useEffect } from "react";

function Comments() {

    useEffect(() => {

    })

    return (
        <div>
            <h1>Comments</h1>
        </div>
    )
}

Comments.layout = page => (
    <Layout>
        <NotificationsUser children={page} />
    </Layout>
)

export default Comments;
