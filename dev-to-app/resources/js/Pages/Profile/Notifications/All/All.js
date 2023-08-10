import Layout from "@/Pages/Layout/Layout";
import NotificationsUser from "../NotificationsUser";
import { useEffect, lazy, Suspense } from "react";
import Announcement from "../Announcement/Announcement";

const CommentsNotification = lazy(() => import('../../CommentsNotification/CommentsNotification'));

function All({commentUsers}) {

    useEffect(() => {
        console.log(commentUsers);
    });

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                {
                    typeof commentUsers === 'object' ?
                    <>
                        {
                            commentUsers.length > 0 ?
                            commentUsers.map((comment) => (
                                comment?.comments?.map((c) => (
                                    <CommentsNotification name={c?.users?.name} profileImage={c?.users?.profile_image} title={comment?.title} linkPost={`/${comment?.users[0]?.username}/${comment?.slug}`} linkProfileComment={`/${c?.users?.username}`} detailComment={c?.parent_comment !== null ? `/${c?.detail_reply?.users?.username}/comment/${c?.detail_reply?.id_comment}` : ''} detailReply={c?.detail_reply?.comment} commentText={c?.comment}/>
                                ))
                            ))
                            :
                            <h1>Comment not found</h1>

                        }
                    </>
                    :
                    <p>Contact our teams</p>
                }
            </Suspense>
            <Announcement/>
        </div>
    )
}

All.layout = page => (
    <Layout>
        <NotificationsUser children={page} />
    </Layout>
)

export default All;
