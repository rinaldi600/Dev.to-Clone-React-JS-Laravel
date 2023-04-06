import Layout from "@/Pages/Layout/Layout";
import NotificationsUser from "../NotificationsUser";

function Posts() {
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
