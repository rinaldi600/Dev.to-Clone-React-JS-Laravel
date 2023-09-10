import Layout from "@/Pages/Layout/Layout";
import NotificationsUser from "../NotificationsUser";
import { useEffect, lazy, Suspense } from "react";

const CommentsNotification = lazy(() => import('../../CommentsNotification/CommentsNotification'));

function Comments({commentUsers}) {

    useEffect(() => {

    })

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
                                    <CommentsNotification name={c?.users?.name} profileImage={c?.users?.profile_image} title={comment?.title} linkPost={`/${comment?.users[0]?.username}/${comment?.slug}`} linkProfileComment={`/${c?.users?.username}`} detailComment={c?.parent_comment !== null ? `/${c?.detail_reply?.users?.username}/comment/${c?.detail_reply?.id_comment}` : ''} detailReply={c?.detail_reply?.comment} commentText={c?.comment} createdAtComment={c?.created_at} idPost={comment?.id_post} idComment={c?.id_comment}/>
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
        </div>
    )
}

Comments.layout = page => (
    <Layout>
        <NotificationsUser children={page} />
    </Layout>
)

export default Comments;
