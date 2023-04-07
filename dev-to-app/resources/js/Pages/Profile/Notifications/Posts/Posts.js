import Layout from "@/Pages/Layout/Layout";
import NotificationsUser from "../NotificationsUser";
import { useEffect } from "react";


function Posts() {

    useEffect(() => {

    })

    return (
        <div>
            <h1>Posts</h1>
        </div>
    )
}

Posts.layout = page => (
    <Layout>
        <NotificationsUser children={page} />
    </Layout>
)

export default Posts;
