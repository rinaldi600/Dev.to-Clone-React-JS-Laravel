import Layout from "@/Pages/Layout/Layout";
import { Link, Head } from "@inertiajs/inertia-react";
import { useEffect, Suspense, React, lazy} from "react";

const CommentUser = lazy(() => import('../../../SeePost/CommentUser/CommentUser'));
const RecursiveComment = lazy(() => import('../../../SeePost/RecursiveComment/RecursiveComment'));

function DetailComment({comment, detailPost}) {

    useEffect(() => {
        console.log(comment);
    })

    return (
        <>
            <Head title={`${comment?.comment} - DEV Community`} />
            <div className="min-h-screen pt-5 font-['Segoe_UI'] bg-[#F5F5F5]">
                <div className="max-w-[1024px] mx-auto min-h-[777.2px]">
                    <div className="mx-auto bg-white min-h-[139.2px] grid items-center rounded-t-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] max-w-[960px] pl-5">
                        <div>
                            <div>
                                <h1 className="text-[#717171] text-2xl mb-4">Discussion on: <span className="font-bold text-[#242424]"><Link>{detailPost?.title}</Link></span></h1>
                                <Link href={`/${detailPost?.users[0]?.username}/${detailPost?.slug}`} className="border-2 border-[#D6D6D7] rounded-md font-medium text-base p-2">View post</Link>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto bg-white min-h-[541px] pt-8 overflow-hidden rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] max-w-[992px]">
                        <div className="w-[90%] mx-auto">
                            {
                                typeof comment?.reply_comment === 'object'
                                &&
                                typeof comment === 'object'
                                ?
                                <>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <CommentUser created_at={comment.created_at} name={comment?.users?.name} id={comment?.id} idPost={detailPost?.id_post} idComment={comment.id_comment} nestedComment textComment={comment.comment} profileUser={comment?.users?.profile_image}/>
                                        <RecursiveComment nestedComment={comment?.reply_comment}/>
                                    </Suspense>
                                </>
                                :
                                <p>Contact our developers...</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

DetailComment.layout = page => <Layout children={page} title="Welcome" />

export default DetailComment;
